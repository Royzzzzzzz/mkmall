"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SubmitButton from "../FormInputs/SubmitButton";
import TextInput from "../FormInputs/TextInput";

export default function RegisterForm() {
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
            const response = await fetch(`${baseUrl}/api/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const newUser = await response.json();
                console.log(newUser);
                setLoading(false);
                toast.success("User Created Successfully");
                reset();
                // router.push("/login");
            } else {
                setLoading(false);
                if (response.status === 409) {
                    setEmailErr("User with this Email already exists");
                    toast.error("User with this Email already exists");
                } else {
                    // Handle other errors
                    console.error("Server Error:", responseData.message);
                    toast.error("Oops Something Went wrong");
                }
            }
        } catch (error) {
            setLoading(false);
            console.error("Network Error:", error);
            toast.error("Something Went wrong, Please Try Again");
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
            <TextInput label="성함" name="name" register={register} errors={errors} type="text" className="sm:col-span-2 mb-3" />
            <TextInput label="이메일주소" name="eamil" register={register} errors={errors} type="email" className="sm:col-span-2 mb-3" />
            <TextInput label="비밀번호" name="password" register={register} errors={errors} type="password" className="sm:col-span-2 mb-3" />

            <SubmitButton isLoading={loading} buttonTitle="Register" loadingButtonTitle="회원가입 등록중입니다..." />

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-purple-600 hover:underline dark:text-purple-500">
                    Login
                </Link>
            </p>
        </form>
    );
}
