import React, {useState} from 'react'

import Dongsu from '../images/dongsu.jpg';
import Eventfull from '../images/eventfull.jpg';
import Pasteit from '../images/pasteit.jpg';
import Portfolio from '../images/portfolio.jpg';
import ProjectCard from '../components/project/ProjectCard';
import PasteitExe from '../images/setup.exe';

function Projects() {
    const [projects, setProjects] = useState([{
        status: "v 1.0.3",
        title: "Portfolio",
        desc: "My portfolio website which shows who I am, what I can do, and what I\'ve done. ",
        skills: "React, TailwindCSS",
        img: Portfolio,
        time: 0,
        needBr: false,
        link: "https://www.don5at.com"
    },
    {
        status: "v 1.0.1",
        title: "DongSu",
        desc: "Account book web service.",
        skills: "MERN Stack, TailwindCSS, Azure",
        img: Dongsu,
        time: 100,
        needBr: true,
        link: "https://donoh5.github.io/Ledger_Dongsu/"
    },
    {
        status: "In Progress",
        title: "Paste It",
        desc: "Windows application which enhance copy and paste function.",
        skills: ".Net WPF, C#",
        img: Pasteit,
        time: 200,
        needBr: false,
        link: "",
        isFile: true,
        file: PasteitExe
    },
    {
        status: "In Progress",
        title: "EventFull",
        desc: "Event management web service.",
        skills: "React, React-Native, SpringBoot, Java, MongoDB, MUI, Vercel, Azure",
        img: Eventfull,
        time: 300,
        needBr: true,
        link: "https://www.eventfull.me"
    }]);

    const items = function () {
        return projects.map(function (res, i) {
            return (<ProjectCard item={res} />)
        }
        )
    }

    const [initStyle, setInitStyle] = useState("text-4xl font-bold text-wood-4 mb-4 transform transition duration-1000 -translate-y-40");

    React.useEffect(() => {
        setInitStyle("2xl:text-4xl text-3xl font-bold text-wood-4 mb-4 transform transition duration-1000 translate-y-0");
    }, []);

    return (
        <div class="w-full p-12">
            <div class="header flex items-end justify-between 2xl:mb-12 mb-6">
                <div class="flex-1 w-1/3 text-center" />
                <div class="flex-1 w-1/3 text-center title">
                    <p class={initStyle}>
                        Projects
                    </p>
                </div>
                <div class="flex-1 w-1/3 text-center" />
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                {items()}
            </div>
        </div>
    )
}

export default Projects