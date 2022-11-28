import React, {useState} from 'react'

import Dongsu from '../images/dongsu.jpg';
import Eventfull from '../images/eventfull.jpg';
import Pasteit from '../images/pasteit.jpg';
import Portfolio from '../images/portfolio.jpg';
import ProjectCard from '../components/project/ProjectCard';

function Projects() {
    const [projects, setProjects] = useState([{
        status: "In Progress",
        title: "Portfolio",
        desc: "My portfolio website which shows who I am, what I can do, and what I\'ve done. ",
        skills: "React, TailwindCSS, Azure Web Service",
        img: Portfolio,
        time: 0,
        needBr: false,
        link: "https://www.don5at.com"
    },
    {
        status: "In Progress",
        title: "DongSu",
        desc: "Account book web service.",
        skills: "MERN Stack, TailwindCSS, Azure Web Service",
        img: Dongsu,
        time: 100,
        needBr: true,
        link: ""
    },
    {
        status: "In Progress",
        title: "Paste It",
        desc: "Windows application which enhance copy and paste function.",
        skills: "WPF, C#",
        img: Pasteit,
        time: 200,
        needBr: false,
        link: "https://github.com/donoh5/Paste-It"
    },
    {
        status: "In Progress",
        title: "EventFull",
        desc: "Event management web service.",
        skills: "MERN Stack, MUI, Azure Web Service",
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