import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true
});
async function sendMsg(messages) {
    const chatCompletion = await getGroqChatCompletion(messages);
    // Print the completion returned by the LLM.
    return chatCompletion.choices[0]?.message?.content ?? "I'm sorry, I don't understand that."
}
async function getGroqChatCompletion(messages) {
    return groq.chat.completions.create({
        messages: messages,
        model: "llama3-8b-8192",
        temperature: 1,
        max_tokens: 1024,
        top_p: 0.9,
        stream: false,
        stop: null
    });
}

export default sendMsg;
