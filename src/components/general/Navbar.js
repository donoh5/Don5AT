import { React, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Footer from '../nav/Footer';

import profile from '../../images/profile.jpg';
import { ReactComponent as ProjectIcon } from "../../images/folder.svg";
import { ReactComponent as SkillsIcon } from "../../images/hammer.svg";
import { ReactComponent as ContactIcon } from "../../images/phone.svg";
import { ReactComponent as BlogIcon } from "../../images/quill.svg";

import AboutMe from '../../pages/AboutMe';
import Projects from '../../pages/Projects';
import Skills from '../../pages/Skills';
import Blog from '../../pages/Blog';
import Contact from '../../pages/Contact';

function Navbar() {
    const iconTag = 'h-20 w-20 text-gray-300 mx-auto hover:text-white transition-colors duration-300';
    const iconTagHover = 'h-20 w-20 text-white mx-auto transition-colors duration-300';
    const textTag = 'h-5 w-20 text-gray-300 my-12 text-left hover:text-white transition-colors duration-300 cursor-pointer';
    const textTagHover = 'h-5 w-20 text-white my-12 text-left transition-colors duration-300 cursor-pointer';
    const textTagProfile = 'text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer';
    const textTagProfileHover = 'text-white transition-colors duration-300 cursor-pointer';

    const [loadOpacity, setLoadOpacity] = useState('transform translate-x-full transition-transform duration-700');
    const [nav, setNav] = useState('sticky top-0 h-screen w-20 bg-wood-4 lg:w-screen duration-500 hover:w-40');
    const [content, setContent] = useState('opacity-0 flex flex-col w-0 h-auto');

    useEffect(() => {
        setNav('sticky top-0 h-screen w-20 bg-wood-4 lg:w-20 duration-500 hover:w-40');

        setTimeout(() => {
            setLoadOpacity('transform translate-x-0 transition-transform duration-700');
            setContent('opacity-100 flex flex-col h-auto w-full');
        }, 350);
    }, []);

    const [isHover, setIsHover] = useState(false);
    const [hoverProfile, setHoverProfile] = useState(false);
    const [hoverProject, setHoverProject] = useState(false);
    const [hoverSkills, setHoverSkills] = useState(false);
    const [hoverBlog, setHoverBlog] = useState(false);
    const [hoverContact, setHoverContact] = useState(false);

    return (
        <Router>
            <div class="flex h-screen">
                <div class={nav} onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                    <nav class="w-20 hover:w-40 h-full justify-between flex flex-row">
                        <div class="mt-10 mb-10 flex-none w-20">
                            <Link to="/AboutMe" onMouseOver={() => setHoverProfile(true)} onMouseLeave={() => setHoverProfile(false)}>
                                <img src={profile} class="rounded-full w-11 h-11 mx-auto border-2 border-wood-3" />
                            </Link>
                            <div class="mt-10">
                                <ul>
                                    <li class="my-12 text-center" onMouseOver={() => setHoverProject(true)} onMouseLeave={() => setHoverProject(false)}>
                                        <Link to="/Projects">
                                            <span class={hoverProject ? iconTagHover : iconTag}>
                                                <ProjectIcon />
                                            </span>
                                        </Link>
                                    </li>
                                    <li class="my-12 text-center" onMouseOver={() => setHoverSkills(true)} onMouseLeave={() => setHoverSkills(false)}>
                                        <Link to="/Skills">
                                            <span class={hoverSkills ? iconTagHover : iconTag}>
                                                <SkillsIcon />
                                            </span>
                                        </Link>
                                    </li>
                                    <li class="my-12 text-center" onMouseOver={() => setHoverBlog(true)} onMouseLeave={() => setHoverBlog(false)}>
                                        <Link to="/Blogs">
                                            <span class={hoverBlog ? iconTagHover : iconTag}>
                                                <BlogIcon />
                                            </span>
                                        </Link>
                                    </li>
                                    <li class="my-12 text-center" onMouseOver={() => setHoverContact(true)} onMouseLeave={() => setHoverContact(false)}>
                                        <Link to="/Contact">
                                            <span class={hoverContact ? iconTagHover : iconTag}>
                                                <ContactIcon />
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class={isHover ? "opacity-100 duration-200 mt-10 mb-10 flex-none w-20" : "opacity-0 duration-200"} >
                            <div class="w-20 h-8 mt-3">
                                <div class={hoverProfile ? textTagProfileHover : textTagProfile}>
                                    <Link to="/AboutMe">
                                        Resume
                                    </Link>
                                </div>
                            </div>
                            <div class="mt-10">
                                <div class={hoverProject ? textTagHover : textTag} onMouseOver={() => setHoverProject(true)} onMouseLeave={() => setHoverProject(false)}>
                                    <Link to="/Projects">
                                        Project
                                    </Link>
                                </div>
                                <div class={hoverSkills ? textTagHover : textTag} onMouseOver={() => setHoverSkills(true)} onMouseLeave={() => setHoverSkills(false)}>
                                    <Link to="/Skills">
                                        Skills
                                    </Link>
                                </div>
                                <div class={hoverBlog ? textTagHover : textTag} onMouseOver={() => setHoverBlog(true)} onMouseLeave={() => setHoverBlog(false)}>
                                    <Link to="/Blogs">
                                        Blog
                                    </Link>
                                </div>
                                <div class={hoverContact ? textTagHover : textTag} onMouseOver={() => setHoverContact(true)} onMouseLeave={() => setHoverContact(false)}>
                                    <Link to="/Contact">
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                <div class={content}>
                    <div class={loadOpacity}>
                        <Routes class="transition-transform -translate-y-full">
                            <Route exact path="/" element={<AboutMe />} />
                            <Route path="/AboutMe" element={<AboutMe />} />
                            <Route path="/Projects" element={<Projects />} />
                            <Route path="/Skills" element={<Skills />} />
                            <Route path="/Blogs" element={<Blog />} />
                            <Route path="/Contact" element={<Contact />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Navbar