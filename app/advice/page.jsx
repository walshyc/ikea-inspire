"use client"
import React from 'react';
import { advice } from '../../public/advice';
import Link from 'next/link';

const BlogPage = () => {
  console.log(advice);
  return (
    <div className="flex flex-col gap-1 overflow-scroll prose w-full items-start h-full pb-10 no-scrollbar">
      <h1 className=" text-primary">
        Interior Design Advice
      </h1>
      <div className="grid grid-cols-1 gap-8 w-full">
        {advice.map((advice) => (
          <Link href={`/advice/${advice.id}`} key={advice.id}>
            <div
              className="bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${advice.image})` }}
            >
              <div className="bg-black bg-opacity-60 rounded-lg p-12">
                <h2 className="text-yellow-50 text-3xl font-semibold mb-4">
                  {advice.name}
                </h2>
                {/* <p className="text-white">{blog.content}</p> */}
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
// export async function getStaticPaths() {
//   const paths = blogs.map((blog) => ({
//     params: { id: blog.id.toString() },
//   }));
//   return { paths, fallback: false };
// }

export default BlogPage;
