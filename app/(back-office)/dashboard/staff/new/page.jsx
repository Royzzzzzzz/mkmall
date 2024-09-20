"use client";
import FormHeader from "@/components/backoffice/FormHeader";
import ImageInput from "@/components/FormInputs/ImageInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { generateSlug } from "@/lib/generateSlug";
import { generateCouponCode } from "@/lib/generateCouponCode";
import { makePostRequest } from "@/lib/apiRequest";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { generateUserCode } from "@/lib/generateUserCode";

export default function NewStaff() {
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
  /*
  -name 
  -password
  -email
  -phone
  -physicalAddress
  -NIN
  -DOB
  -notes
  -isActive
  -몽고db비번: QWl6qxsZJ7tN0Jik
  */
  async function onSubmit(data) {
    {
      /* 
      -id => auto()
      -title 
      -code => auto()
      -expiryData
       */
    }
    const code = generateUserCode("LSM", data.name);
    data.code = code;
    console.log(data);
    makePostRequest(setLoading, "api/staffs", data, "Staff", reset);
  }
  return (
    <div>
      <FormHeader title="새로운 직원 추가" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="직원 이름"
            name="name"
            register={register}
            errors={errors}
          />
          <TextInput
            label="NIN (Id Number)"
            name="nin"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="생년월일"
            name="dob"
            type="date"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="비밀번호"
            name="password"
            type="password"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            label="직원 이메일"
            name="email"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="직원 연락처"
            name="phone"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="직원 주소"
            name="physicalAddress"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextareaInput
            label="Notes"
            name="비고"
            register={register}
            errors={errors}
            isRequired={false}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="직원 추가"
          loadingButtonTitle="직원 추가중입니다..."
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
