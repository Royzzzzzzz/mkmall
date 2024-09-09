"use client";
import FormHeader from "@/components/backoffice/FormHeader";
import ImageInput from "@/components/FormInputs/ImageInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { generateSlug } from "@/lib/generateSlug";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewCoupon() {
    const [loading, setLoading] = useState(false);
    const [couponCode, setCouponCode] = useState();
    const {
        register,
        reset,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm();
    async function onSubmit(data) {
        {
            /* 
      -id => auto()
      -title 
      -code => auto()
      -expiryData
       */
        }
        // setLoading(true);
        // data.slug = slug;
        // data.imageUrl = imageUrl;
        console.log(data);
        // makePostRequest(setLoading, "api/categories", data, "Category", reset);
        // setImageUrl("");
    }
    return (
        <div>
            <FormHeader title="새로운 쿠폰 발행" />
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <TextInput label="Coupon Title" name="title" register={register} errors={errors} className="w-full" />
                    <TextInput label="Coupon Code" name="couponCode" defaultValue="BLACKFRIDAY-12252024" register={register} errors={errors} className="w-full" />
                    <TextInput label="Coupon Expiry Date" type="date" name="expiryDate" register={register} errors={errors} className="w-full" />
                </div>
                <SubmitButton isLoading={loading} buttonTitle="쿠폰 생성" loadingButtonTitle="쿠폰 생성중입니다..." />
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
