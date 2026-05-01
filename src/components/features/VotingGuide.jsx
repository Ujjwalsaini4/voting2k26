import { FileText, CheckCircle, MapPin, Pointer } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

function VotingGuide() {
  const steps = [
    {
      id: 1,
      title: "Check Your Eligibility & Register",
      description: "You must be an Indian citizen and 18 years or older on the qualifying date. You need to register by filling out Form 6. You can do this online at the Voter Portal (voters.eci.gov.in) or offline through your Booth Level Officer (BLO).",
      icon: <FileText size={32} color="var(--color-primary)" />
    },
    {
      id: 2,
      title: "Verify Your Name in the Voter List",
      description: "Even if you have a Voter ID card (EPIC), you can only vote if your name is present in the electoral roll. You can check this online using your EPIC number or personal details.",
      icon: <CheckCircle size={32} color="var(--color-green)" />
    },
    {
      id: 3,
      title: "Find Your Polling Booth",
      description: "A few days before the election, you will receive a Voter Information Slip indicating your Polling Station. You must go to this specific booth to cast your vote.",
      icon: <MapPin size={32} color="var(--color-saffron)" />
    },
    {
      id: 4,
      title: "Cast Your Vote using EVM",
      description: "Inside the booth, after identity verification, you will go to the voting compartment. Press the blue button on the Electronic Voting Machine (EVM) against the candidate of your choice. Verify your vote via the printed VVPAT slip.",
      icon: <Pointer size={32} color="var(--color-primary)" />
    }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <SectionHeader 
        title="How to Vote" 
        subtitle="A simple step-by-step guide for Indian citizens." 
      />

      <div className="guide-grid">
        {steps.map((step) => (
          <Card key={step.id} className="guide-step" ariaLabel={`Step ${step.id}: ${step.title}`}>
            <div className="step-number" aria-hidden="true">{step.id}</div>
            <div>
              <div className="guide-header">
                <div aria-hidden="true">{step.icon}</div>
                <h3 id={`step-title-${step.id}`} style={{ margin: 0, fontSize: '1.25rem' }}>{step.title}</h3>
              </div>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{step.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card style={{ marginTop: 'var(--spacing-8)', backgroundColor: 'var(--color-primary-light)', borderColor: 'var(--color-primary-light)' }}>
        <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-2)' }}>What ID should I bring?</h3>
        <p style={{ marginBottom: 'var(--spacing-2)' }}>You must bring your Voter ID (EPIC) card. If you don't have it, you can bring one of the alternative photo ID documents approved by the ECI, such as:</p>
        <ul style={{ marginLeft: '1.5rem', color: 'var(--color-text-muted)' }}>
          <li>Aadhaar Card</li>
          <li>PAN Card</li>
          <li>Driving License</li>
          <li>Indian Passport</li>
        </ul>
      </Card>
    </div>
  );
}

export default VotingGuide;
