import fetch from 'node-fetch';

const { GoogleGenerativeAI } = require("@google/generative-ai");




const geminiChat = async (prompt) => {
  console.log('gemini');

  // // Initialize Google Auth
  // const auth = new GoogleAuth({
  //   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  // });

  // // Get the OAuth2 token
  // const client = await auth.getClient();
  // const token = await client.getAccessToken();

  // // Define the Gemini API endpoint
  // const endpoint = 'https://generativelanguage.googleapis.com/v1beta2/models/gemini-1.5-flash:generateContent';

  // // Make the API request
  // const response = await fetch(endpoint, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`, // Use OAuth2 token
  //   },
  //   body: JSON.stringify({
  //     model: 'gemini-1.5-flash', // Replace with the actual model name
  //     prompt: prompt,
  //     maxOutputTokens: 150, // Equivalent to OpenAI's max_tokens
  //     temperature: 0.7, // Controls randomness
  //   }),
  // });
const apikey = process.env.NEXT_GOOGLE_CLOUD_API_KEY
  const genAI = new GoogleGenerativeAI(apikey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const result = await model.generateContent(prompt);
console.log(result.response.text());

  const data = await response.json();
  console.log('API Response:', data); // Log the response to understand the structure

  // Check if the response has the appropriate output
  // if (data.candidates && data.candidates.length > 0) {
  //   return data.candidates[0].output.trim(); // Adjust based on Gemini's response structure
  // } else {
  //   throw new Error('No candidates found in the Gemini response');
  // }
};

export { geminiChat };
