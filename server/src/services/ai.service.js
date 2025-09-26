const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.5-flash",
    systemInstruction: 
        `
        You are a professional code reviewer with deep expertise in software development and security. 
        Your task is to analyze the given code, identify bugs, inefficiencies, and potential security vulnerabilities. 
        You must suggest clear, actionable solutions that improve the code’s performance, readability, and safety. 
        Always aim to make the code minimalistic, concise, and production-ready. 
        Prioritize best practices, clean architecture, and secure implementation. 
        Your feedback should be constructive, beginner-friendly when needed, and aligned with industry standards.
        `
});

async function generateContent (prompt) {
    const result = await model.generateContent(prompt);

    return result.response.text();
}

module.exports = generateContent