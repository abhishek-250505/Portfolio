import { useContext, useEffect, useState } from "react";
import {
  RiArrowRightUpLine,
  RiCloseLine,
  RiMenu3Line,
  RiMoonLine,
  RiSunLine,
} from "@remixicon/react";
import { ThemeContext } from "../context/ToggleContext";
import { project } from "../config/json";
import Blog from "./Blog";
import Assistant from "./Assistant";
import Experience from "./Experience";
import Github from "./Github";
import AboutSection from "../sections/AboutSection";
import EducationSection from "../sections/EducationSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import CertificatesSection from "../sections/CertificatesSection";
import ContactSection from "../sections/ContactSection";
import FooterSection from "../sections/FooterSection";
import "./Portfolio.css";

const apiPath = (path) => `${import.meta.env.VITE_API_BASE_URL || ""}/api/${path}`;
const readApiResponse = async (response) => {
  const isJson = response.headers.get("content-type")?.includes("application/json");
  if (!isJson) {
    throw new Error(response.ok ? "The API returned an invalid response." : `API request failed (${response.status}). Check VITE_API_BASE_URL.`);
  }
  let result;
  try {
    result = await response.json();
  } catch {
    throw new Error("The API returned an invalid response. Check the backend deployment.");
  }
  if (!response.ok) throw new Error(result.error || `API request failed (${response.status}).`);
  return result;
};
const navigation = [["Home", "about"], ["Experience", "experience"], ["Education", "education"], ["Skills", "skills"], ["Projects", "projects"], ["GitHub", "github"], ["Blog", "writing"], ["Contact", "contact"]];
const currentPostSlug = () => {
  const match = window.location.pathname.match(/^\/blog\/([^/]+)\/?$/);
  return match ? decodeURIComponent(match[1]) : "";
};

