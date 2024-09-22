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
import { useRouter } from "next/navigation";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { generateUserCode } from "@/lib/generateUserCode";

export default function NewFarmer() {
    const [loading, setLoading] = useState(false);
    const {
        register,
        reset,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter();
    const isActive = watch("isActive");
    function redirect() {
        router.push("/dashboard/farmers");
    }
    async function onSubmit(data) {
        {
            /* 
      -id => auto()
      -title 
      -code => auto()
      -expiryData
       */
        }
        const code = generateUserCode("LFF", data.name);
        data.code = code;
        console.log(data);
        makePostRequest(setLoading, "api/farmers", data, "Farmer", reset, redirect);
    }
    return (
        <div>
            <FormHeader title="공급업체 등록" />
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <TextInput label="공급업체 이름" name="name" register={register} errors={errors} className="w-full" />
                    <TextInput label="공급업체 전화번호" name="phone" type="tel" register={register} errors={errors} className="w-full" />
                    <TextInput label="공급업체 이메일주소" name="email" register={register} errors={errors} className="w-full" />
                    <TextInput label="공급업체 주소" name="physicalAddress" register={register} errors={errors} className="w-full" />
                    <TextInput label="공급업체 담당자" name="contactPerson" register={register} errors={errors} className="w-full" />
                    <TextInput label="공급업체 담당자 연락처" name="contactPersonPhone" type="tel" register={register} errors={errors} className="w-full" />
                    <TextareaInput label="공급업체 결제일" name="terms" register={register} errors={errors} isRequired={false} />
                    <TextareaInput label="비고" name="notes" register={register} errors={errors} isRequired={false} />
                    <ToggleInput label="공급업체 상태" name="isActive" trueTitle="Active" falseTitle="Draft" register={register} />
                </div>
                <SubmitButton isLoading={loading} buttonTitle="공급업체 추가" loadingButtonTitle="공급업체 생성중입니다..." />
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
