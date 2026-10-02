import { useState } from "react";
import { RiArrowRightUpLine, RiExternalLinkLine, RiGithubFill, RiCloseLine } from "@remixicon/react";

const ProjectsSection = ({ projects }) => {
  const [preview, setPreview] = useState(null);

  return (
    <>
      <section className="content-section" id="projects">
        <div className="project-heading-row">
          <div className="section-heading"><h2><span className="project-heading-dot" /> Featured Projects</h2><p>Engineered for performance and real-world utility</p></div>
          <a className="explore-projects" href="https://github.com/abhishek-250505" target="_blank" rel="noreferrer">Explore all ({projects.length}) <RiArrowRightUpLine size={13} /></a>
        </div>
        <div className="project-grid">
          {projects.map((item) => <article className="surface-card project-card" key={item.id}>
            <img className="project-image" src={item.image} alt={`${item.title} project preview`} loading="lazy" />
            <div className="project-content">
              <div className="project-topline"><span>{item.category}</span><span>{item.status}</span></div>
              <h3>{item.title}</h3><p>{item.description}</p>
              <div className="chip-list" style={{ marginTop: 10 }}>{item.techStack.map((tech) => <span className="chip" key={tech}>{tech}</span>)}</div>
              <div className="project-links">
                <a className="text-link" href={item.links.github} target="_blank" rel="noreferrer"><RiGithubFill size={15} /> Source</a>
                <button className="text-link" type="button" onClick={() => setPreview(item)}><RiExternalLinkLine size={15} /> View Details</button>
              </div>
            </div>
          </article>)}
        </div>
      </section>

      {preview && <div className="project-preview-backdrop" role="presentation" onMouseDown={() => setPreview(null)}>
        <section className="project-preview" role="dialog" aria-modal="true" aria-label={`${preview.title} project overview`} onMouseDown={(event) => event.stopPropagation()}>
          <div className="project-preview-handle" />
          <div className="project-preview-header"><span>PROJECT OVERVIEW</span><button type="button" onClick={() => setPreview(null)} aria-label="Close project overview"><RiCloseLine size={20} /></button></div>
          <img className="project-preview-image" src={preview.image} alt={`${preview.title} preview`} />
          <div className="project-preview-content">
            <div className="project-preview-title"><div><h2>{preview.title}</h2><p><span>{preview.category}</span><b>•</b><span>{preview.status}</span></p></div><span className="project-preview-ready">Production Ready</span></div>
            <div className="project-preview-block"><h3>◉ &nbsp; Problem &amp; Solution</h3><p>{preview.description}</p></div>
            <div className="project-preview-block"><h3>✓ &nbsp; Key Capabilities &amp; Features</h3><ul>{preview.techStack.map((technology) => <li key={technology}>{technology} integration and production-ready implementation.</li>)}</ul></div>
          </div>
          <div className="project-preview-actions"><a className="text-link" href={preview.links.github} target="_blank" rel="noreferrer"><RiGithubFill size={15} /> View Code</a><a className="button-primary" href={preview.links.live} target="_blank" rel="noreferrer"><RiExternalLinkLine size={15} /> Launch Demo</a></div>
          <p className="project-preview-footer"><span /> Interactive preview modal <b>•</b> Verified build</p>
        </section>
      </div>}
    </>
  );
};

export default ProjectsSection;
