
export default function MoreInfo({element}) {

    const renderTags = (tag) => {
        return tag.map((x, index) => 
                <div key={index} className="mx-1 mb-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-secondary text-primary rounded-full">    
                    {x}
                </div>
            )
    }

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <>
            <main className="w-full bg-white dark:bg-[#111111] min-w-full min-h-full max-h-full pb-64">
                <div className="relative flex flex-col justify-center items-start w-full p-0 h-full overflow-y-hide">
                    <div className="toaster  svelte-jyff3d"></div>
                    <div id="content" className="relative md:mx-40 mx-10 mt-5">
                        <nav aria-label="breadcrumb navigation" className="flex">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <a className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="/">
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg> Home
                                    </a>
                                </li>
                                <li className="inline-flex items-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <a className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white" href="/profile/OpenAI">{element.name}</a>
                                </li>
                                {/* <li className="inline-flex items-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <a className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white" href="/ai/ChatGPT">ChatGPT</a>
                                </li> */}
                            </ol>
                        </nav>
                        <div className="flex items-center">
                            <img src="" alt="Logo" className="h-32 w-32 mx-auto my-1 rounded-lg inline" />
                            <div className="ml-[15px] mt-1 overflow-y-hidden">
                                <h1><strong className="text-xl dark:text-white">{element.name}</strong></h1>

                                <div id="tags" className="flex flex-wrap mt-2">
                                    {renderTags(element.tags)}
                                </div>
                                
                            </div>
                        </div>
                        <div id="buttons" className="">
                            <button onClick={() => openInNewTab(element.website)} className="w-23 h-auto text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >⬈ Visit
                            </button>
                            <button className="w-12 h-auto text-white bg-red-500 hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">♡</button>
                        </div>
                    </div>
                    <div className="md:mx-24">
                        <div id="description" className="mx-14 relative my-11 w-3/4">
                            <div className="inline-flex justify-center items-center w-full relative">
                                <hr className="bg-gray-200 rounded border-0 dark:bg-gray-700 w-full min-w-full h-px my-8" />
                                <div className="dark:bg-[#111111] absolute left-1/2 px-3 font-medium text-gray-900 bg-white -translate-x-1/2 dark:text-white ">Overview</div>
                            </div>
                            <div className="dark:text-white w-full min-w-full">
                                <h1 className="text-3xl">{element.name}</h1>
                                <br />
                                <p>
                                    {element.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
