import { React, useEffect, useState } from 'react'
import axios from 'axios'

import BlogCard from '../components/blog/BlogCard'

function Blog() {
    const [blogs, setBlogs] = useState([{
        subTopic: "Emerging trends",
        topic: "File management system 1",
        desc: "- C# Winform <br/>- Google Drive API",
        author: "Donguk Oh",
        date: "15 Oct. 2022",
    }]);

    const items = function () {
        return blogs.map(function (res, i) {
            return (<BlogCard item={res} />)
        }
        )
    }

    const [initStyle, setInitStyle] = useState("text-4xl font-bold text-wood-4 mb-4 transform transition duration-1000 -translate-y-40");

    useEffect(() => {
        setInitStyle("2xl:text-4xl text-3xl font-bold text-wood-4 mb-4 transform transition duration-1000 translate-y-0");
    }, []);
    
    return (
        <div class="w-full p-12">
            <div class="header flex items-end justify-between 2xl:mb-12 mb-6">
                <div class="flex-1 w-1/3 text-center" />
                <div class="flex-1 w-1/3 text-center title">
                    <p class={initStyle}>
                        Blogs
                    </p>
                </div>
                <div class="flex-1 w-1/3 text-center" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                {items()}
            </div>
        </div>

    )
}

export default Blog