// components/Contact.js
import React from 'react';

function Contact({ isMarkdownTheme }) {
  const headingClass = isMarkdownTheme
    ? "text-2xl md:text-3xl font-bold mb-4 text-green-400"
    : "text-2xl md:text-3xl font-bold mb-4 text-blue-600";

  const listClass = isMarkdownTheme
    ? "list-none"
    : "list-disc list-inside";

  const linkClass = isMarkdownTheme
    ? "text-blue-400 hover:underline text-sm md:text-base"
    : "text-blue-600 hover:underline text-sm md:text-base";

  return (
    <div>
      <h2 className={headingClass}>{isMarkdownTheme ? "# " : ""}Contact</h2>
      <ul className={`${listClass} text-sm md:text-base`}>
        <li>{isMarkdownTheme ? "- " : ""}Email: <span className="font-semibold">your.email@example.com</span></li>
        <li>
          {isMarkdownTheme ? "- " : ""}LinkedIn: 
          <a href="https://linkedin.com/in/yourprofile" className={linkClass} target="_blank" rel="noopener noreferrer">
            {isMarkdownTheme ? " [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)" : " Your LinkedIn Profile"}
          </a>
        </li>
        <li>
          {isMarkdownTheme ? "- " : ""}GitHub: 
          <a href="https://github.com/yourusername" className={linkClass} target="_blank" rel="noopener noreferrer">
            {isMarkdownTheme ? " [Your GitHub Profile](https://github.com/yourusername)" : " Your GitHub Profile"}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;