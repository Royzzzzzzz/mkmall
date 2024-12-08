"use client";
import { BaggageClaim } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CategoryCarousel({ products }) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            //   deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="px-4">
            {products.map((product, i) => {
                return (
                    <div
                        key={i}
                        className="mr-3 bg-white rounded-lg overflow-hidden border shadow-md dark:bg-slate-900">
                        <Link href={`/products/${product.slug}`}>
                            <Image
                                src={product.imageUrl}
                                alt={product.title}
                                width={556}
                                height={556}
                                className="w-full h-48 object-cover"
                            />
                        </Link>
                        <div className="px-4">
                            <Link href={`/products/${product.slug}`}>
                                <h2 className="text-center text-slate-800 my-2 dark:text-slate-200 font-bold">
                                    {product.title}
                                </h2>
                            </Link>
                            <div className="flex items-center justify-between gap-2 pb-3 text-slate-800 dark:text-slate-200">
                                <p>{product.salePrice} 원</p>
                                <button className="flex items-center space-x-2 bg-yellow-300 px-4 py-2 rounded-md text-white ">
                                    <BaggageClaim />
                                    <span>추가</span>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </Carousel>
    );
}
