import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../context/ToggleContext";
import { RiGithubFill, RiMailLine, RiLinkedinFill } from "@remixicon/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const [formStatus, setFormStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  
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
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    setFormStatus("");

    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send your message.");

      form.reset();
      setFormStatus("Message sent. Thanks for reaching out.");
    } catch (error) {
      setFormStatus(error.message || "Unable to send your message. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };
  
  

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen w-full transition-colors duration-300
      ${darkMode ? "bg-[#1A1A2E] text-white" : "bg-white text-black"} pb-10`}
    >
      {/* Heading */}
      <h2 ref={titleRef} className="text-center pt-24 text-[2.7rem] md:text-6xl font-extrabold text-purple-600">
        Contact
      </h2>

      <div ref={cardsRef} className="grid md:grid-cols-2 max-w-6xl mx-auto gap-8 mt-12 px-6">
        {/* Left Card */}
        <div
          className={`rounded-xl p-8 shadow-lg flex flex-col gap-6
          ${darkMode ? "bg-[#272746]" : "bg-white"}`}
        >
          <h3 className="text-2xl font-bold">Let’s Connect</h3>

          <p className="opacity-70 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="space-y-4 text-sm md:text-base">
            <a
              href="mailto:abhishek.664128@gmail.com"
              className="flex items-center gap-3 hover:text-purple-500 transition"
            >
              <RiMailLine /> Gmail
            </a>

            <a
              href="https://www.linkedin.com/in/abhishek-anand-906bb7341"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-purple-500 transition"
            >
              <RiLinkedinFill /> linkedin
            </a>

            <a
              href="https://github.com/abhishek-250505"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-purple-500 transition"
            >
              <RiGithubFill /> github
            </a>
          </div>
        </div>

        {/* Right Form Card */}
        <div
          className={`rounded-xl p-8 shadow-lg
            ${darkMode ? "bg-[#272746] text-white" : "bg-white text-black"}`}
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            autoComplete="off"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-transparent border rounded-md px-4 py-3
                  placeholder-gray-500
                 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-transparent border rounded-md px-4 py-3
              placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full bg-transparent border rounded-md px-4 py-3
             placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            />

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 bg-purple-600 text-white py-3 rounded-md
                hover:bg-purple-700 transition font-semibold disabled:cursor-wait disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
            {formStatus && <p role="status" aria-live="polite">{formStatus}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
