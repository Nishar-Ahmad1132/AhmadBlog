/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";
import { useEffect, useState } from "react";
import img from "../assets/Aa12.jpg";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="flex flex-col  lg:flex-row items-center justify-center lg:justify-between p-6 lg:p-12 max-w-6xl mx-auto">
        <div className="flex-1 lg:mr-8 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white lg:text-5xl">
            Welcome to Nishar Ahmad's Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg mt-4">
            Discover a range of articles and tutorials on web development, app
            development, software engineering, and programming languages.
          </p>
          <Link
            to="/search"
            className="text-teal-500 dark:text-teal-400 font-semibold hover:underline text-base lg:text-lg mt-4 inline-block"
          >
            View All Posts
          </Link>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end mt-6 lg:mt-0">
          <img
            src={img} // Replace with your image path
            alt="Blog Illustration"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="w-4/5 mx-auto my-6 h-1 bg-teal-500"></div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
      {/* Call to Action */}
      <div className="bg-teal-100 dark:bg-teal-900 py-8">
        <div className="max-w-6xl mx-auto">
          <CallToAction />
        </div>
      </div>
      {/* Additional Content Section */}
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Join Our Community
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Be a part of our growing community of developers and tech
            enthusiasts. Share your knowledge, ask questions, and collaborate on
            exciting projects.
          </p>
          <Link
            to="/contact"
            className="bg-teal-500 dark:bg-teal-400 text-white font-semibold hover:bg-teal-600 dark:hover:bg-teal-300 px-6 py-3 rounded-lg"
          >
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
}
