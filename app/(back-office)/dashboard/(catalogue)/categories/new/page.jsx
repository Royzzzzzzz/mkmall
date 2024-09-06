"use client";
import FormHeader from "@/components/backoffice/FormHeader";
import ImageInput from "@/components/FormInputs/ImageInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
    const slug = generateSlug(data.title);
    data.slug = slug;
    console.log(data);
  }
  return (
    <div>
      <FormHeader title="새로운 카테고리 추가" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            Label="카테고리 이미지"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="categoryImageUploader"
          />
        </div>

        <SubmitButton
          isLoading={false}
          buttonTitle="카테고리 생성"
          loadingButtonTitle="카테고리 생성중입니다..."
        />
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
