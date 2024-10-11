"use client";
import FormHeader from "@/components/backoffice/FormHeader";
import ArrayItemInput from "@/components/FormInputs/ArrayItemInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import { generateUserCode } from "@/lib/generateUserCode";
import { Plus, X, XCircle } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewProduct() {
  const [imageUrl, setImageUrl] = useState("");
  const categories = [
    {
      id: 1,
      title: "카테고리 1",
    },
    {
      id: 2,
      title: "카테고리 2",
    },
    {
      id: 3,
      title: "카테고리 3",
    },
  ];
  const farmers = [
    {
      id: 1,
      title: "공급자 1",
    },
    {
      id: 2,
      title: "공급자 2",
    },
    {
      id: 3,
      title: "공급자 3",
    },
  ];
  const [tags, setTags] = useState([]);
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
      isWholesale: false,
    },
  });
  const isActive = watch("isActive");
  const isWholesale = watch("isWholesale");
  console.log(isActive);
  async function onSubmit(data) {
    {
      /* 
      -id => auto()
      -title 
      -slug => auto()
      -description 
      -image/images[]
      -sku
      -barcode
      -productPrice
      -salePrice
      -category
      -farmer
      -tags[]
       */
    }
    // setLoading(true);
    const slug = generateSlug(data.title);
    const productCode = generateUserCode("MP", data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.tags = tags;
    data.productCode = productCode;
    console.log(data);
    makePostRequest(setLoading, "api/products", data, "Product", reset);
    setImageUrl("");
  }
  return (
    <div>
      <FormHeader title="새로운 상품 추가" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="상품 이름"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="상품 SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="상품 바코드"
            name="barcode"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="상품 가격(할인 전 가격)"
            name="productPrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="상품 할인가격(할인 후 가격)"
            name="salePrice"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <TextInput
            label="측정단위"
            name="unit"
            register={register}
            errors={errors}
          />
          <SelectInput
            label="카테고리 선택"
            name="categoryId"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
          />
          <SelectInput
            label="공급자 선택"
            name="farmerId"
            register={register}
            errors={errors}
            className="w-full"
            options={farmers}
          />
          <ToggleInput
            label="도매전용"
            name="isWholesale"
            trueTitle="도매전용"
            falseTitle="소매전용"
            register={register}
          />
          {isWholesale && (
            <>
              <TextInput
                label="도매 가격"
                name="wholesalePrice"
                register={register}
                errors={errors}
                type="number"
                className="w-full"
              />
              <TextInput
                label="최소 도매 수량"
                name="wholesaleQty"
                register={register}
                errors={errors}
                type="number"
                className="w-full"
              />
            </>
          )}
          <ImageInput
            label="상품 이미지"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="productImageUploader"
          />
          {/* 태그 */}
          <ArrayItemInput setItems={setTags} items={tags} itemTitle="Tag" />
          <TextareaInput
            label="상품 설명"
            name="description"
            register={register}
            errors={errors}
          />
          <ToggleInput
            label="제품 공개여부"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="상품 생성"
          loadingButtonTitle="상품 생성중입니다..."
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
