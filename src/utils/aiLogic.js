export const generateResponse = (input) => {
  const lowerInput = input.toLowerCase();

  // Keyword matching for simulated AI
  if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
    return `Hello! 👋 Welcome to the Indian Election Guide. 
    
I can help you understand how elections work. To get started, tell me:
* Are you a first-time voter?
* Do you want to know about EVMs?
* Do you want to see the election timeline?`;
  }

  if (lowerInput.includes('first time') || lowerInput.includes('first-time') || lowerInput.includes('yes')) {
    return `### Welcome, First-Time Voter! 🎉

Voting is a powerful right. Here is a simple step-by-step guide to get you started:

1. **Check Eligibility**: You must be an Indian citizen and 18 years or older.
2. **Register**: Apply for a Voter ID card (EPIC) online at the Voter Portal or via the Voter Helpline App (Form 6).
3. **Verify Name**: Check if your name is on the Electoral Roll.
4. **Vote**: On election day, take your Voter ID to your polling booth.

Would you like to know how the actual voting process works inside the booth?`;
  }

  if (lowerInput.includes('booth') || lowerInput.includes('voting process') || lowerInput.includes('how to vote')) {
    return `### Inside the Polling Booth 🗳️

Here is what happens when you go to vote:

* **Step 1:** The First Polling Officer checks your name on the voter list and your ID proof.
* **Step 2:** The Second Polling Officer inks your finger, gives you a slip, and takes your signature.
* **Step 3:** You deposit the slip with the Third Polling Officer and proceed to the voting compartment.
* **Step 4:** Press the blue button on the EVM against your chosen candidate. A red light will glow, and you will hear a beep sound.
* **Step 5:** Check the printed slip in the VVPAT machine's glass window for 7 seconds to confirm your vote.

Do you have any questions about the **EVM** or **VVPAT**?`;
  }

  if (lowerInput.includes('evm')) {
    return `### What is an EVM? 📟

**EVM** stands for **Electronic Voting Machine**.

* It replaces traditional paper ballots.
* It consists of two units: the **Control Unit** (with the polling officer) and the **Balloting Unit** (where you press the button).
* It is highly secure, runs on batteries, and is not connected to the internet.`;
  }

  if (lowerInput.includes('vvpat')) {
    return `### What is VVPAT? 🖨️

**VVPAT** stands for **Voter Verifiable Paper Audit Trail**.

* It is an independent printer attached to the EVM.
* When you vote, it prints a slip containing the serial number, name, and symbol of the candidate you voted for.
* The slip is visible behind a glass window for 7 seconds before it automatically falls into a sealed box.
* It allows you to verify that your vote was cast correctly.`;
  }

  if (lowerInput.includes('nota')) {
    return `### What is NOTA? 🚫

**NOTA** stands for **None Of The Above**.

* It is an option at the end of the EVM button list.
* You press it if you do not want to vote for *any* of the candidates running in your constituency.
* It is a way to express a negative opinion while still participating in the democratic process.`;
  }

  if (lowerInput.includes('timeline') || lowerInput.includes('phases') || lowerInput.includes('when')) {
    return `### Election Timeline 📅

Indian elections usually follow these main phases:

1. **Announcement:** The Election Commission of India (ECI) announces the dates. Model Code of Conduct comes into effect.
2. **Nomination:** Candidates file their nomination papers.
3. **Campaigning:** Political parties rally and campaign. This ends 48 hours before polling.
4. **Voting Day(s):** Citizens cast their votes. (Often held in multiple phases across the country).
5. **Counting Day:** Votes are counted, and results are declared.

You can view a visual representation of this on the **Timeline** page!`;
  }

  // Default fallback
  return `I'm not sure I understand. Could you try rephrasing? 

You can ask me things like:
* "How do I vote?"
* "What is an EVM?"
* "I am a first time voter"
* "Tell me about NOTA"`;
};
