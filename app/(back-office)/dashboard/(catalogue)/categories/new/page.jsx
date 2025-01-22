import NewCategoryForm from "@/components/backoffice/Form/NewCategoryForm";
import FormHeader from "@/components/backoffice/FormHeader";

export default function NewCategory() {
    return (
        <div>
            <FormHeader title="새로운 카테고리 추가" />
            <NewCategoryForm />
        </div>
    );
}
