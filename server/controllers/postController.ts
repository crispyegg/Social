import { Response } from "express";
import { Authrequest } from "../middlewares/authMiddleware.js";
import { GoogleGenAI } from "@google/genai";
import { cloudinary } from "../config/cloudinary.js";
import { Generation } from "../models/Generation.js";
import { Post } from "../models/Post.js";
import { InferenceClient } from "@huggingface/inference";




//generate post
//POST/api/generate

export const generatePost = async (req:Authrequest,res:Response):Promise<void> => {
  try {
    const {prompt,tone,generateImage} =req.body;

    const apiKey =process.env.GEMINI_API_KEY;
    if(!apiKey){
      res.status(400).json({message:"Gemini API Key is missing. PLease add it to your server/.env file"});
      return;
    }
    const ai = new GoogleGenAI({
  apiKey: apiKey
});
 //generate test
    const textResponse = await ai.models.generateContent({
   model: "gemini-3.6-flash",
    contents: `Genarate a social media post based on this prompt:"${prompt}". Tone:${tone}.
     Inculde relevant hashtags.
     Format the response as JSON with "content" and "imagePrompt" fields.
     that complements the post.`,
  });
   let content = ""
   let imagePrompt = prompt
   
   try {
    const rawText = textResponse.text || "";
    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    const data = jsonMatch?JSON.parse(jsonMatch[0]) :{content:rawText,imagePrompt:prompt};
    content = data.content;
    imagePrompt= data.imagePrompt
   } catch (error) {
     content = textResponse.text ||""
   }


 let mediaUrl = "";

if(generateImage){

  try {

    console.log("Generating image using Hugging Face...");


    const client = new InferenceClient(
  process.env.HUGGINGFACE_API_KEY
    );

    const image:any= await client.textToImage({

      provider: "nscale",

      model: "black-forest-labs/FLUX.1-schnell",

      inputs: imagePrompt,

      parameters:{
        num_inference_steps:5
      }

    });


    const arrayBuffer = await image.arrayBuffer();

    const buffer = Buffer.from(arrayBuffer);


    const uploadResult =
      await cloudinary.uploader.upload(
        `data:image/png;base64,${buffer.toString("base64")}`,
        {
          folder:"a-generations"
        }
      );


    mediaUrl = uploadResult.secure_url;


    console.log(
      "Hugging Face image uploaded:",
      mediaUrl
    );


  } catch(err:any){

    console.error(
      "Hugging Face image generation failed:",
      err.message
    );

}
}

   //save generation to DB
     const generation = await Generation.create({
      user:req.user._id,
      prompt,
      content,
      mediaUrl,
      mediaType:mediaUrl?"image" :undefined,
      tone
     })

     res.json(generation)
  } catch (error:any) {
    res.status(500).json({message:error?.message ||"Server Error"})
  }
}



//get generations 
//GET/api/generations

export const getGenerations = async (req:Authrequest,res:Response):Promise<void> => {
  try {
    const generations = await Generation.find({user:req.user._id}).sort({createdAt:-1})
    res.json(generations)
  } catch (error:any) {
     res.status(500).json({message:error?.message ||"Server Error"})
  }
  
}


//get posts
//GET/api/posts
export const getPosts = async (req:Authrequest,res:Response):Promise<void> => {
  try {
    const posts = await Post.find({user:req.user._id})
    res.json(posts) 
  } catch (error:any) {
     res.status(500).json({message:error?.message ||"Server Error"})
  }
}


//Schedule post
//POST/api/posts

export const scheduelePost= async (req:Authrequest,res:Response):Promise<void> => {

  try {
    const {content ,platforms,scheduledFor,status} = req.body;
     //parse platforms if it comes as a stringified array as from arrayData
   

     let parsedPlatforms = platforms;
     if(typeof platforms ==="string"){
      try {
        parsedPlatforms = JSON.parse(platforms)
      } catch (e) {
          parsedPlatforms = platforms.split(",")
      }
     }

     let mediaUrl:string |undefined = req.body.mediaUrl;
     let mediaType: "image"|"video"|undefined =req.body.mediaType;

     if(req.file){

  console.log("Uploading file:", req.file.originalname);

  const result = await cloudinary.uploader.upload(
    `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
    {
      folder: "social-scheduler",
      resource_type: "auto"
    }
  );

  console.log("CLOUDINARY UPLOAD SUCCESS:", result);

  mediaUrl = result.secure_url;

  mediaType = result.resource_type === "video"
    ? "video"
    : "image";
}

     const post = await Post.create({
      user:req.user._id,
      content,
      platforms:parsedPlatforms,
      mediaUrl,
      mediaType,
      scheduledFor,
      status,
     })
    res.status(201).json(post)
  } catch (error:any) {
     res.status(500).json({message:error?.message ||"Server Error"})
  }
  
}