import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar"; 

const Contact = () => {
  // State for Contact Form
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for Feedback Form
  const [feedbackForm, setFeedbackForm] = useState({
    rating: "",
    comments: "",
  });

  // Handle Contact Form Input Changes
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Feedback Form Input Changes
  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedbackForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Contact Form Submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", contactForm);
    // Reset form after submission
    setContactForm({ name: "", email: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  // Handle Feedback Form Submission
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Form Submitted:", feedbackForm);
    // Reset form after submission
    setFeedbackForm({ rating: "", comments: "" });
    alert("Thank you for your feedback! We appreciate your input.");
  };

  return (
    <div className="bg-gray-100">
      <NavBar />
      <div className="max-w-6xl mx-auto py-16 w-full px-4 bg-gray-100 min-h-screen">
        {/* Back to Home Link */}
        <Link
          to="/"
          className="text-indigo-800 hover:text-purple-600 mb-6 inline-block"
        >
          ← Back to Home
        </Link>

        {/* Introduction Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4 relative">
            Get in Touch with Global Gatherings
            <span className="block w-24 h-1 bg-purple-600 mx-auto mt-3 rounded"></span>
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Whether you have a question, need travel advice, or want to share
            your feedback, we’d love to hear from you. Let’s make your next
            journey unforgettable!
          </p>
        </div>

        {/* Contact and Feedback Forms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div>
            <div className="flex justify-center md:justify-start items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-800 rounded-full flex items-center justify-center text-white font-bold">
                C
              </div>
              <h2 className="text-xl font-semibold text-indigo-900">
                Contact Us
              </h2>
            </div>
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
                  rows="4"
                  placeholder="Your message or inquiry..."
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-800 text-white font-bold px-6 py-3 rounded hover:bg-purple-600 transition w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Feedback Form */}
          <div>
            <div className="flex justify-center md:justify-start items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-800 rounded-full flex items-center justify-center text-white font-bold">
                F
              </div>
              <h2 className="text-xl font-semibold text-indigo-900">
                Share Your Feedback
              </h2>
            </div>
            <form onSubmit={handleFeedbackSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="rating"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  How would you rate your experience? (1-5)
                </label>
                <select
                  id="rating"
                  name="rating"
                  value={feedbackForm.rating}
                  onChange={handleFeedbackChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
                  required
                >
                  <option value="" disabled>
                    Select a rating
                  </option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="comments"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Your Feedback
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={feedbackForm.comments}
                  onChange={handleFeedbackChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
                  rows="4"
                  placeholder="Tell us about your experience..."
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-800 text-white font-bold px-6 py-3 rounded hover:bg-purple-600 transition w-full md:w-auto"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="text-center bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">
            Other Ways to Reach Us
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:contact@globalgatherings.com"
                className="text-indigo-800 hover:text-purple-600"
              >
                contact@globalgatherings.com
              </a>
            </p>
            <p className="text-gray-700">
              Follow us on social media for travel inspiration and updates:
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://twitter.com/globalgatherings"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-800 hover:text-purple-600"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com/globalgatherings"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-800 hover:text-purple-600"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/globalgatherings"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-800 hover:text-purple-600"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;