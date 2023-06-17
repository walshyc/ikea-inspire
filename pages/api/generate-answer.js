import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.API_KEY
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    const prompt = "you are an ikea interior design and furniture expert, the customer has asked you this question, please answer: "+ req.body.prompt;
    // console.log(prompt)
    if (!prompt || prompt.length === 0) {
        return res.status(400).json({ error: 'prompt is required' });
    }
    let response;
    try {
        const aiResult = await openai.createCompletion({
            model: "text-davinci-003",
            prompt,
            max_tokens: 2000,
            temperature: 0,
        });
       
        response = aiResult.data.choices[0].text?.trim() || "Sorry there was a problem!";
        // remove the ? only at the start of the response
        if (response.startsWith('?')) {
            response = response.substring(1);
        }


    } catch (error) {
        console.log(error.message)
        response = "Sorry there has been an error!"
    }

    res.status(200).json({ text: response })
}
