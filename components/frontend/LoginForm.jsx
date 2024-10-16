"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SubmitButton from "../FormInputs/SubmitButton";
import TextInput from "../FormInputs/TextInput";

export default function LoginForm({ role = "USER" }) {
  const router = useRouter(); //리디렉션
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [emailErr, setEmailErr] = useState("");
  async function onSubmit(data) {
    try {
      console.log(data);
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.ok) {
        console.log(responseData);
        setLoading(false);
        toast.success("회원가입이 성공적으로 완료되었습니다");
        reset();
        //role = user => home
        //role = farmer => onboarding
        // const userRole = responseData.data.role
        if (role === "USER") {
          router.push("/");
        } else {
          router.push(`/onboarding/${responseData.data.id}`);
        }
      } else {
        setLoading(false);
        if (response.status === 409) {
          setEmailErr("이 이메일로 가입된 유저가 있습니다");
          toast.error("이 이메일로 가입된 유저가 있습니다");
        } else {
          // Handle other errors
          console.error("서버에러:", responseData.error);
          toast.error("Oops Something Went wrong");
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("네트워크 에러:", error);
      toast.error("생성 실패, 다시 시도해 주세요");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <TextInput
        label="이메일주소"
        name="email"
        register={register}
        errors={errors}
        type="email"
        className="mb-3 sm:col-span-2"
      />
      {emailErr && (
        <small className="mb-2 -mt-2 text-red-600">{emailErr}</small>
      )}
      <TextInput
        label="비밀번호"
        name="password"
        register={register}
        errors={errors}
        type="password"
        className="mb-3 sm:col-span-2"
      />

      <SubmitButton
        isLoading={loading}
        buttonTitle="로그인"
        loadingButtonTitle="로그인 중입니다..."
      />

      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        계정이 없으신가요?{" "}
        <Link
          href="/register"
          className="font-medium text-purple-600 hover:underline dark:text-purple-500"
        >
          회원가입
        </Link>
      </p>
    </form>
  );
}
