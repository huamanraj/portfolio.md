// components/Projects.js
import React from 'react';

function Projects({ isMarkdownTheme }) {
  const headingClass = isMarkdownTheme
    ? "text-2xl md:text-3xl font-bold mb-4 text-green-400"
    : "text-2xl md:text-3xl font-bold mb-4 text-blue-600";

  const subHeadingClass = isMarkdownTheme
    ? "text-xl md:text-2xl font-semibold text-yellow-400"
    : "text-xl md:text-2xl font-semibold text-gray-700";

  const linkClass = isMarkdownTheme
    ? "text-blue-400 hover:underline text-sm md:text-base"
    : "text-blue-600 hover:underline text-sm md:text-base";

  return (
    <div>
      <h2 className={headingClass}>{isMarkdownTheme ? "# " : ""}Projects</h2>
      <ul className={isMarkdownTheme ? "list-none" : "list-disc list-inside"}>
        <li className="mb-4">
          <h3 className={subHeadingClass}>{isMarkdownTheme ? "## " : ""}Project 1</h3>
          <p className="text-sm md:text-base">Description of Project 1</p>
          <a href="https://project1.com" className={linkClass} target="_blank" rel="noopener noreferrer">
            {isMarkdownTheme ? "[Link to Project 1](https://project1.com)" : "Link to Project 1"}
          </a>
        </li>
        <li className="mb-4">
          <h3 className={subHeadingClass}>{isMarkdownTheme ? "## " : ""}Project 2</h3>
          <p className="text-sm md:text-base">Description of Project 2</p>
          <a href="https://project2.com" className={linkClass} target="_blank" rel="noopener noreferrer">
            {isMarkdownTheme ? "[Link to Project 2](https://project2.com)" : "Link to Project 2"}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Projects;