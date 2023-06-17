'use client';
import React, { useEffect, useRef } from 'react';

const AskPage = () => {
  const [answer, setAnswer] = React.useState('');
  const ref = useRef(null);
  const handleSubmit = (e) => {
    // i want to take the prompt from the textarea and send it to /api/generate-answer

    e.preventDefault();
    const prompt = document.getElementById('prompt').value;
    console.log(prompt);
    fetch('/api/generate-answer', {
      method: 'POST',
      body: JSON.stringify({ prompt }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((ans) => {
        console.log(ans);
        // scroll to answer id
        setAnswer(ans.text);
      });
  };

  // use effect that shows the answer when it is set
  useEffect(() => {
    if (answer) {
      console.log(answer);
    }
  }, [answer]);
  return (
    <div className="flex prose flex-col gap-1 overflow-scroll w-full items-start h-full pb-10 no-scrollbar">
      <h1 className="text-primary text-3xl"> Ask an Ikea Expert</h1>
      <img
        className="w-full h-32 object-cover rounded-lg m-0"
        src="https://www.ikea.com/images/an-ikea-co-worker-dressed-in-a-yellow-uniform-waving-to-a-co-30869d4c21d2b8f29c40e4a69c502fe0.jpg?f=s"
      ></img>
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <div>
          <label className="label">
            <span className="text-base label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="John Smith"
            className="w-full input input-bordered input-primary"
          />
        </div>
      
        <div className="">
          <label className="label">
            <span className="text-base label-text">Your question</span>
          </label>
          <textarea
            className="textarea textarea-bordered textarea-primary w-full"
            placeholder="What colours should I use with my red couch?"
            id="prompt"
          ></textarea>
        </div>
        <div>
          <button className="btn btn-primary">Send</button>
        </div>
        {answer && (
          <div ref={ref} className="flex flex-col gap-1">
            <p className="text-primary my-0 font-bold text-2xl">Ikea Expert's reply</p>
            <p className="text-primary">{answer}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default AskPage;
