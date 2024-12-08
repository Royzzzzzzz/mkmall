"use client";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper, SwiperSlide 직접 import
import "swiper/css";
import "swiper/css/navigation"; // 네비게이션 스타일 import
import "swiper/css/pagination"; // 페이징 스타일 import
import "swiper/css/autoplay"; // Autoplay 스타일 import
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Autoplay 모듈 import
import Image from "next/image";
import Link from "next/link";

export default function HeroCarousel({ banners }) {
    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination]} // Autoplay 모듈 설정
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            navigation // 좌우 버튼 활성화
            pagination={{ clickable: true }} // dot 활성화
            className="overflow-hidden rounded-md">
            {banners.map((banner, i) => (
                <SwiperSlide key={i}>
                    <Link href={banner.link}>
                        <Image
                            width={712}
                            height={384}
                            src={banner.imageUrl}
                            className="object-cover w-full h-full"
                            alt={banner.title}
                        />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
