"use client";
import React from "react";
import ApplicationThemeHelper, {ApplicationThemeStore} from "@/app/models/ThemeStore";
import ApplicationNavigationBar from "@/app/components/ApplicationNavigationBar";
import {ApplicationHelper, ApplicationHelperTypes} from "@/app/models/ApplicationHelper";
import {motion} from "motion/react";

export default function Home(): React.JSX.Element {

    ApplicationHelper.current.RenderEngin(() => {
        (
            async () => {
                const locomotiveScroll = (await import("locomotive-scroll")).default;
                const LocomotiveScroll = new locomotiveScroll();
            }
        )()
    }, [])

    const {currentTheme, setTheme, toggleTheme} = ApplicationThemeStore();
    const applicationThemeHelper = new ApplicationThemeHelper(currentTheme, setTheme, toggleTheme);

    const mousePosition: ApplicationHelperTypes.MousePosition = ApplicationHelper.current.getMousePosition();
    const transformedMousePosition: number = (mousePosition.x - ApplicationHelper.current.getWindowWidth() / 2);

    const secondSectionReference: React.RefObject<HTMLElement | null> = React.useRef(null);

    return (
        <React.Fragment>

            {/*MARK: Navigationbar*/}
            <ApplicationNavigationBar/>


            {/*MARK: Main View*/}
            <main style={{
                background: `radial-gradient(circle at calc(50% + ${transformedMousePosition / 4}px) 0%, #222222 0%, ${applicationThemeHelper.getBackgroundColor()} 100%)`,
                color: applicationThemeHelper.getForegroundColor(),
            }} className={`min-h-[300vh] w-screen flex flex-col items-center`}>


                <motion.section
                    style={{
                        width: ApplicationHelper.current.homeScreenElementWidth,
                        paddingTop: "13rem",
                    }}
                    initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 50
                    }}
                    animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.75,
                        delay: 0.5
                    }}

                    className={`h-screen w-screen`}
                >
                    <section

                        className={`flex flex-col items-center justify-start`}>

                        <h1 className={`font-bold text-white/80 text-[2rem] text-center`}>Your Complete Local Area
                            Services</h1>
                        <h3 style={{marginTop: "1rem"}}
                            className={`font-semibold text-white/30 text-[1rem] text-center`}>Vercel provides the
                            developer
                            tools and cloud infrastructure</h3>
                        <h3 className={`font-semibold text-white/30 text-[1rem] text-center`}>to build, scale, and
                            secure a
                            faster, more personalized web.</h3>


                        <div style={{marginTop: "1rem"}} className={`flex gap-[1rem]`}>
                            <ApplicationHomePageButton styles={{background: "white", color: "black"}}
                                                       text={"Start Questionnaire"} action={() => {
                            }}/>
                            <ApplicationHomePageButton styles={{
                                background: ApplicationHelper.current.royalGoldenGrey,
                                border: "0.75px solid rgba(255,255,255,10)"
                            }} text={"Log In / Sign Up"} action={() => {
                            }}/>
                        </div>

                    </section>

                </motion.section>




                {/*second section*/}
                <section ref={secondSectionReference} className={`h-screen w-screen bg-blue-300`}>

                </section>

            </main>
        </React.Fragment>
    );
}

const ApplicationHomePageButton = ({styles, text, action}: ApplicationHelperTypes.ButtonProps) => {

    const stylesOptions: React.CSSProperties = {
        ...styles,
        height: "45px",
        paddingInline: "1rem",
        borderRadius: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "0.75rem",
        fontWeight: "500"
    }
    return <motion.div whileHover={{
        cursor: "pointer",
        opacity: 0.5
    }} style={stylesOptions}>
        <h1 className={`font-medium`}>{text}</h1>
    </motion.div>
}
