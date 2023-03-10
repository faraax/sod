import React from 'react';

const Breadcrumbs = ({ items }) => {
    return (
        <nav className="text-sm font-medium">
            <ol className="list-none p-0 inline-flex">
                {items.map((item, index) => (
                    <li key={index}>
                        {index !== 0 && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mx-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.707 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H4a1 1 0 110-2h8.586l-1.293-1.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                        <span className={index === items.length - 1 ? 'text-gray-500' : ''}>
                            {item}
                        </span>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
