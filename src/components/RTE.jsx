import React from 'react'
import {Editor} from "@tinymce/tinymce-react";
import {Controller} from "react-hook-form";

export default function RTE({name,control,label,defaultValue=""}) {
  return (
    <div className='w-full '>
        {label && <label className='inline-block mb-1 pl-1 '>
            {label}</label>}
            <Controller 
            name={name || "content"}
            control={control}
            render={({field:{onChange}})  =>(
    <Editor 
    apiKey='x7a5uf0aux8kaio3dwo24zqnoa90yj263za8666um6x2ho7g'
    initialValue={defaultValue}
    init={
        {
          
            initialValue:defaultValue,
            branding:false,
            height:500,
            menubar:true,
            plugins:[
                "advlist", "autolink", "lists", "link", "image", "charmap",  "preview", "anchor",
                "searchreplace", "visualblocks", "code", "fullscreen",
                "insertdatetime", "media", "table", 
                // "paste", "print",
                "code", "help", "wordcount",
            ],
            toolbar:"undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
            content_style:"body{font-family:Helvetica,Arial,sans-serif;font-size:14px}"
        }
    }      
    onEditorChange={onChange}/>
            )}/>
    </div>
    
   
  )
}

