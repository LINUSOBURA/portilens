import puppeteer from 'puppeteer';
import { geminiChat  } from './openai'; // A helper function to interact with OpenAI

export const analyzePortfolio = async (url) => {
  console.log("analyze!")
  // Scrape the webpage content
  // const pageContent = await ge(url);
  
  // Use OpenAI to provide feedback based on the content
  const feedback = await getFeedbackFromOpenAI(url);
  
  return feedback;
};

// const scrapePage = async (url) => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url);
//   const content = await page.evaluate(() => {
//     // You can extract whatever you need here
//     return {
//       title: document.title,
//       text: document.body.innerText,
//       metaDescription: document.querySelector('meta[name="description"]')?.content || '',
//     };
//   });
//   await browser.close();
//   console.log(content)
//   return content;
  
// };

const getFeedbackFromOpenAI = async (url) => {
  console.log("Reached here!")
  const prompt = `Review this portfolio page ${url} and give feedback on structure, clarity, and design aspects.`;

  const openAIResponse = await geminiChat (prompt);
  
  return openAIResponse;
};
