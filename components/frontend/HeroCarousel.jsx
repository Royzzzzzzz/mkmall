import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper, SwiperSlide 직접 import
import "swiper/css";
import "swiper/css/navigation"; // 네비게이션 스타일 import
import "swiper/css/pagination"; // 페이징 스타일 import
import "swiper/css/autoplay"; // Autoplay 스타일 import
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Autoplay 모듈 import
import Image from "next/image";
import Link from "next/link";

export default function HeroCarousel() {
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
      className="overflow-hidden rounded-md"
    >
      <SwiperSlide>
        <Link href="#">
          <Image
            width={712}
            height={384}
            src="/banners/1.png"
            className="object-cover w-full h-full"
            alt="Banner 1"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <Image
            width={712}
            height={384}
            src="/banners/2.gif"
            className="object-cover w-full h-full"
            alt="Banner 2"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <Image
            width={712}
            height={384}
            src="/banners/3.gif"
            className="object-cover w-full h-full"
            alt="Banner 3"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <Image
            width={712}
            height={384}
            src="/banners/2.gif"
            className="object-cover w-full h-full"
            alt="Banner 4"
          />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
