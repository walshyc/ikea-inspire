'use client';
import React from 'react';
import { blogs } from '../../public/blogs';
import Link from 'next/link';

const BlogPage = () => {
  return (
    <div className="prose flex flex-col gap-1 overflow-scroll w-full items-start h-full pb-10 no-scrollbar">
      <h1 className=" text-primary">Inspire Blogs</h1>
      <div className="grid grid-cols-1 gap-4">
        {blogs.map((blog) => (
          <Link href={`/blogs/${blog.id}`} key={blog.id}>
            <div
              className="bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${blog.image})` }}
            >
              <div className="bg-black bg-opacity-60 rounded-lg p-4">
                <h2 className="text-yellow-50 text-xl font-semibold mb-4">
                  {blog.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-between mt-8">
        <button
          className="btn-secondary btn"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
    </div>
  );
};

// next js getstaticpaths function using the blogs array
export async function getStaticPaths() {
  const paths = blogs.map((blog) => ({
    params: { id: blog.id.toString() },
  }));
  return { paths, fallback: false };
}

export default BlogPage;
