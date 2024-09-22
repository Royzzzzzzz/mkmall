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
import SelectInput from "@/components/FormInputs/SelectInput";

export default function NewCoupon() {
    const [logoUrl, setLogoUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const categories = [
        {
            id: 1,
            title: "Category1",
        },
        {
            id: 2,
            title: "Category2",
        },
        {
            id: 3,
            title: "Category3",
        },
    ];
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
    async function onSubmit(data) {
        {
            /* 
      -id => auto()
      -title 
      -slug => auto
      -Logo
      -description
       */
        }
        const slug = generateSlug(data.title);
        data.slug = slug;
        console.log(process.env.NEXT_PUBLIC_BASE_URL);
        data.logoUrl = logoUrl;
        console.log(data);
        // makePostRequest(setLoading, "api/markets", data, "Market", reset);
        setLogoUrl("");
    }
    return (
        <div>
            <FormHeader title="마켓 새로만들기" />
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <TextInput label="마켓 제목" name="title" register={register} errors={errors} className="w-full" />
                    <SelectInput label="카테고리 선택" name="categoryIds" register={register} errors={errors} className="w-full" options={categories} multiple={true} />
                    <ImageInput label="마켓 로고" imageUrl={logoUrl} setImageUrl={setLogoUrl} endpoint="marketLogoUploader" />
                    <TextareaInput label="마켓 설명" name="description" register={register} errors={errors} />
                    <ToggleInput label="시장 공개여부" name="isActive" trueTitle="Active" falseTitle="Draft" register={register} />
                </div>
                <SubmitButton isLoading={loading} buttonTitle="마켓 생성" loadingButtonTitle="마켓 생성중입니다..." />
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
