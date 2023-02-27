import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
 })
 


 const openai = new OpenAIApi(configuration);


export default async function handler(req, res) {
  const{prompt, model}= req.body;
 const response = await openai.createCompletion({
      model: model,
      prompt: prompt,
      temperature:0.9,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty:0,
  }).then(res => res.data.choices[0].text).catch(err => `ChatGPT was unable to find an answer for that! (Error:${err.message})`);
    console.log(response)
  res.status(200).json({ res: response })
}
