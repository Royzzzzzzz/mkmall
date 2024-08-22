"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Sun,
  Bell,
  User,
  AlignJustify,
  LayoutDashboard,
  Settings,
  X as CloseIcon, // X 아이콘 임포트
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { faker } from "@faker-js/faker";
import ThemeSwitcherBtn from "../ThemeSwitcherBtn";

// 상품 색상과 이름 목록
const colorMappings = {
  "#FF0000": "빨간색",
  "#FFFF00": "노란색",
  "#0000FF": "파란색",
  "#00FF00": "녹색",
  "#000000": "검정색",
};
const items = ["셔츠", "바지", "모자", "신발", "스커트"];
const profilePicUrl = "https://via.placeholder.com/40"; // 프로필 사진 URL

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

export default function Navbar() {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null); // 알림창을 참조하기 위한 ref

  const generateNotifications = () => {
    const newNotifications = Array.from({ length: 5 }, () => {
      const colorCode = getRandomItem(Object.keys(colorMappings));
      const item = getRandomItem(items);
      const now = new Date();
      const formattedDate = `${
        now.getMonth() + 1
      }/${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;

      return {
        id: `${colorMappings[colorCode]}-${item}`,
        color: colorCode,
        timestamp: formattedDate,
      };
    });
    setNotifications(newNotifications);
  };

  const handleBellClick = () => {
    generateNotifications();
    setShowNotifications(!showNotifications);
  };

  const handleCloseNotifications = () => {
    setShowNotifications(false);
  };

  // 클릭 이벤트 핸들러
  const handleClickOutside = (event) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
      setShowNotifications(false);
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 클릭 이벤트 리스너 추가
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // 컴포넌트가 언마운트될 때 클릭 이벤트 리스너 제거
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const colorChip = (color) => (
    <div
      className={`w-4 h-4 rounded-full`}
      style={{ backgroundColor: color }}
    ></div>
  );
  // 개별 알림 삭제 함수
  const handleDeleteNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="fixed top-0 z-50 flex items-center justify-between w-full h-20 px-8 py-4 bg-slate-700 text-slate-50 pr-[14rem] bg-white dark:bg-slate-800">
      <button className="text-lime-700 dark:text-lime-500">
        <AlignJustify size={24} />
      </button>
      {/* 3 아이콘 */}
      <div className="relative flex space-x-3">
        {" "}
        {/* Make sure this container is positioned relative */}
        <ThemeSwitcherBtn />
        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-white rounded-lg dark:bg-slate-800 "
          onClick={handleBellClick}
        >
          <Bell size={24} className="text-lime-700 dark:text-lime-500" />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
            {notifications.length}
          </div>
        </button>
        {showNotifications && (
          <div
            ref={notificationRef} // 알림창을 참조하기 위한 ref 설정
            className="absolute right-0 mt-12 overflow-auto text-black bg-white rounded-lg shadow-lg md:mt-14 w-72 md:w-80 max-h-60 md:max-h-80"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="font-semibold">알림</span>
              <button
                onClick={handleCloseNotifications}
                className="p-2 text-gray-600"
              >
                <CloseIcon size={16} />
              </button>
            </div>
            <ul>
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className="relative flex items-center p-4 text-sm border-b border-gray-200"
                >
                  <img
                    src={profilePicUrl}
                    alt="Profile"
                    className="w-10 h-10 mr-3 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center mb-1 space-x-2">
                      {colorChip(notification.message)}
                      <span className="font-semibold">
                        {notification.id} 판매완료
                      </span>
                    </div>
                    <span className="space-x-2 text-xs text-gray-500">
                      {notification.timestamp}
                    </span>
                  </div>
                  <button
                    onClick={() => handleDeleteNotification(notification.id)}
                    className="absolute text-gray-600 top-2 right-2"
                  >
                    <CloseIcon size={14} />
                  </button>
                </li>
              ))}
            </ul>
            <DropdownMenuSeparator />
          </div>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button className="p-2">
              <User className="text-lime-700 dark:text-lime-500" size={24} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-4 py-2 pr-8">
            <DropdownMenuLabel>내 계정</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LayoutDashboard className="w-4 h-4 mr-2" />
                <span>대쉬보드</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <Settings className="w-4 h-4 mr-2" />
                <span>프로필 수정</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>로그아웃</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
