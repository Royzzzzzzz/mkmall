"use client";
import FormHeader from "@/components/backoffice/FormHeader";
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewCategory() {
    const [imageUrl, setImageUrl] = useState("");
    const markets = [];
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
    async function onSubmit(data) {
        {
            /* 
      -id => auto()
      -title 
      -slug => auto()
      -description 
      -image
       */
        }
        // setLoading(true);
        const slug = generateSlug(data.title);
        data.slug = slug;
        data.imageUrl = imageUrl;
        console.log(data);
        makePostRequest(setLoading, "api/categories", data, "Category", reset);
        setImageUrl("");
    }
    return (
        <div>
            <FormHeader title="새로운 카테고리 추가" />
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <TextInput label="카테고리 이름" name="title" register={register} errors={errors} />
                    {/* <SelectInput label="시장 선택" name="marketIds" register={register} errors={errors} className="w-full" options={markets} multiple={true} /> */}
                    <TextareaInput label="카테고리 설명" name="description" register={register} errors={errors} />
                    <ImageInput label="카테고리 이미지" imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="categoryImageUploader" />
                    <ToggleInput label="카테고리 공개여부" name="isActive" trueTitle="Active" falseTitle="Draft" register={register} />
                </div>
                <SubmitButton isLoading={loading} buttonTitle="카테고리 생성" loadingButtonTitle="카테고리 생성중입니다..." />
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
