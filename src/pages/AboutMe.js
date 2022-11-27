import React, { useEffect } from 'react'
import { Link, Outlet } from "react-router-dom";

import Resume from '../images/Resume_Donguk.pdf';

import Profile from '../components/resume/Profile';
import WorkExp from '../components/resume/WorkExp';
import OtherExp from '../components/resume/OtherExp';
import Education from '../components/resume/Education';

function AboutMe(props) {
    const [menuIndex, setMenuIndex] = React.useState(1);

    const selectedStyle = "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-bold bg-wood-3 inline-flex items-center leading-none border-wood-4 text-wood-5 tracking-wider rounded-t transform duration-300";
    const unselectedStyle = "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-bold inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider transform duration-300";

    const downloadFile = (url) => {
        fetch(url, { method: 'GET' })
            .then((res) => {
                return res.blob();
            })
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = "Resume_Donguk.pdf";
                document.body.appendChild(a);
                a.click();
                setTimeout((_) => {
                    window.URL.revokeObjectURL(url);
                }, 60000);
                a.remove();
            })
            .catch((err) => {
                console.error('err: ', err);
            });
    };

    const [loaded, setLoaded] = React.useState(false);
    const [initStyleHead, setInitStyleHead] = React.useState("transform transition -translate-y-192");
    const [initStyleBody, setInitStyleBody] = React.useState("transform transition scale-0");

    useEffect(() => {
        if (!loaded) {
            setLoaded(true);

            setInitStyleHead("transform transition duration-700 -translate-y-0");
            setInitStyleBody("transform transition duration-500 scale-110");

            setTimeout(function () {
                setInitStyleBody("transform transition duration-500");
            }, 500);
        }
    }, []);

    return (
        <section class="text-wood-4 body-font h-full">
            <div class={initStyleHead}>
                <div class="text-center mt-6 2xl:mt-10 -mb-16 2xl:-mb-12">
                    <button onClick={() => downloadFile(Resume)} class="border-2 p-2 bg-wood-3 font-bold text-wood-5 border-wood-3 shadow-lg transform transition hover:scale-105 hover:text-wood-4 duration-200 rounded-lg">
                        Download PDF
                    </button>
                </div>
                <div class="container px-5 pt-24 mx-auto flex flex-wrap flex-col">
                    <div class="flex mx-auto flex-wrap mb-20">
                        <button onClick={() => setMenuIndex(1)} class={menuIndex == 1 ? selectedStyle : unselectedStyle}>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>Profile
                        </button>
                        <button onClick={() => setMenuIndex(2)} class={menuIndex == 2 ? selectedStyle : unselectedStyle}>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>Work Experience
                        </button>
                        <button onClick={() => setMenuIndex(3)} class={menuIndex == 3 ? selectedStyle : unselectedStyle}>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                <circle cx="12" cy="5" r="3"></circle>
                                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                            </svg>Other Experience
                        </button>
                        <button onClick={() => setMenuIndex(4)} class={menuIndex == 4 ? selectedStyle : unselectedStyle}>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>Education
                        </button>
                    </div>
                </div>
            </div>
            <div class={initStyleBody}>
                {menuIndex == 1 ? <Profile /> : menuIndex == 2 ? <WorkExp /> : menuIndex == 3 ? <OtherExp /> : menuIndex == 4 ? <Education /> : null}
            </div>
        </section>
    )
}

export default AboutMe