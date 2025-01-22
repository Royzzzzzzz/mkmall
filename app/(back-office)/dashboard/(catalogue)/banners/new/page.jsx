import BannerForm from "@/components/backoffice/Form/BannerForm";
import FormHeader from "@/components/backoffice/FormHeader";

export default function NewBanner() {
    return (
        <div>
            <FormHeader title="배너 새로만들기" />
            <BannerForm />
        </div>
    );
}
