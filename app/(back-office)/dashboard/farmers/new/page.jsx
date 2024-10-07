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
import NewFarmerForm from "@/components/backoffice/NewFarmerForm";

export default function NewFarmer() {
  return (
    <div>
      <FormHeader title="공급업체 등록" />
      <NewFarmerForm />
    </div>
  );
}
