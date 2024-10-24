import { Carousel } from "nuka-carousel";
import React from "react";

export default function HeroCarousel() {
  return (
    <Carousel autoplay className="overflow-hidden rounded-md">
      <img src="/banners/1.png" alt="배너1" />
      <img src="/banners/2.gif" alt="배너2" />
      <img src="/banners/3.gif" alt="배너3" />
    </Carousel>
  );
}
