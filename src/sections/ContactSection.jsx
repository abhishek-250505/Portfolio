import { RiSendPlaneLine } from "@remixicon/react";
import SectionHeading from "./SectionHeading";

const ContactSection = ({ onSubmit, busy, status }) => (
  <section className="content-section" id="contact">
    <SectionHeading title="Contact" description="Have a project or opportunity in mind? Send me a note." />
    <form className="surface-card contact-form" onSubmit={onSubmit}>
      <input name="name" type="text" placeholder="Your name" autoComplete="name" maxLength="100" required />
      <input name="email" type="email" placeholder="Your email" autoComplete="email" maxLength="254" required />
      <textarea name="message" placeholder="What would you like to talk about?" maxLength="5000" required />
      <button className="button-primary" type="submit" disabled={busy}>{busy ? "Sending..." : <><RiSendPlaneLine size={16} /> Send message</>}</button>
      <p className="form-status" role="status" aria-live="polite">{status}</p>
    </form>
  </section>
);

export default ContactSection;
