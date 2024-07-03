// import React, { useState, useEffect } from 'react';

// function Blogs({ isMarkdownTheme }) {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const headingClass = isMarkdownTheme
//     ? "text-2xl md:text-3xl font-bold mb-4 text-green-400"
//     : "text-2xl md:text-3xl font-bold mb-4 text-blue-600";

//   const linkClass = isMarkdownTheme
//     ? "text-blue-400 hover:underline"
//     : "text-blue-600 hover:underline";

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch('https://api.hashnode.com/', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             query: `
//               query GetUserArticles($username: String!) {
//                 user(username: $username) {
//                   publication {
//                     posts(first: 10) {
//                       edges {
//                         node {
//                           title
//                           brief
//                           slug
//                           dateAdded
//                           url
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             `,
//             variables: {
//               username: "huamanraj",
//             },
//           }),
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         if (data.data && data.data.user && data.data.user.publication) {
//           setBlogs(data.data.user.publication.posts.edges.map(edge => edge.node));
//         } else {
//           throw new Error('Unexpected response structure');
//         }
//       } catch (err) {
//         setError('Failed to fetch blogs: ' + err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   if (loading) return <p>Loading blogs...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h2 className={headingClass}>{isMarkdownTheme ? "# " : ""}Blogs</h2>
//       {blogs.length > 0 ? (
//         <ul className="space-y-4">
//           {blogs.map((blog, index) => (
//             <li key={index} className="mb-4">
//               <h3 className="text-xl font-semibold">
//                 {isMarkdownTheme ? "## " : ""}
//                 <a href={blog.url} className={linkClass} target="_blank" rel="noopener noreferrer">
//                   {blog.title}
//                 </a>
//               </h3>
//               <p className="text-sm md:text-base mt-2">{blog.brief}</p>
//               <p className="text-xs mt-1 text-gray-500">
//                 Published on: {new Date(blog.dateAdded).toLocaleDateString()}
//               </p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No blogs found.</p>
//       )}
//     </div>
//   );
// }

// export default Blogs;
