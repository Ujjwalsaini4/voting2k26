import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "What is an EVM?",
      answer: "An Electronic Voting Machine (EVM) is a device used to record votes electronically instead of using paper ballots. It consists of a Control Unit and a Balloting Unit. It is highly secure, runs on a battery, and is completely disconnected from any network."
    },
    {
      id: 2,
      question: "What is VVPAT?",
      answer: "Voter Verifiable Paper Audit Trail (VVPAT) is an independent printer system attached to the EVM. When a vote is cast, it prints a slip containing the serial number, name, and symbol of the chosen candidate. The slip is visible for 7 seconds through a glass window before automatically falling into a sealed drop box, allowing the voter to verify their vote."
    },
    {
      id: 3,
      question: "What does NOTA mean?",
      answer: "NOTA stands for 'None Of The Above'. It is an option provided on the EVM that allows a voter to officially register a vote of rejection for all candidates contesting in that constituency."
    },
    {
      id: 4,
      question: "Can I vote without a Voter ID card?",
      answer: "You must have your name registered in the electoral roll to vote. If you are registered but have lost your Voter ID (EPIC) card, you can still vote by showing one of the alternative photo identity documents approved by the ECI, such as an Aadhaar Card, PAN Card, Driving License, or Passport."
    },
    {
      id: 5,
      question: "What happens if I press the wrong button on the EVM?",
      answer: "Once a button on the balloting unit is pressed, the vote is recorded instantly and cannot be changed. The machine locks itself and only unlocks when the polling officer resets it for the next voter. Therefore, it is important to check the candidate's symbol carefully before pressing."
    }
  ];

  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="text-center" style={{ marginBottom: 'var(--spacing-8)' }}>
        <h1 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-2)' }}>Frequently Asked Questions</h1>
        <p className="color-text-muted">Clear answers to the most common questions about the Indian election process.</p>
      </div>

      <div>
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <button 
              className="faq-question" 
              onClick={() => toggleFaq(faq.id)}
            >
              {faq.question}
              {openId === faq.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openId === faq.id && (
              <div className="faq-answer animate-fade-in">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
