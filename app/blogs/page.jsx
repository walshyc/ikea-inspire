import React from 'react';
import { blogs } from '../../public/blogs';
import Link from 'next/link';

const BlogPage = () => {
  return (
    <div className="flex flex-col gap-4 overflow-scroll w-full items-start h-full pb-10 no-scrollbar">
      <div className="prose-2xl font-bold text-primary">Inspire Blogs</div>
      <div className="grid grid-cols-1 gap-8">
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
                {/* <p className="text-white">{blog.content}</p> */}
              </div>
            </div>
          </Link>
        ))}
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
