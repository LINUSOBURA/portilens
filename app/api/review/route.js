import {analyzePortfolio} from "../../../utils/portfolioAnalyzer"

export async function POST(req) {
  const { url } = await req.json();  // req.json() is used to parse the body

  // Validate the URL (could be a simple check to ensure it's a valid URL format)
  if (!url || !/^https?:\/\/.+/.test(url)) {
    return new Response(JSON.stringify({ error: 'Invalid URL' }), { status: 400 });
  }

  try {
    // Analyze the portfolio
    const feedback = await analyzePortfolio(url);
    return new Response(JSON.stringify({ feedback }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
  }
}