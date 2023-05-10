import TilesTop12 from "./TilesTop12"
import TilesNewlyAdded from "./TilesNewlyAdded"

export default function Body() {
    return (
        <>
            <main className="w-full bg-white dark:bg-[#111111] min-w-full min-h-full max-h-full">
                <div className="relative flex flex-col justify-center items-start w-full p-0 h-full overflow-y-hide">
                    <div className="container relative mb-5 h-full w-full max-w-screen-xl min-w-full" id="page-top">
                        <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-5 mt-16 ">
                            <h1
                                className="font-bold text-3xl md:text-5xl tracking-tight mb-2 bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-[#394b4f] to-secondary text-transparent">
                                AI Finder
                            </h1>
                            <div className="prose leading-6 text-gray-600 dark:text-gray-400 mx-14">
                                <p>Discover the AI tool that fits your needs - Enhance your workflow with the power of
                                    AI</p>
                            </div>
                        </div>
                        <div id="search" className="flex justify-center items-center w-full mb-5">
                            <div className="toaster svelte-jyff3d">
                            </div>
                            <div className="w-full h-max">
                                <div className="w-full">
                                    <form className="isolate"><label htmlFor="default-search"
                                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                        <div className="relative w-max mx-auto">
                                            <div
                                                className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                                </svg></div>
                                            <input type="search" id="ai-search" name="ai-search"
                                                className="block md:w-96 w-64 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Search..." required />
                                            <button type="submit"
                                                className="text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="flex justify-center items-center mt-5 mb-7 w-full">
                                    <h2 className="font-bold m-auto text-xl md:text-xl mb-2 dark:text-white text-center">Or
                                        <button
                                            className="bg-secondary text-primary text-base px-2 py-1 rounded ml-2 mx-auto">Surprise
                                            me
                                        </button>
                                    </h2>
                                </div>
                                <div className="w-full h-max"></div>
                            </div>
                        </div>
                        <div id="content" className="md:mx-20 mx-14">

                            <h2 className="font-bold text-2xl md:text-2xl mb-2 dark:text-white overflow-hidden">Discover -
                                The Top 12 AI Tools
                            </h2>
                            <div className="w-full h-max">
                                <div className="flex flex-wrap gap-x-5 gap-y-1">
                                    <TilesTop12/>
                                </div>
                            </div>

                            <h2 className="mt-8 font-bold text-2xl md:text-2xl mb-2 dark:text-white overflow-hidden w-full">
                                    Newly added AI Tools
                            </h2>
                            <div className="mainslider svelte-pj9tj0">
                                <div className="container svelte-pj9tj0">
                                    <div className="scroll svelte-pj9tj0">
                                        <div className="card svelte-pj9tj0 flex flex-nowrap overflow-x-auto">
                                            <TilesNewlyAdded/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-center mx-auto text-2xl font-semibold mt-5 dark:text-white w-full mb-5">
                                    <a href="#page-top">To find more useful AI Tools please use the search above 🔍</a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
