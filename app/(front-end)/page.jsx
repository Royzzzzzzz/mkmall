import Hero from "@/components/frontend/Hero";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Hero />
            <h2 className="text-4xl">MK몰</h2>
            <Link className="my-4 underline" href="/register-farmer">
                공급업체 등록하기
            </Link>
        </div>
    );
}
