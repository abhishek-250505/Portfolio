import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../context/ToggleContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import react from "../assets/react.pdf";
import dsacerti from "../assets/dsa.pdf";
import nptel from "../assets/Nptel.pdf"
import oracle from "../assets/oracle.pdf";
import postman from "../assets/postman certificate.pdf";
import mern from "../assets/mern stack.pdf";
import aws from "../assets/aws.pdf";
import CertificateCard from "../card/CertificateCard";

const Certificate = () => {
  const { darkMode } = useContext(ThemeContext);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(
        cardsRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const detail = [
    {
      name: "React Js Development",
      place: "Sheryians Coding School",
      date: "May 2025",
      linkurl: react,
      description:
        "Completed hands-on React.js training covering component-based architecture, hooks, state management, routing, and building responsive, high-performance user interfaces.",
    },
    {
      name: "MERN Stack Development",
      place: "Sheryians Coding School",
      date: "August 2025",
      linkurl: mern,
      description:
        "Completed a full-stack MERN curriculum including MongoDB, Express.js, React.js, and Node.js, focusing on RESTful APIs, authentication, and scalable web application development.",
    },
     {
      name: "NPTEL Java Programming",
      place: "IIT Kharagpur",
      date: "June 2025",
      linkurl:nptel,
      description:"Scored 72%, covering object-oriented programming and core Java concepts.",
    },
    {
      name: "Data Structure & Algorithm",
      place: "Apna College",
      date: "May 2025",
      linkurl: dsacerti,
      description:
        "Developed strong problem-solving skills by learning core data structures and algorithms, including arrays, linked lists, trees, graphs, recursion, and complexity analysis.",
    },
    {
      name: "Oracle AI Foundation",
      place: "Oracle",
      date: "30 October 2025",
      linkurl: oracle,
      description:
        "Gained foundational knowledge of artificial intelligence concepts, machine learning basics, data processing, and real-world AI applications through Oracle AI Foundations.",
    },
    {
      name: "Postman API Testing",
      place: "Postman",
      date: "8 November 2025",
      linkurl: postman,
      description:
        "Learned API testing and development using Postman, including REST APIs, authentication, environment variables, automated tests, and API documentation.",
    },
    {
      name: "AWS Foundation",
      place: "AWS",
      date: "10 November 2025",
      linkurl: aws,
      description:
        "Acquired fundamental knowledge of cloud computing and AWS services such as EC2, S3, IAM, security best practices, and scalable cloud infrastructure.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen w-full transition-colors duration-300
        ${darkMode ? "bg-[#1A1A2E] text-white" : "bg-white text-black"}
      `}
    >
      <h1 ref={titleRef} className="text-center pt-24 md:text-6xl text-[2.7rem] font-extrabold text-purple-600">
        CERTIFICATIONS
      </h1>

      <p
        className={`text-center mt-8 text-[18px] font-sans
          ${darkMode ? "text-gray-300" : "text-gray-600"}
        `}
      >
        Continuous learning and skill development through recognized industry
        certifications.
      </p>

      <div ref={cardsRef} className="max-w-7xl mx-auto px-6 py-16 grid gap-14 md:grid-cols-2 lg:grid-cols-3">
        {detail.map((item, ind) => (
          <CertificateCard key={ind} {...item}/>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
