import React from 'react';

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Top Career Tips for 2025",
      description: "Discover the latest trends and tips to enhance your career in 2025.",
      author: "Mr james",
      date: "January 12, 2025",
      image: "https://i.ibb.co.com/SPDZ7Q3/5259107.jpg",
    },
    {
      id: 2,
      title: "How to Ace Your Job Interview",
      description: "A comprehensive guide to preparing for your next big interview.",
      author: "Mr james",
      date: "January 10, 2025",
      image: "https://i.ibb.co.com/W0WFdBL/10314646.jpg",
    },
    {
      id: 3,
      title: "The Future of Remote Work",
      description: "Insights into the evolving landscape of remote work opportunities.",
      author: "Mr james",
      date: "January 8, 2025",
      image: "https://i.ibb.co.com/dGxY3Nx/5216292.jpg",
    },
  ];

  return (
    <div className="bg-base-200 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-700">Career Counseling Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>By {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
                <button
                  className="mt-4 w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-primary-focus transition-colors"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
