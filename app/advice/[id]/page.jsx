'use client';
import React from 'react';
import { advice } from '../../../public/advice';
import Link from 'next/link';
const SingleAdvicePage = ({ params }) => {
  const selectedAdvice = advice.find((advice) => advice.id == params.id);

  const trimBody = (body) => {
    const trimmedBody = body.substring(0, 100);
    const trimmedBodyWithEllipsis = trimmedBody + '...';
    return trimmedBodyWithEllipsis;
  };

  return (
    <div className="prose container mx-auto py-8 flex flex-col gap-4 overflow-scroll w-full items-start h-full pb-10 no-scrollbar">
      <img
        src={selectedAdvice.image}
        alt={selectedAdvice.name}
        className="w-full h-52 object-cover rounded-lg mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">{selectedAdvice.name}</h1>
      <div className="flex flex-col gap-4">
        {selectedAdvice.articles.map((article) => (
          <div className="border px-4 border-black" key={article.id}>
            <h4 className="text-2xl font-bold">{article.title}</h4>
            <p className="prose-lg">{trimBody(article.body)}</p>
            <Link
              href={`/advice/${selectedAdvice.id}/${article.id}`}
              key={advice.id}
            >
              <button className="btn btn-sm btn-primary my-2 ">
                Read more
              </button>{' '}
            </Link>
          </div>
        ))}
      </div>

      {/* {selectedAdvice.content.split('\n').map((str, i) => (
        <p className="prose-lg" key={i}>
          {str}
        </p>
      ))} */}

      <button className="btn btn-primary my-2 ">Talk to an Ikea Expert</button>

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

export default SingleAdvicePage;
