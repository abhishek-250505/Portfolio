import reactCertificate from "../assets/react.pdf";
import dsaCertificate from "../assets/dsa.pdf";
import nptelCertificate from "../assets/Nptel.pdf";
import oracleCertificate from "../assets/oracle.pdf";
import postmanCertificate from "../assets/postman certificate.pdf";
import mernCertificate from "../assets/mern stack.pdf";
import awsCertificate from "../assets/aws.pdf";
import SectionHeading from "./SectionHeading";

const certificates = [
  { name: "React JS Development", place: "Sheryians Coding School", date: "May 2025", file: reactCertificate },
  { name: "MERN Stack Development", place: "Sheryians Coding School", date: "August 2025", file: mernCertificate },
  { name: "NPTEL Java Programming", place: "IIT Kharagpur", date: "June 2025", file: nptelCertificate },
  { name: "Data Structures & Algorithms", place: "Apna College", date: "May 2025", file: dsaCertificate },
  { name: "Oracle AI Foundation", place: "Oracle", date: "October 2025", file: oracleCertificate },
  { name: "Postman API Testing", place: "Postman", date: "November 2025", file: postmanCertificate },
  { name: "AWS Foundation", place: "AWS", date: "November 2025", file: awsCertificate },
];

const CertificatesSection = () => (
  <section className="content-section" id="certificates">
    <SectionHeading title="Certifications" />
    <div className="stack-list">
      {certificates.map((certificate) => <article className="surface-card certificate-card" key={certificate.name}>
        <div><h3>{certificate.name}</h3><p className="certificate-meta">{certificate.place}</p></div>
        <div className="certificate-date">{certificate.date}<br /><a className="text-link" href={certificate.file} target="_blank" rel="noreferrer" style={{ marginTop: 5 }}>View</a></div>
      </article>)}
    </div>
  </section>
);

export default CertificatesSection;
