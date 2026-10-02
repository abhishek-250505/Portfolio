import {
  RiCloseLine,
  RiMicLine,
  RiRobot2Line,
  RiSendPlaneLine,
  RiSparkling2Line,
} from "@remixicon/react";

const Assistant = ({ isOpen, onOpen, onClose, onReset, messages, busy, input, setInput, onSubmit }) => (
  <>
    {isOpen && <section className="assistant-panel" aria-label="Portfolio assistant" aria-live="polite">
      <div className="assistant-header">
        <div className="assistant-identity"><span className="assistant-avatar"><RiRobot2Line size={21} /></span><div><strong>Abhishek AI Assistant</strong><span><i /> Trained on Abhishek Anand&apos;s resume &amp; portfolio</span></div></div>
        <div className="assistant-header-actions"><button className="assistant-reset" type="button" onClick={onReset} aria-label="Reset conversation">↻</button><button className="assistant-close" type="button" onClick={onClose} aria-label="Close assistant"><RiCloseLine size={19} /></button></div>
      </div>
      <div className="assistant-status">Session reset <span>•</span> Ready for questions</div>
      <div className="chat-messages">{messages.map((message, index) => <div className={`chat-row ${message.role}`} key={`${message.role}-${index}`}><span className="message-avatar"><RiSparkling2Line size={14} /></span><div className="chat-message">{message.content}<small>Just now</small></div></div>)}{busy && <div className="chat-row assistant"><span className="message-avatar"><RiSparkling2Line size={14} /></span><div className="chat-message">Thinking...<small>Just now</small></div></div>}</div>
      <div className="prompt-strip"><span>PROMPTS:</span><button type="button" onClick={() => setInput("What projects has Abhishek built?")}>InterviewPrep.AI</button><button type="button" onClick={() => setInput("Tell me about Abhishek's education")}>Education</button><button type="button" onClick={() => setInput("What tools does Abhishek use?")}>Skills</button></div>
      <form className="chat-form" onSubmit={onSubmit}><div className="chat-input-wrap"><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask anything about Abhishek..." aria-label="Ask the assistant" maxLength="2000" /><RiMicLine size={16} /></div><button type="submit" disabled={busy || !input.trim()} aria-label="Send question"><RiSendPlaneLine size={17} /></button></form>
      <p className="assistant-powered"><span /> Powered by AI <b>•</b> Instant portfolio insights</p>
    </section>}
    {!isOpen && <button className="assistant-trigger" type="button" onClick={onOpen} aria-label="Open portfolio assistant" aria-expanded={false}><RiSparkling2Line size={15} /><strong>Ask Abhishek AI</strong><span className="assistant-online-dot" /></button>}
  </>
);

export default Assistant;