// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const [isMarkdownTheme, setIsMarkdownTheme] = useState(true);

  const toggleTheme = () => {
    setIsMarkdownTheme(!isMarkdownTheme);
  };

  const themeClass = isMarkdownTheme
    ? "bg-gray-900 text-gray-300 font-mono"
    : "bg-white text-gray-800 font-sans";

  const linkClass = isMarkdownTheme
    ? "text-blue-400 hover:underline block mb-2"
    : "text-blue-600 hover:underline block mb-2";

  return (
    <Router>
      <div className={`min-h-screen p-4 md:p-8 ${themeClass}`}>
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 px-2 py-1 bg-transparent border border-gray-500 text-gray-500 rounded hover:bg-gray-700 hover:text-white transition-colors text-sm"
        >
          {isMarkdownTheme ? "[Switch to Professional]" : "[Switch to Markdown]"}
        </button>
        <nav className="mb-8">
          <ul className="space-y-2 md:space-y-0 md:flex md:space-x-4">
            <li><Link to="/" className={linkClass}>[Home](#home)</Link></li>
            <li><Link to="/projects" className={linkClass}>[Projects](#projects)</Link></li>
            <li><Link to="/skills" className={linkClass}>[Skills](#skills)</Link></li>
            <li><Link to="/education" className={linkClass}>[Education](#education)</Link></li>
            <li><Link to="/blogs" className={linkClass}>[Blogs](#blogs)</Link></li>
            <li><Link to="/contact" className={linkClass}>[Contact](#contact)</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home isMarkdownTheme={isMarkdownTheme} />} />
          <Route path="/projects" element={<Projects isMarkdownTheme={isMarkdownTheme} />} />
          <Route path="/skills" element={<Skills isMarkdownTheme={isMarkdownTheme} />} />
          <Route path="/education" element={<Education isMarkdownTheme={isMarkdownTheme} />} />
          <Route path="/blogs" element={<Blogs isMarkdownTheme={isMarkdownTheme} />} />
          <Route path="/contact" element={<Contact isMarkdownTheme={isMarkdownTheme} />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home({ isMarkdownTheme }) {
  const headingClass = isMarkdownTheme
    ? "text-2xl md:text-4xl font-bold mb-4 text-green-400"
    : "text-2xl md:text-4xl font-bold mb-4 text-blue-600";

  const paragraphClass = isMarkdownTheme
    ? "mb-4 text-sm md:text-base"
    : "mb-4 leading-relaxed text-sm md:text-base";

  return (
    <div>
      <h1 className={headingClass}>{isMarkdownTheme ? "# " : ""}John Doe</h1>
      <div className={paragraphClass}>
        <p>Hello! I'm John Doe, a passionate web developer with 5 years of experience in creating responsive and user-friendly web applications. My expertise lies in front-end development, particularly with React and Vue.js frameworks.</p>
        <br />
        <p>I have a strong foundation in computer science and a keen eye for design, allowing me to bridge the gap between aesthetics and functionality. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and local meetups.</p>
        <br />
        <p>My goal is to create web experiences that not only meet client requirements but also delight end-users. I'm always excited to take on new challenges and collaborate with like-minded professionals in the tech industry.</p>
        <br />
        <p>Feel free to explore my portfolio to see some of my recent projects and get in touch if you'd like to discuss potential collaborations or just chat about the latest in web development!</p>
      </div>
    </div>
  );
}

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

function Blogs({ isMarkdownTheme }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const headingClass = isMarkdownTheme
    ? "text-2xl md:text-3xl font-bold mb-4 text-green-400"
    : "text-2xl md:text-3xl font-bold mb-4 text-blue-600";

  const linkClass = isMarkdownTheme
    ? "text-blue-400 hover:underline"
    : "text-blue-600 hover:underline";

  useEffect(() => {
    fetch('https://api.hashnode.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          {
            user(username: "huamanraj") {
              publication {
                posts(page: 1) {
                  title
                  brief
                  slug
                  dateAdded
                }
              }
            }
          }
        `
      }),
    })
    .then(response => response.json())
    .then(data => {
      setBlogs(data.data.user.publication.posts);
      setLoading(false);
    })
    .catch(err => {
      setError('Failed to fetch blogs');
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2 className={headingClass}>{isMarkdownTheme ? "# " : ""}Blogs</h2>
      <ul className="space-y-4">
        {blogs.map((blog, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-xl font-semibold">
              {isMarkdownTheme ? "## " : ""}
              <a href={`https://huamanraj.hashnode.dev/${blog.slug}`} className={linkClass} target="_blank" rel="noopener noreferrer">
                {blog.title}
              </a>
            </h3>
            <p className="text-sm md:text-base mt-2">{blog.brief}</p>
            <p className="text-xs mt-1 text-gray-500">
              Published on: {new Date(blog.dateAdded).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

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

export default App;