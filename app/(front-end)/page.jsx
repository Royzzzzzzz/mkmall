import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl">MK몰</h2>
      <Link className="my-4 underline" href="/register-farmer">
        공급업체 등록하기
      </Link>
    </div>
  );
}
