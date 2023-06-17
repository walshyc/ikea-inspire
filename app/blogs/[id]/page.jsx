'use client';
import React from 'react';
import { blogs } from '../../../public/blogs';
const SingleBlogPage = ({ params }) => {
  console.log(blogs);
  const blog = blogs.find((blog) => blog.id == params.id);

  return (
    <div className="prose container mx-auto py-8 flex flex-col gap-4 overflow-scroll w-full items-start h-full pb-10 no-scrollbar">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-lg mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      {blog.content.split('\n').map((str, i) => (
        <p className="prose-lg" key={i}>
          {str}
        </p>
      ))}

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

export default SingleBlogPage;
