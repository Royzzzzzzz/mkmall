"use client";
import FormHeader from "@/components/backoffice/FormHeader";
import ImageInput from "@/components/FormInputs/ImageInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { generateSlug } from "@/lib/generateSlug";
import { makePostRequest } from "@/lib/apiRequest";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { useRouter } from "next/navigation";

export default function NewCoupon() {
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const {
        register,
        reset,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            isActive: true,
        },
    });
    const isActive = watch("isActive");
    const router = useRouter();
    function redirect() {
        router.push("/dashboard/banners");
    }
    async function onSubmit(data) {
        {
            /* 
      -id => auto()
      -title 
      -link
      -image
      isActive
       */
        }
        console.log(process.env.NEXT_PUBLIC_BASE_URL);
        data.imageUrl = imageUrl;
        console.log(data);
        makePostRequest(setLoading, "api/banners", data, "Banner", reset, redirect);
        setImageUrl("");
    }
    return (
        <div>
            <FormHeader title="배너 새로만들기" />
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <TextInput label="배너 제목" name="title" register={register} errors={errors} />
                    <TextInput label="배너 링크" name="link" type="url" register={register} errors={errors} />
                    {/* Configure this endpoint in the core js */}
                    <ImageInput label="배너 이미지" imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="bannerImageUploader" />
                    <ToggleInput label="배너 공개여부" name="isActive" trueTitle="Active" falseTitle="Draft" register={register} />
                </div>
                <SubmitButton isLoading={loading} buttonTitle="배너 생성" loadingButtonTitle="배너 생성중입니다..." />
            </form>
            {/* 
      -id
      -title
      -slug
      -description
      -image
       */}
        </div>
    );
}
