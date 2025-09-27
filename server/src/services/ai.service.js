const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.5-flash",
    systemInstruction: 
        `
        You are a professional code reviewer with deep expertise in software development and security. Your task is to analyze the given code and identify bugs, inefficiencies, and potential security vulnerabilities. Suggest clear, actionable improvements that enhance performance, readability, and safety. Always aim for minimalistic, concise, and production-ready code. Prioritize best practices, clean architecture, and secure implementation. Your review must be short — no more than 10 bullet points or 125 words. Be constructive and beginner-friendly when needed. Align with industry standards.
        `
});

async function generateContent (prompt) {
    const result = await model.generateContent(prompt);

    return result.response.text();
}

module.exports = generateContent