"use client"; // 클라이언트 측에서만 렌더링
import React, { useState, useEffect } from "react";
import { Table, Pagination } from "flowbite-react";
import { faker } from "@faker-js/faker";

export default function CustomDataTable() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState(new Set());

  const generateData = () => {
    const statuses = ["Active", "Inactive", "Pending"];
    return Array.from({ length: 30 }, (_, index) => ({
      id: index + 1,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      gender: faker.datatype.boolean() ? "Male" : "Female",
      status: statuses[Math.floor(Math.random() * statuses.length)],
    }));
  };

  useEffect(() => {
    setData(generateData());
  }, []);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRowSelect = (id) => {
    const newSelectedRows = new Set(selectedRows);
    if (selectedRows.has(id)) {
      newSelectedRows.delete(id);
    } else {
      newSelectedRows.add(id);
    }
    setSelectedRows(newSelectedRows);
  };

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="relative mt-4 overflow-x-auto shadow-md sm:rounded-lg">
      <h2 className="mt-4 mb-4 text-xl font-bold">최근 주문</h2>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Select
            </th>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((row) => (
            <tr
              key={row.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  checked={selectedRows.has(row.id)}
                  onChange={() => handleRowSelect(row.id)}
                />
              </td>
              <td className="px-6 py-4">{row.id}</td>
              <td className="px-6 py-4">{row.name}</td>
              <td className="px-6 py-4">{row.email}</td>
              <td className="px-6 py-4">{row.gender}</td>
              <td className="px-6 py-4">{row.status}</td>
              <td className="px-6 py-4">
                <button className="text-blue-600 hover:underline">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <ul className="flex list-none">
          <li className="mx-1">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 text-blue-500 bg-white border rounded hover:bg-blue-100 disabled:opacity-50"
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <li key={number} className="mx-1">
              <button
                onClick={() => handlePageChange(number)}
                className={`px-4 py-2 border rounded ${
                  currentPage === number
                    ? "bg-blue-500 text-white"
                    : "text-blue-500 bg-white"
                }`}
              >
                {number}
              </button>
            </li>
          ))}
          <li className="mx-1">
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-blue-500 bg-white border rounded hover:bg-blue-100 disabled:opacity-50"
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
