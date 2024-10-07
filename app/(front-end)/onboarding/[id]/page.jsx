import NewFarmerForm from "@/components/backoffice/NewFarmerForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function page({ params: { id } }) {
  const user = await getData(`users/${id}`);
  console.log(user);
  return (
    <div className="flex flex-col gap-6 p-16">
      <div className="max-w-4xl p-4 mx-auto">
        <h2>안녕하세요 {user?.name}님,정보를 더 입력해 주세요</h2>
      </div>
      <NewFarmerForm user={user} />
    </div>
  );
}
