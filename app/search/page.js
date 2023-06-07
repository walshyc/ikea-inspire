"use client"
import React, { useState } from 'react';
import { data } from '../../public/ikeaProducts';
import Link from 'next/link';

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const results = data.filter(
            (item) =>
                item.name.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query)
        );
        setSearchResults(results);
    };

    return (
        <div className="flex flex-col overflow-scroll w-full h-full pb-10">
            <div className="flex flex-col gap-4">
                <h1 className="text-xl font-bold text-primary">Search Ikea</h1>
                <input
                    type="text"
                    placeholder="sofa, chair, table, bed ..."
                    className="input input-bordered input-primary w-full"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
            {searchQuery && (
                <div className='flex flex-col gap-4'>
                    {searchResults.map((result, index) => (
                        <Link key={result.name} href='https://www.ikea.com/ie/en/' target='_blank'>
                            <div className="mt-4 flex items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg>

                                <div className='flex flex-col'>
                                    <h2 className="font-bold">{result.name}</h2>
                                    <p>{result.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchPage;
