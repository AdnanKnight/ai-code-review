// Packages
const { GoogleGenAI } = require("@google/genai");

// modules
const GEMINI_API_KEY = process.env.GEMINI_API_KEY


const ai = new GoogleGenAI({
    apiKey: GEMINI_API_KEY,
});


module.exports.getReview = async (req, res, next) => {

    const code = req.body.code;
    if (!code) {
        return res.status(400).send("Code is required");
    }

    try {
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: [{ role: "user", parts: [{ text: code }] }]
            });
        
            res.send(response.text);

    } catch (err) {
        console.error("ERROR: Gemini API Call failed:", err.message); 
        res.status(500).send("Error from AI: " + err.message);
    }
}