const Portfolio = () => {
  const { darkMode, handleTheme } = useContext(ThemeContext);
  const [navOpen, setNavOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [githubData, setGithubData] = useState({ contributions: [], repositories: 0, stars: 0, activeDays: 0, longestStreak: 0, loaded: false });
  const [postSlug, setPostSlug] = useState(currentPostSlug);
  const [activePost, setActivePost] = useState(null);
  const [postError, setPostError] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatBusy, setChatBusy] = useState(false);
  const [chatMessages, setChatMessages] = useState([{ role: "assistant", content: "Hi, I can answer questions about Abhishek's projects, skills, and experience." }]);
  const [contactStatus, setContactStatus] = useState("");
  const [contactBusy, setContactBusy] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(apiPath("posts"), { signal: controller.signal })
      .then((response) => response.ok ? response.json() : Promise.reject(new Error("Posts unavailable")))
      .then((result) => setPosts(Array.isArray(result.posts) ? result.posts : []))
      .catch((error) => { if (error.name !== "AbortError") setPosts([]); });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const requests = [
      fetch("https://github-contributions-api.jogruber.de/v4/abhishek-250505?y=last", { signal: controller.signal }).then((response) => {
        if (!response.ok) throw new Error("Contribution data unavailable");
        return response.json();
      }),
      fetch("https://api.github.com/users/abhishek-250505/repos?per_page=100&sort=updated", { signal: controller.signal }).then((response) => {
        if (!response.ok) throw new Error("Repository data unavailable");
        return response.json();
      }),
    ];

    Promise.allSettled(requests).then(([activityResult, repositoriesResult]) => {
      if (controller.signal.aborted) return;
      const contributions = activityResult.status === "fulfilled" && Array.isArray(activityResult.value.contributions)
        ? activityResult.value.contributions
        : [];
      const repositories = repositoriesResult.status === "fulfilled" && Array.isArray(repositoriesResult.value)
        ? repositoriesResult.value
        : [];
      let currentStreak = 0;
      let longestStreak = 0;
      let activeDays = 0;
      let previousDate = null;

      for (const day of contributions) {
        if (day.count > 0) {
          const currentDate = new Date(`${day.date}T00:00:00Z`);
          const consecutive = previousDate && (currentDate - previousDate) === 86400000;
          currentStreak = consecutive ? currentStreak + 1 : 1;
          longestStreak = Math.max(longestStreak, currentStreak);
          activeDays += 1;
          previousDate = currentDate;
        } else {
          currentStreak = 0;
          previousDate = null;
        }
      }

      setGithubData({
        contributions,
        repositories: repositories.length,
        stars: repositories.reduce((total, repository) => total + (repository.stargazers_count || 0), 0),
        activeDays,
        longestStreak,
        loaded: true,
      });
    });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    const handlePopState = () => setPostSlug(currentPostSlug());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (!postSlug) {
      setActivePost(null);
      setPostError("");
      return;
    }

    const controller = new AbortController();
    setActivePost(null);
    setPostError("");
    fetch(apiPath(`posts/${encodeURIComponent(postSlug)}`), { signal: controller.signal })
      .then(async (response) => {
        const result = await readApiResponse(response);
        return result.post;
      })
      .then(setActivePost)
      .catch((error) => { if (error.name !== "AbortError") setPostError(error.message); });
    return () => controller.abort();
  }, [postSlug]);

  const openPost = (event, slug) => {
    event.preventDefault();
    window.history.pushState(null, "", `/blog/${encodeURIComponent(slug)}`);
    setPostSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closePost = () => {
    window.history.pushState(null, "", "/#writing");
    setPostSlug("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submitContact = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    setContactBusy(true);
    setContactStatus("");
    try {
      const response = await fetch(apiPath("contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: values.get("name"), email: values.get("email"), message: values.get("message") }),
      });
      await readApiResponse(response);
      form.reset();
      setContactStatus("Message sent. Thanks for reaching out.");
    } catch (error) {
      setContactStatus(error.message || "Could not send your message. Please try again later.");
    } finally {
      setContactBusy(false);
    }
  };

  const submitChat = async (event) => {
    event.preventDefault();
    const prompt = chatInput.trim();
    if (!prompt || chatBusy) return;
    const nextMessages = [...chatMessages, { role: "user", content: prompt }];
    setChatMessages(nextMessages);
    setChatInput("");
    setChatBusy(true);
    try {
      const response = await fetch(apiPath("assistant"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(-8) }),
      });
      const result = await readApiResponse(response);
      setChatMessages((current) => [...current, { role: "assistant", content: result.reply }]);
    } catch {
      setChatMessages((current) => [...current, { role: "assistant", content: "The chatbot is a work in progress while its backend is being built. Please check back soon." }]);
    } finally {
      setChatBusy(false);
    }
  };

  const resetChat = () => {
    setChatMessages([{ role: "assistant", content: "Hi, I can answer questions about Abhishek's projects, skills, and experience." }]);
    setChatInput("");
  };

  return (
    <div className={`portfolio-shell ${darkMode ? "theme-dark" : "theme-light"}`}>
      <header className="site-header">
        <a className="brand" href="#about" onClick={() => setNavOpen(false)}><span className="brand-mark" aria-hidden="true">&lt;/&gt;</span><span className="brand-name"><span>abhishek</span><b>.dev</b></span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.filter(([label]) => !["Education", "Skills", "Contact"].includes(label)).map(([label, id]) => <a key={id} href={`/#${id}`}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button" type="button" onClick={handleTheme} aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}>{darkMode ? <RiSunLine size={19} /> : <RiMoonLine size={18} />}</button>
          <button className="icon-button nav-toggle" type="button" onClick={() => setNavOpen((open) => !open)} aria-label={navOpen ? "Close navigation" : "Open navigation"} aria-expanded={navOpen}>{navOpen ? <RiCloseLine size={21} /> : <RiMenu3Line size={20} />}</button>
        </div>
        {navOpen && <nav className="nav-panel" aria-label="Main navigation">{navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setNavOpen(false)}>{label}<RiArrowRightUpLine size={15} /></a>)}</nav>}
      </header>

      <main className="page-column">
        {postSlug ? <article className="article-view">
          <button className="text-link article-back" type="button" onClick={closePost}>← All writing</button>
          {activePost ? <>
            <p className="section-kicker">WRITING / {activePost.tags?.join(" · ") || "ARTICLE"}</p>
            <h1>{activePost.title}</h1>
            <p className="article-summary">{activePost.summary}</p>
            <time>{activePost.publishedAt ? new Date(activePost.publishedAt).toLocaleDateString() : ""}</time>
            <div className="article-body">{activePost.content}</div>
          </> : <div className="empty-state">{postError || "Loading article..."}</div>}
        </article> : <>
          <AboutSection projects={project.projects} />

          <Experience
            projects={project.projects}
            setChatOpen={setChatOpen}
          />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection projects={project.projects} />

          <Github githubData={githubData} />
          <CertificatesSection />
          <Blog posts={posts} openPost={openPost} />
          <ContactSection onSubmit={submitContact} busy={contactBusy} status={contactStatus} />
          <FooterSection />
        </>}
      </main>

      <Assistant isOpen={chatOpen} onOpen={() => setChatOpen(true)} onClose={() => setChatOpen(false)} onReset={resetChat} darkMode={darkMode} onToggleTheme={handleTheme} messages={chatMessages} busy={chatBusy} input={chatInput} setInput={setChatInput} onSubmit={submitChat} />
    </div>
  );
};

export default Portfolio;