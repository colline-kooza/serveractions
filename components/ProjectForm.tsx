"use client"
import { saveData } from '@/actions/projects'
import { projectFormSchema } from '@/schema/schema'
import { ProjectProps } from '@/types/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function ProjectForm() {

    const {register,handleSubmit,reset,formState:{errors}}=useForm<ProjectProps>({
        resolver:zodResolver(projectFormSchema)
    })
const router =useRouter()
    async function onSubmit(data:ProjectProps){
        console.log(data)
//SEND DATA TO API

//SERVER ACTION
        try {
            await saveData(data) 
            router.push("/")
        } catch (error) {
            console.log(error)
        }
        reset()
    }

  return (
    
<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Create project</h5>
        <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project title</label>
            <input {...register("title")} type="title" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="title"  />
            {errors.title && (<p className='text-red-600 text-sm'>{errors.title.message}</p>)   }
        </div>
        <div>
            
<label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
<textarea {...register("description")} id="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your description here..."></textarea>
{errors.description && (<p className='text-red-600 text-sm'>{errors.description.message}</p>)   }

        </div>
        
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Project</button>
        
    </form>
</div>

  )
}
