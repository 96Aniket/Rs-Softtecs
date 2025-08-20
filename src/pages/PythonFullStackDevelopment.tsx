import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Mail } from "lucide-react";
import { createPortal } from "react-dom";

const PythonFullStackDevelopment = () => {
  const [showModal, setShowModal] = useState(false);

  const topics = [
    "HTML, CSS, and Bootstrap – Building the UI",
    "JavaScript & DOM Manipulation",
    "Python Programming Essentials",
    "Flask/Django Basics for Backend Development",
    "RESTful APIs and JSON",
    "Database Integration using MySQL/PostgreSQL",
    "Authentication and CRUD operations",
    "Deploying Full Stack Apps using Heroku or Render",
  ];

  const tools = [
    "VS Code",
    "Postman",
    "Python 3.x",
    "Django/Flask",
    "SQLite / MySQL",
    "Git & GitHub",
    "Bootstrap",
    "Jinja Templates",
  ];

  const careerPaths = [
    "Python Full Stack Developer",
    "Backend Python Developer",
    "Django/Flask Developer",
    "Web Application Engineer",
    "Junior Software Developer",
    "API Developer",
  ];

  const handleEnroll = () => {
    window.open("https://your-enroll-form-link.com", "_blank");
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-8">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">Python Full Stack Development</h1>
        <p className="text-lg mb-6">
          Learn to build powerful web applications from scratch using Python.
          This course covers everything from frontend structure to backend logic and database operations.
        </p>

        {/* Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Course Overview</h2>
          <p className="text-base leading-relaxed">
            Python is one of the most in-demand languages for modern web development.
            In this course, you’ll gain hands-on experience building interactive UIs and scalable backend logic using tools like Django or Flask. It’s beginner-friendly yet career-ready.
          </p>
        </div>

        {/* What You'll Learn */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">What You'll Learn</h2>
          <ul className="list-disc list-inside space-y-2">
            {topics.map((topic, index) => (
              <li key={index} className="text-base flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                {topic}
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Tools & Technologies</h2>
          <ul className="flex flex-wrap gap-3 text-sm text-white">
            {tools.map((tool, index) => (
              <li key={index} className="bg-blue-600 px-3 py-1 rounded-full">
                {tool}
              </li>
            ))}
          </ul>
        </div>

        {/* Career Paths */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Career Opportunities</h2>
          <ul className="list-disc list-inside space-y-2">
            {careerPaths.map((path, index) => (
              <li key={index} className="text-base">{path}</li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleEnroll}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
          >
            Enroll Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowModal(true)}
            className="bg-transparent border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 px-6 py-2 rounded-lg transition flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Contact Instructor
          </motion.button>
        </div>
      </motion.div>

      {/* Modal */}
      {showModal &&
        createPortal(
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
              <h2 className="text-xl font-semibold mb-2">Contact Instructor</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                You can reach out via WhatsApp or email:
              </p>
              <ul className="space-y-2 text-blue-600">
                <li>
                  📞 WhatsApp:{" "}
                  <a href="https://wa.me/919970981875" target="_blank" rel="noopener noreferrer">
                    +91 9970981875
                  </a>
                </li>
                <li>
                  📧 Email:{" "}
                  <a href="mailto:info@rssofttecs.com">info@rssofttecs.com</a>
                </li>
              </ul>
              <button
                onClick={() => setShowModal(false)}
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default PythonFullStackDevelopment;