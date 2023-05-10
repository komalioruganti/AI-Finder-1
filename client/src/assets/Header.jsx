import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./UseDarkSide";

export default function Header() {

    const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "light" ? true : false
	);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

    return (
        <>
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-[#101010]">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"><a href="/"
                        className="flex items-center"><img
                            src="https://ai-finder.fra1.cdn.digitaloceanspaces.com/ai-finder-logo-trans.png"
                            className="mr-3 h-9" alt="Ai Finder Logo" />
                    </a>
                        <div className="flex items-center lg:order-3">
                            <button
                                className="text-gray-800 dark:text-white hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-1 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log
                                in</button>
                            <a href="/add"
                                className="text-gray-800 dark:text-white bg-primary-700 hover:bg-gray-300 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Add
                                your AI</a>
                            <a href="/discord"
                                className="text-gray-800 dark:text-white bg-primary-700 hover:bg-gray-300 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Discord
                                Community</a>
                            <button aria-label="Toggle Dark Mode" type="button"
                                className="sticky-theme-mode-button w-10 h-10 flex justify-center items-center p-3 bg-gray-200 rounded-full dark:bg-gray-800">
                                <DarkModeSwitch
                                    style={{ marginBottom: "0rem" }}
                                    checked={darkSide}
                                    onChange={toggleDarkMode}
                                    size={50}
                                />
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
