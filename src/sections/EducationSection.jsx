import SectionHeading from "./SectionHeading";

const education = [
  { title: "Bachelor of Technology, Computer Science", school: "Sagar Institute of Research & Technology", years: "2023 — 2027", place: "Bhopal, India" },
  { title: "Higher Secondary, Class XII", school: "Guru Kripa Academy", years: "2020 — 2022", place: "Mathematics & Science" },
];

const EducationSection = () => (
  <section className="content-section" id="education">
    <SectionHeading title="Education" />
    <div className="stack-list">
      {education.map((item) => <article className="surface-card education-card" key={item.title}>
        <span className="timeline-mark" />
        <div><h3>{item.title}</h3><p>{item.school}</p><div className="education-meta"><span>{item.years}</span><span>{item.place}</span></div></div>
      </article>)}
    </div>
  </section>
);

export default EducationSection;
