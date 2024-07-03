// components/Education.js
import React from 'react';

function Education({ isMarkdownTheme }) {
  const headingClass = isMarkdownTheme
    ? "text-2xl md:text-3xl font-bold mb-4 text-green-400"
    : "text-2xl md:text-3xl font-bold mb-4 text-blue-600";

  const subHeadingClass = isMarkdownTheme
    ? "text-xl md:text-2xl font-semibold text-yellow-400"
    : "text-xl md:text-2xl font-semibold text-gray-700";

  return (
    <div>
      <h2 className={headingClass}>{isMarkdownTheme ? "# " : ""}Education</h2>
      <ul className={isMarkdownTheme ? "list-none" : "list-disc list-inside"}>
        <li className="mb-4">
          <h3 className={subHeadingClass}>{isMarkdownTheme ? "## " : ""}University Name</h3>
          <p className="text-sm md:text-base">{isMarkdownTheme ? "**Degree**: " : ""}Computer Science</p>
          <p className="text-sm md:text-base">{isMarkdownTheme ? "**Graduation Year**: " : ""}20XX</p>
        </li>
      </ul>
    </div>
  );
}

export default Education;