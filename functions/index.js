const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

// Simple keyword matching AI logic moved to backend
const generateResponse = (input) => {
  const lowerInput = input.toLowerCase();

  if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
    return "Hello! 👋 I am your Indian Election Guide AI (running on Cloud Functions). How can I help you today?";
  }
  
  if (lowerInput.includes('evm')) {
    return "EVM stands for Electronic Voting Machine. It is a secure, standalone device used to record votes.";
  }

  if (lowerInput.includes('vvpat')) {
    return "VVPAT is an independent printer system attached to the EVM that allows voters to verify their vote.";
  }

  return "I'm processing your request on the backend! You asked: " + input + ". Try asking about EVM or VVPAT.";
};

exports.getAIResponse = functions.https.onCall(async (data, context) => {
  // Check if user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated', 
      'The function must be called while authenticated.'
    );
  }

  const userText = data.text || "";
  const response = generateResponse(userText);

  // We could also log the query to Firestore here if we wanted centralized logging
  await admin.firestore().collection("ai_logs").add({
    uid: context.auth.uid,
    input: userText,
    response: response,
    timestamp: admin.firestore.FieldValue.serverTimestamp()
  });

  return { text: response };
});
