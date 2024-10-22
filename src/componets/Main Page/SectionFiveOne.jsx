"use client";

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './sectionfiveone.module.css'; // Import your custom styles
import css from './sectionfive.module.css'; // Import additional styles if needed
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import React Icons for arrows

const services = [
    {
      name: 'Network Security:',
      quote: 'We implement robust network security measures, including firewalls, intrusion detection and prevention systems (IDS/IPS), and vulnerability assessments to shield your network from unauthorized access.',
    },
    {
      name: 'Endpoint Protection:',
      quote: 'We secure your devices, including desktops, laptops, and mobile devices, with advanced endpoint protection software to detect and prevent malware, ransomware, and other threats.',
    },
    {
      name: 'Security Awareness Training:',
      quote: 'We empower your employees to become the first line of defence against cyberattacks by providing comprehensive security awareness training programs.',
    },
    {
      name: 'Security Incident Response:',
      quote: 'In the event of a cyberattack, we have a proven security incident response plan to minimize damage, contain the breach, and restore operations efficiently.',
    },
    {
      name: 'Cloud Security:',
      quote: 'Secure your cloud environments with our comprehensive cloud security solutions, including encryption, access management, and continuous monitoring.',
    },
    {
      name: 'Data Protection:',
      quote: 'Protect your critical business data with our advanced data protection strategies, ensuring confidentiality, integrity, and availability.',
    },
];

const SectionFiveOne = () => {
    const sliderRef = React.useRef(null);
    const [autoplay, setAutoplay] = React.useState(true);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: autoplay,
        autoplaySpeed: 3500,
        centerMode: true,
        centerPadding: "2%",
        onMouseEnter: () => setAutoplay(false),  // Stop autoplay on hover
        onMouseLeave: () => setAutoplay(true),   // Resume autoplay when not hovering
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

    const next = () => {
        sliderRef.current.slickNext();
    }

    const prev = () => {
        sliderRef.current.slickPrev();
    }

    return (
        <div className="w-full flex justify-center my-[9%] mb-[-2%] relative">
            <button className={`${css.navButton} ${css.left}`} onClick={prev}>
                <FaArrowLeft />
            </button>
            <div className="w-3/4 m-auto mt-8 mb-8">
                <Slider 
                    ref={sliderRef} 
                    {...settings}
                    onMouseEnter={() => setAutoplay(false)} // Stop autoplay on hover
                    onMouseLeave={() => setAutoplay(true)}  // Resume autoplay
                >
                    {services.map((service, index) => (
                        <div key={index} className="mx-2 my-4">
                            <div className={`flex flex-col justify-center items-center gap-4 p-4 ${css.card}`}>
                                <h1 className={`text-xl font-bold ${styles.cardTitles}`}>{service.name}</h1>
                                <p>{service.quote}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            
            <button className={`${css.navButton} ${css.right}`} onClick={next}>
                <FaArrowRight />
            </button>
        </div>
    );
}

export default SectionFiveOne;
