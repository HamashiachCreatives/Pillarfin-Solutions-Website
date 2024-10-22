"use client";

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './sectionfive.module.css';

const services = [
    {
      name: 'IT Consulting',
      quote: `Our IT consulting services provide strategic guidance to help businesses harness technology for 
          growth and efficiency. We analyze your unique needs, develop tailored IT roadmaps, and optimize 
          operations for maximum ROI to keep you focused on your growth.`,
    },
    {
      name: 'Cloud Adoption',
      quote: `Accelerate your digital transformation with our cloud adoption services. We help businesses migrate 
          to the cloud, optimize cloud resources, and leverage cloud-based solutions for increased agility and 
          cost savings.`,
    },
    {
      name: 'SaaS Solutions',
      quote: `Streamline your business processes with our carefully selected SaaS solutions. We offer a range of 
          software applications to improve productivity, collaboration, and customer engagement.`,
    },
    {
      name: 'Data & Analytics',
      quote: `Unlock the power of your data with our advanced analytics solutions. We help you turn raw data into 
          actionable insights to drive informed decision-making and gain a competitive edge.`,
    },
    {
      name: 'Cybersecurity',
      quote: `Protect your business from cyber threats with our robust cybersecurity solutions. We offer 
          comprehensive protection to safeguard your sensitive data, systems, and networks.`,
    },
    {
      name: 'Product Development',
      quote: `Transform your ideas into innovative products with our end-to-end product development services. 
          We provide expert guidance from concept to launch, ensuring your product meets market demands.`,
    },
  ];

const CardsSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "2%",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "2%",
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "5%",
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "5%",
                }
            }
        ]
    };
  return (
    <div className="w-full flex justify-center my-[5%]">
        <div className="w-3/4 m-auto mt-8">
            <div className='className="slider-container"'>
                <Slider {...settings}>
                    {services.map((service, index) => (
                        <div key={index} className="mx-2">
                            <div className={`flex flex-col justify-center items-center gap-4 p-4 ${styles.card}`}>
                                <h1 className="text-xl font-semibold">{service.name}</h1>
                                <p>{service.quote}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default CardsSection
