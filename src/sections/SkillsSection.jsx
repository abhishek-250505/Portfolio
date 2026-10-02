import SectionHeading from "./SectionHeading";

const skills = [
  { title: "Frontend", items: ["React", "Next.js", "JavaScript", "Tailwind CSS", "GSAP", "Redux"] },
  { title: "Backend & data", items: ["Node.js", "Express", "MongoDB", "MySQL", "Firebase", "REST APIs"] },
  { title: "Languages & tools", items: ["Java", "Python", "Git", "GitHub", "Postman", "AWS"] },
];

const SkillsSection = () => (
  <section className="content-section" id="skills">
    <SectionHeading title="Technical skills" description="Tools and technologies I use to take ideas from interface to deployment." />
    <div className="stack-list">
      {skills.map(({ title, items }) => <article className="surface-card skill-card" key={title}>
        <h3>{title}</h3><div className="chip-list">{items.map((item) => <span className="chip" key={item}>{item}</span>)}</div>
      </article>)}
    </div>
  </section>
);

export default SkillsSection;
