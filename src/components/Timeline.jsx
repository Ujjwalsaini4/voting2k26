import { Megaphone, FileSignature, Users, CheckSquare, BarChart, Trophy } from 'lucide-react';

function Timeline() {
  const phases = [
    {
      id: 1,
      title: "Announcement",
      icon: <Megaphone size={24} />,
      description: "The Election Commission of India (ECI) announces the election schedule. The Model Code of Conduct (MCC) comes into immediate effect, setting guidelines for political parties and candidates."
    },
    {
      id: 2,
      title: "Nomination",
      icon: <FileSignature size={24} />,
      description: "Candidates file their nomination papers with the Returning Officer. After scrutiny, a final list of contesting candidates is published."
    },
    {
      id: 3,
      title: "Campaigning",
      icon: <Users size={24} />,
      description: "Political parties and candidates hold rallies, distribute manifestos, and reach out to voters. Campaigning strictly ends 48 hours before the polling day."
    },
    {
      id: 4,
      title: "Voting Day",
      icon: <CheckSquare size={24} />,
      description: "Voters go to their designated polling booths to cast their votes using Electronic Voting Machines (EVMs). For large elections, this happens in multiple phases across different regions."
    },
    {
      id: 5,
      title: "Counting",
      icon: <BarChart size={24} />,
      description: "On a predetermined date, EVMs are opened under heavy security, and votes are counted in the presence of candidates or their agents."
    },
    {
      id: 6,
      title: "Results & Government Formation",
      icon: <Trophy size={24} />,
      description: "Results are declared. The party or coalition with a majority of seats is invited by the President/Governor to form the new government."
    }
  ];

  return (
    <div>
      <div className="text-center" style={{ marginBottom: 'var(--spacing-8)' }}>
        <h1 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-2)' }}>Election Timeline</h1>
        <p className="color-text-muted">Understanding the phases of Indian elections, step-by-step.</p>
      </div>

      <div className="timeline-container">
        {phases.map((phase) => (
          <div key={phase.id} className="timeline-item">
            <div className="timeline-icon">
              {phase.icon}
            </div>
            <div className="timeline-content">
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
