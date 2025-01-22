import React from "react";
import { getData } from "@/lib/getData";
import BannerForm from "@/components/backoffice/Form/BannerForm";
import FormHeader from "@/components/backoffice/FormHeader";

export default async function UpdateCoupon({ params: { id } }) {
    const coupon = await getData(`coupons/${id}`);
    return (
        <div>
            <FormHeader title="카테고리 업데이트" />
            <BannerForm updateData={coupon} />
        </div>
    );
}
