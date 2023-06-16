'use client';
import React from 'react';
import { advice } from '../../../../public/advice';
import Link from 'next/link';
const SingleAdvicePage = ({ params }) => {
  // const selectedAdvice = advice.find((advice) => advice.id == params.id);
  console.log(params);
  // loop over advice using the id and category from aprams and retur the matching advice
  const selectedAdvice = advice.find((advice) => advice.id == params.id);
  // use the categforu id then to get the right article
  const selectedArticle = selectedAdvice.articles.find(
    (article) => article.id == params.category
  );
  console.log(selectedAdvice);
  return (
    <div className="prose container mx-auto py-8 flex flex-col gap-4 overflow-scroll w-full items-start h-full pb-10 no-scrollbar">
      <div className="prose container mx-auto py-8 flex flex-col gap-4 overflow-scroll w-full items-start h-full pb-10 no-scrollbar">
        <img
          src={selectedArticle.image}
          alt={selectedArticle.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">{selectedArticle.title}</h1>
        {selectedArticle.body.split('\n').map((str, i) => (
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
      {/* <button className="btn btn-primary my-2 ">Talk to an Ikea Expert</button>

      <div className="flex justify-between mt-8">
        <button
          className="btn-secondary btn-sm"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div> */}
    </div>
  );
};

export default SingleAdvicePage;
