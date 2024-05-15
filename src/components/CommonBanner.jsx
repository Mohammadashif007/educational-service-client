import { useState } from "react";

const CommonBanner = ({ cover, title, description, handleSearchKey, searchKey }) => {



    return (
        <div
            className="hero h-[500px] mb-10"
            style={{
                backgroundImage: `url(${cover})`,
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5 text-xl">{description}</p>
                    
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            className="border border-gray-300 text-gray-500 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search..."
                            onChange={handleSearchKey}
                            value={searchKey}
                            
                        />
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommonBanner;
