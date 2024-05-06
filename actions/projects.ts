"use server"
import { ProjectProps } from "@/types/types";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient()

export async function saveData(data:ProjectProps){
    console.log(data)
    try {
      const newProject = await prisma.project.create({
        data
      }) 
      revalidatePath("/") 
      console.log(newProject)
    } catch (error) {
       console.log(error) 
    }
}

export async function getProjects(){
    try {
      const projects = await prisma.project.findMany()  
      return projects
    } catch (error) {
       console.log(error) 
    }
}