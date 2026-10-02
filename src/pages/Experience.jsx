import { experiences } from "../config/json";
import ExperienceCard from "./ExperienceCard";
import "./Portfolio.css";

const SectionHeading = ({ label, title, description }) => (
  <div className="section-heading">
    <p className="section-kicker">{label}</p>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
);

const Experience = ({ projects, setChatOpen }) => (
  <section className="content-section" id="experience">
    <SectionHeading label="Career & experience" title="Work Experience" description="Hands-on engineering through full-stack and AI product projects." />
    <div className="stack-list">
      {experiences.map((company) => <ExperienceCard key={company.id} company={company} setChatOpen={setChatOpen} />)}
      {/* <article className="surface-card experience-card">
        <div className="experience-meta"><span>PROJECT-BASED EXPERIENCE</span><span>FULL STACK</span></div>
        <h3>DailyBrief — News Web Application</h3>
        <p>Built a news platform with real-time articles, pagination, bookmarking, and voice reading to make news easier to browse and access.</p>
        <div className="chip-list">{projects[0].techStack.map((tech) => <span className="chip" key={tech}>{tech}</span>)}</div>
      </article>
      <article className="surface-card experience-card">
        <div className="experience-meta"><span>PROJECT-BASED EXPERIENCE</span><span>AI APPLICATION</span></div>
        <h3>InterviewPrep.AI Platform</h3>
        <p>Developed an interview preparation platform with resume-based question generation, mock interviews, automated feedback, authentication, and payments.</p>
        <div className="chip-list">{projects[1].techStack.map((tech) => <span className="chip" key={tech}>{tech}</span>)}</div>
      </article> */}
    </div>
  </section>
);

export default Experience;
