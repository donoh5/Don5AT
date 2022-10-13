import React from 'react'

import BlogCard from '../components/blog/BlogCard'

function Blog() {
    return (
        <div class="w-full p-12">
            <div class="header flex items-end justify-between mb-12">
                <div class="flex-1 w-1/3 text-center" />
                <div class="flex-1 w-1/3 text-center title">
                    <p class="text-4xl font-bold text-wood-4 mb-4">
                        Blogs
                    </p>
                </div>
                <div class="flex-1 w-1/3 text-center" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                <BlogCard />
            </div>
        </div>

    )
}

export default Blog