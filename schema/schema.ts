import { z } from "zod";

export const projectFormSchema=z.object({
   title:z.string({
    required_error:"Title is required"
   }).min(3,{
    message:"Title must have a minimum of 3 characters"
   }),
   description:z.string().min(3,{
    message:"Decription must have a minimum of 3 characters"
   }),
})