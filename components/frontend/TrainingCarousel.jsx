"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function TrainingCarousel({ trainings }) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
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
            {trainings.map((training, i) => {
                return (
                    <div
                        key={i}
                        className="mr-3 bg-slate-100 dark:bg-slate-900 rounded-lg overflow-hidden">
                        <Link href="#">
                            <Image
                                src={training.imageUrl}
                                alt="과일"
                                width={556}
                                height={556}
                                className="w-full h-48 object-cover"
                            />
                        </Link>
                        <h2 className="text-center text-slate-300 my-2 dark:text-slate-50 text-xl">
                            {training.title}
                        </h2>
                        <p className="px-4 line-clamp-3 text-slate-800 dark:text-slate-300 mb-2">
                            {training.description}
                        </p>
                        <div className="flex justify-between items-center px-4 py-2">
                            <Link
                                className="bg-yellow-400 text-slate-50 rounded-md px-4 py-2 hover:bg-yellow-500 duration-300 transition-all"
                                href="#">
                                더 보기
                            </Link>
                            <Link
                                className="text-slate-800 dark:text-slate-100"
                                href="#">
                                대화 참여하기
                            </Link>
                        </div>
                    </div>
                );
            })}
        </Carousel>
    );
}
