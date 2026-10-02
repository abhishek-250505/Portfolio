import { RiArrowDownLine, RiGithubFill, RiLinkedinBoxFill, RiMailLine } from "@remixicon/react";
import portrait from "../assets/abhiimg.png";
import resume from "../assets/Abhishek_cv.pdf";

const socials = [
  { label: "GitHub", href: "https://github.com/abhishek-250505", icon: RiGithubFill },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhishek-anand-906bb7341", icon: RiLinkedinBoxFill },
  { label: "Email", href: "mailto:abhishek.664128@gmail.com", icon: RiMailLine },
];

const AboutSection = ({ projects }) => (
  <section className="hero" id="about">
    <div className="availability"><span className="availability-dot" /> Available for opportunities</div>
    <h1>Abhishek Anand</h1>
    <p className="role-line"><strong>Engineer</strong><span className="role-slash">•</span><span>Full Stack Developer</span></p>
    <p className="hero-description">
      I’m a <strong>Computer Science Engineer and Full-Stack Developer</strong> passionate
      about building scalable, high-performance web and mobile applications using
      <strong> React, Node.js, MongoDB</strong>, and modern technologies. I also
      explore <strong>Generative AI</strong> and continuously strengthen my skills
      through real-world engineering projects and challenges.
    </p>
    <div className="metrics" aria-label="Portfolio highlights">
      <div className="metric"><strong>{projects.length}</strong><span>PROJECTS</span></div>
      <div className="metric"><strong>7+</strong><span>CERTIFICATES</span></div>
      <div className="metric"><strong>2027</strong><span>GRADUATION</span></div>
    </div>
    <div className="hero-actions">
      <a className="button-primary" href={resume} target="_blank" rel="noreferrer"><RiArrowDownLine size={17} /> Resume</a>
      <a className="button-secondary" href="#contact"><RiMailLine size={17} /> Get in touch</a>
    </div>
    <div className="social-row" aria-label="Social links">{socials.map((social) => <a key={social.label} href={social.href} target={social.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" aria-label={social.label}><social.icon size={19} /></a>)}</div>
    <div className="profile-strip"><div className="profile-photo"><img src={portrait} alt="Abhishek Anand" /></div><div className="profile-details"><strong>Building useful things for the web</strong><span>Full-stack development · AI integrations</span></div><span className="profile-location">BHOPAL<br />INDIA</span></div>
  </section>
);

export default AboutSection;
