import { useState } from "react";
import {
  RiArrowDownSLine,
  RiGithubFill,
  RiJavascriptLine,
  RiNodejsLine,
  RiPlayLine,
  RiReactjsLine,
  RiSendPlaneLine,
  RiTailwindCssLine,
  RiTerminalBoxLine,
} from "@remixicon/react";

const stackIcons = {
  react: RiReactjsLine,
  typescript: RiTerminalBoxLine,
  next: RiJavascriptLine,
  tailwind: RiTailwindCssLine,
  playwright: RiPlayLine,
  node: RiNodejsLine,
  github: RiGithubFill,
  postman: RiSendPlaneLine,
};

const ExperienceCard = ({ company, setChatOpen }) => {
  const [companyOpen, setCompanyOpen] = useState(true);

  return (
    <article className={`surface-card current-company-card ${companyOpen ? "is-open" : ""}`}>
      <button type="button" className="current-company-toggle" onClick={() => setCompanyOpen((open) => !open)} aria-expanded={companyOpen} aria-label={`Toggle ${company.name} details`}>
        <div className="current-company-header">
          <div className="current-company-brand">
            <span className="company-mark">{company.name}</span>
            <span className="company-status"><span className="status-dot" /> Working</span>
            <RiArrowDownSLine className={`company-toggle-icon ${companyOpen ? "open" : ""}`} size={16} />
          </div>
          <span className="current-company-right">
            <span className="work-date">{company.date}</span>
          </span>
        </div>
        <div className="current-company-role-row">
          <h3>{company.role}</h3>
          <span className="work-location">{company.location}</span>
        </div>
      </button>
      {companyOpen && (
        <div className="company-detail-panel">
          <div className="company-detail-grid">
            <div className="company-tech-panel">
              <h4>Technologies &amp; Tools</h4>
              <div className="company-tech-grid">
                {company.stack.map((tech) => {
                  const TechIcon = stackIcons[tech.icon];
                  return <div key={tech.name} className={`tech-badge ${tech.tone}`}><span className="tech-icon" title={tech.name}><TechIcon size={27} /></span></div>;
                })}
              </div>
            </div>
            <div className="company-activity-panel">
              <h4>What I&apos;ve done</h4>
              <ul className="company-bullets">{company.highlights.map((point) => <li key={point}>{point}</li>)}</ul>
              <div className="company-footer-actions">
                <button type="button" className="company-ai-button" onClick={() => setChatOpen(true)}>
                  <span className="company-ai-icon" aria-hidden="true">✦</span>
                  Ask Copilot about this role
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default ExperienceCard;
