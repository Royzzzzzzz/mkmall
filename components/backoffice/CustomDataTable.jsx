"use client"; // 클라이언트 측에서만 렌더링
import React, { useState } from "react";
import { Table, Pagination } from "flowbite-react";
import { faker } from "@faker-js/faker";

export default function CustomDataTable() {
  // 더미 데이터 생성
  const generateData = () => {
    const statuses = ["Active", "Inactive", "Pending"];
    return Array.from({ length: 30 }, (_, index) => ({
      id: index + 1,
      name: faker.person.fullName(), // faker.name.fullName() -> faker.person.fullName()으로 변경
      email: faker.internet.email(),
      status: statuses[Math.floor(Math.random() * statuses.length)],
    }));
  };

  const data = generateData();

  // 페이지와 페이지당 데이터 설정
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // 현재 페이지에 보여줄 데이터만 필터링
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold">최근 주문</h2>
      {/* 테이블 */}
      <Table>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>이름</Table.HeadCell>
          <Table.HeadCell>이메일</Table.HeadCell>
          <Table.HeadCell>상태</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {currentData.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.id}</Table.Cell>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
              <Table.Cell>{row.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      {/* 페이지 네비게이션 */}
      <div className="flex justify-center mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="custom-pagination"
        />
      </div>
      {/* CSS 스타일 */}
      <style jsx>{`
        .custom-pagination ul {
          display: flex;
          flex-wrap: nowrap;
          justify-content: center;
        }
        .custom-pagination li {
          margin: 0 0.25rem;
        }
      `}</style>
    </div>
  );
}
