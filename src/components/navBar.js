import {React, useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NestTest from './nav/NestTest';
import Footer from './nav/Footer';

import profile from '../images/profile.jpg';
import { ReactComponent as ProjectIcon } from "../images/folder.svg";
import { ReactComponent as SkillsIcon } from "../images/hammer.svg";
import { ReactComponent as ContactIcon } from "../images/phone.svg";
import { ReactComponent as BlogIcon } from "../images/quill.svg";

import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

function Navbar() {
    const iconTag = 'h-20 w-20 text-gray-300 mx-auto hover:text-white transition-colors duration-300';
    const textTag = 'h-5 w-20 text-gray-300 my-12 text-left hover:text-white transition-colors duration-300';
    const textTagProfile = 'text-gray-300 hover:text-white transition-colors duration-300';

    const [loadOpacity, setLoadOpacity] = useState('transform translate-x-full transition-transform duration-700');
    const [nav, setNav] = useState('flex flex-col h-auto w-20 bg-wood-4 lg:w-screen duration-300 hover:w-40');
    const [content, setContent] = useState('flex flex-col w-0 h-auto bg-wood-pattern bg-wood-5');

    useEffect(() => {
        setLoadOpacity('transform translate-x-0 transition-transform duration-700');
        setNav('flex flex-col h-auto w-20 bg-wood-4 lg:w-20 duration-300 hover:w-40');
        setContent('flex flex-col h-auto w-full bg-wood-pattern bg-wood-5');
    }
    , []);

    return (
        <Router>
            <div class="flex h-screen">
                <div class={nav}>
                    <nav class="w-20 hover:w-40 h-full justify-between flex flex-row">
                        <div class="mt-10 mb-10 flex-none w-20">
                            <Link to="/AboutMe">
                                <img src={profile} class="rounded-full w-11 h-11 mx-auto border-2 border-wood-3"/>
                            </Link>
                            <div class="mt-10">
                                <ul>
                                    <li class="my-12 text-center">
                                        <Link to="/Projects">
                                            <span class={iconTag}>
                                                <ProjectIcon />
                                            </span>
                                        </Link>
                                    </li>
                                    <li class="my-12 text-center">
                                        <Link to="/Skills">
                                            <span class={iconTag}>
                                                <SkillsIcon />
                                            </span>
                                        </Link>
                                    </li>
                                    <li class="my-12 text-center">
                                        <Link to="/Blogs">
                                            <span class={iconTag}>
                                                <BlogIcon />
                                            </span>
                                        </Link>
                                    </li>
                                    <li class="my-12 text-center">
                                        <Link to="/Contact">
                                            <span class={iconTag}>
                                                <ContactIcon />
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="mt-10 mb-10 flex-none w-20">
                            <div class="w-20 h-8 mt-3">
                                <div class={textTagProfile}>
                                    Resume
                                </div>
                            </div>
                            <div class="mt-10">
                                <div class={textTag}>Project</div>
                                <div class={textTag}>Skills</div>
                                <div class={textTag}>Blog</div>
                                <div class={textTag}>Contact</div>
                            </div>
                        </div>
                    </nav>
                </div>

                <div class={content}>
                    <div class={loadOpacity}>
                        <Routes>
                        <Route path="" element={<AboutMe />} />
                        <Route path="AboutMe" element={<AboutMe />}>
                            <Route path="Nest" element={<NestTest />} />
                        </Route>
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