// import TilesDetails from "./TilesDetailsTop12"
// import { set } from 'mongoose';
import { useState, useEffect } from 'react';

export default function TilesTop12() {

    useEffect(() => {
        getAiTools()
    }, [])

    const [aiTools, setAITools] = useState([])

    function getAiTools() {
        fetch("http://localhost:5000/api/getAllAiTools")
            .then((res) => res.json())
            .then(data => {
                setAITools(data)
            })
    }
    const newArray = aiTools.map((item,index) => {
        return (
            
                <div key= {index}
                    className="flex-initial w-60 h-full border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#171717] dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5 overflow-hidden overflow-x-hidden">
                    <img src={item.imgSrc} alt="Logo" className="h-32 w-32 mx-auto my-1 mt-5 rounded-md" />
                    <div
                        className="flex flex-col justify-center items-start text-slate-700 dark:text-gray-300 ml-16">
                        <p className="mt-2 text-lg font-bold">{item.name}</p>
                        <p className="text-base font-light"><a href="/profile/OpenAI">{item.subHeading1}</a></p>
                        <p className="text-sm font-light">{item.subHeading2}</p>
                        <span className="text-lg dark:text-white inline-flex mb-1"></span>
                        <a href={`${item.name.toLowerCase()}`}
                            className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More
                            Infos</a>
                    </div>
                    <div id="tags" className="mt-5 mb-2 ml-8 flex flex-wrap ">
                    {
                        item.tags.map(tag =>{
                            return <a href="/search/Chatbot"
                            className="mx-1 mb-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-secondary text-primary rounded-full">{tag}
                        </a>
                        })
                    }
                    
                    </div>
                </div>
        
        )
    });

    return (
        <>
            {newArray}
        </>
    )
}
