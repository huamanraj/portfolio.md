// components/Skills.js
import React from 'react';

function Skills({ isMarkdownTheme }) {
  const headingClass = isMarkdownTheme
    ? "text-2xl md:text-3xl font-bold mb-4 text-green-400"
    : "text-2xl md:text-3xl font-bold mb-4 text-blue-600";

  const listClass = isMarkdownTheme
    ? "list-none"
    : "list-disc list-inside";

  return (
    <div>
      <h2 className={headingClass}>{isMarkdownTheme ? "# " : ""}Skills</h2>
      <ul className={`${listClass} text-sm md:text-base`}>
        <li>{isMarkdownTheme ? "- " : ""}React</li>
        <li>{isMarkdownTheme ? "- " : ""}JavaScript</li>
        <li>{isMarkdownTheme ? "- " : ""}CSS</li>
        <li>{isMarkdownTheme ? "- " : ""}HTML</li>
        <li>{isMarkdownTheme ? "- " : ""}Node.js</li>
      </ul>
    </div>
  );
}

export default Skills;