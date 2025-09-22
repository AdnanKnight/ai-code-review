// Packages
const { GoogleGenAI } = require("@google/genai");

// modules
const GEMINI_API_KEY = process.env.GEMINI_API_KEY


const ai = new GoogleGenAI({
    apiKey: GEMINI_API_KEY,
});

module.exports.getResponse = async (req, res, next) => {

    // console.log("DEBUG: Gemini API Key inside getResponse =", GEMINI_API_KEY); DEBUG FOR Process.env.GEMINI_API_KEY

    const prompt = req.query.prompt;
    if (!prompt) {
        return res.status(400).send("Prompt is required");
    }

    try {
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: [{ role: "user", parts: [{ text: prompt }] }]
            });
        
            res.send(response.text);
    } catch (err) {
        console.error("ERROR: Gemini API Call failed:", err.message); 
        res.status(500).send("Error from AI: " + err.message);
    }
}