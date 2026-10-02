import React, { useContext, useEffect, useState, useRef } from "react"
import {
  RiArrowDownLine,
  RiMailLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXLine
} from "@remixicon/react"
import image from "../assets/abhiimg.png"
import darkImage from '../assets/imgdark.png'
import { ThemeContext } from "../context/ToggleContext";
// import VisitorCounter from "../pages/VisitorCounter";
import resume from "../assets/Abhishek_cv.pdf";
import gsap from "gsap";


const texts = [
  "Full Stack Developer",
  "Software Engineer",
  "Tech Enthusiast",
  "Open Source Contributor",
]

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const { darkMode } = useContext(ThemeContext);
  
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialRef = useRef(null);
  

  useEffect(() => {
    const current = texts[textIndex]
    let timeout

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setCurrentText(prev => prev + current[charIndex])
        setCharIndex(prev => prev + 1)
      }, 80)
    }

    if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1))
        setCharIndex(prev => prev - 1)
      }, 50)
    }

    if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000)
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setTextIndex(prev => (prev + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex])

  // GSAP Animations on mount
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial animation sequence - delayed to let Navbar load first
    tl.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    )
    .fromTo(
      textRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
      "-=0.3"
    )
    .fromTo(
      imageRef.current,
      { x: 100, opacity: 0, rotation: 5 },
      { x: 0, opacity: 1, rotation: 0, duration: 1 },
      "-=0.5"
    )
    .fromTo(
      buttonsRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
      "-=0.3"
    )
    .fromTo(
      socialRef.current.children,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1 },
      "-=0.2"
    );
  }, []);
 
  const socials = [
  {
    icon: RiGithubFill,
    link: "https://github.com/abhishek-250505",
  },
  {
    icon: RiLinkedinBoxFill,
    link: "https://www.linkedin.com/in/abhishek-anand-906bb7341",
  },
  {
    icon: RiMailLine,
    link: "mailto:abhishek.664128@gmail.com",
  },
  {
    icon: RiTwitterXLine,
    link: "https://twitter.com/yourusername",
  },
];

  return (
    <div ref={heroRef} className="portfolio-hero">
      <div className="hero-copy">
        <div className="availability"><span /> Available for opportunities</div>
        <div ref={textRef}>
          <p className="eyebrow">Hi, I am</p>
          <h1>Abhishek Anand</h1>
          <div className="hero-roles">
            <span>Software Engineer</span>
            <span className="role-divider">/</span>
            <span className="role-typed">{currentText}<span className="typing-caret">|</span></span>
          </div>
          <p className="hero-description">
            I’m a <strong>Computer Science Engineer</strong> passionate about building high-performance,
            scalable web applications with <strong>React, Node.js</strong>, and modern tools. I learn by
            shipping projects and solving real-world engineering problems.
          </p>
        </div>

        <div className="hero-metrics" aria-label="Portfolio highlights">
          <div><strong>02</strong><span>Featured projects</span></div>
          <div><strong>07</strong><span>Certifications</span></div>
          <div><strong>2027</strong><span>Graduation</span></div>
        </div>

        <div ref={buttonsRef} className="hero-actions">
          <a href={resume} target="_blank" rel="noreferrer" className="button-primary">
            <RiArrowDownLine size={19} /> Resume
          </a>
          <a href="#contact" className="button-secondary"><RiMailLine size={19} /> Get in touch</a>
        </div>

        <div ref={socialRef} className="hero-socials" aria-label="Social links">
          {socials.map(({ icon: Icon, link }, index) => (
            <a href={link} target="_blank" rel="noreferrer" key={index} aria-label={`Social link ${index + 1}`}>
              <Icon size={21} />
            </a>
          ))}
        </div>
      </div>

      <div ref={imageRef} className="hero-profile">
        <div className="profile-image-wrap">
          <img src={darkMode ? darkImage : image} alt="Abhishek Anand" />
        </div>
        <div className="profile-caption">
          <div><span className="profile-label">CURRENT FOCUS</span><strong>Full-stack products & AI</strong></div>
          <span className="profile-location">Bhopal, India</span>
        </div>
      </div>
    </div>
  );
}


export default Hero
