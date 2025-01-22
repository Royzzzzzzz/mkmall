import BannerForm from "@/components/backoffice/Form/BannerForm";
import FormHeader from "@/components/backoffice/FormHeader";
import React from "react";
import { getData } from "@/lib/getData";

export default async function UpdateBanner({ params: { id } }) {
    const banner = await getData(`banners/${id}`);
    return (
        <div>
            <FormHeader title="배너 업데이트" />
            <BannerForm updateData={banner} />
        </div>
    );
}
