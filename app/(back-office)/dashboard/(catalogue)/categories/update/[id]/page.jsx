import NewCategoryForm from "@/components/backoffice/Form/NewCategoryForm";
import React from "react";
import FormHeader from "@/components/backoffice/FormHeader";
import { getData } from "@/lib/getData";

export default async function UpdateCategory({ params: { id } }) {
    const category = await getData(`categories/${id}`);
    return (
        <div>
            <FormHeader title="카테고리 업데이트" />
            <NewCategoryForm updateData={category} />
        </div>
    );
}
