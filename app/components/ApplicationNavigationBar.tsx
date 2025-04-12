import React from "react";
import {ApplicationPageModel} from "@/app/pages/PagesModel";
import ApplicationThemeHelper, {ApplicationThemeStore} from "@/app/models/ThemeStore";
import {FaShoppingBag, FaRegSun, FaRegMoon} from "react-icons/fa";
import {ApplicationHelper, ApplicationHelperTypes} from "@/app/models/ApplicationHelper";
import {motion, useScroll} from "framer-motion";


const ApplicationNavigationBar = (): React.JSX.Element => {

    const {currentTheme, setTheme, toggleTheme} = ApplicationThemeStore();
    const applicationThemeHelper = new ApplicationThemeHelper(currentTheme, setTheme, toggleTheme)

    const {scrollYProgress} = useScroll();


    return (
        <motion.nav
            animate={{
                y: 0
            }}

            initial={{
                y: -200
            }}

            transition={{
                duration: 1.5,
                ease: [0.85, 0, 0.15, 1]
            }}
            style={{
                color: applicationThemeHelper.getForegroundColor(),
                paddingBlock: "2.25rem",
            }}
            className={`flex w-screen z-[10] justify-center items-center fixed left-1/2 -translate-x-1/2`}
        >

            <section className={`flex justify-between items-center w-[90%]`}>
                <h1 className={`font-bold flex gap-[0.5rem] items-center`}>
                    <FaShoppingBag/>
                    Eco-Commerce
                </h1>
                <ul className={`flex gap-[1rem] text-[0.85rem] items-center`}>
                    {ApplicationPageModel.navigationBarLinks.map((item: ApplicationPageModel.NavbarItem, index: number) => {
                        return <li onClick={() => {
                            window.location.assign(item.navigationDestination);
                        }}
                                   key={index}
                                   className={`${applicationThemeHelper.isDarkMode() ? `${ApplicationHelper.current.getCurrentPageName() == item.navigationDestination ? `text-white` : `text-white/60`} hover:text-white` : ``} cursor-pointer`}>{item.displayName}</li>
                    })}


                    <div style={{
                        padding: "0.5rem",
                    }}
                         onClick={applicationThemeHelper.toggleTheme}
                         className={`border-[${ApplicationHelper.current.getBorderColor(applicationThemeHelper.currentTheme)}] border-[0.75px] rounded-[8px] hover:cursor-pointer`}>

                        {applicationThemeHelper.isDarkMode() ? <FaRegSun/> : <FaRegMoon/>}
                    </div>
                </ul>

            </section>
        </motion.nav>
    )
}

export default ApplicationNavigationBar;