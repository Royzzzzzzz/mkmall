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
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
const QuillEditor = dynamic(
  () => import("@/components/FormInputs/QuillEditor"),
  {
    ssr: false,
  }
);
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewTrainingForm({ categories }) {
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

  // Quill Editor
  const [content, setContent] = useState("");
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/community");
  }
  // Quill EDITOR END

  const isActive = watch("isActive");
  async function onSubmit(data) {
    {
      /* 
      -id => auto()
      -title 
      -expertId
      -categoryId
      -slug => auto()
      -description 
      -content => richText
      -image
       */
    }
    // setLoading(true);
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.content = content;
    console.log(data);
    makePostRequest(
      setLoading,
      "api/trainings",
      data,
      "Training",
      reset,
      redirect
    );
    setImageUrl("");
    setContent("");
  }
  return (
    <div>
      <FormHeader title="새로운 트레이닝 추가" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="트레이닝 이름"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="카테고리 선택"
            name="categoryId"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
          />
          <TextareaInput
            label="트레이닝 설명"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            label="트레이닝 썸네일"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="trainingImageUploader"
          />
          {/* 콘텐츠 시작 */}
          <QuillEditor
            label="트레이닝 콘텐츠"
            value={content}
            onChange={setContent}
          />
          {/* 콘텐츠 종료 */}
          <ToggleInput
            label="트레이닝 공개여부"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="트레이닝 생성"
          loadingButtonTitle="트레이닝 생성중입니다..."
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
