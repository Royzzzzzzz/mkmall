import CategoryList from "@/components/frontend/CategoryList";
import CommunityTrainings from "@/components/frontend/CommunityTrainings";
import Hero from "@/components/frontend/Hero";
import MarketList from "@/components/frontend/MarketList";
import Link from "next/link";
import { getData } from "@/lib/getData";

export default async function Home() {
    const categories = await getData("categories");
    return (
        <div className="min-h-screen">
            <Hero />
            <MarketList />
            {categories.map((category, i) => {
                return (
                    <div className="py-8" key={i}>
                        <CategoryList category={category} />
                    </div>
                );
            })}
            <CommunityTrainings />
            <h2 className="text-4xl">MK몰</h2>
            <Link className="my-4 underline" href="/register-farmer">
                공급업체 등록하기
            </Link>
        </div>
    );
}
