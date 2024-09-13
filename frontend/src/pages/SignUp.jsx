/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.username ||
      !formData.email ||
      !formData.password
    ) {
      return setErrorMessage("Please fill out all fields.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      } else {
        navigate("/sign-in"); // Keep the redirection as it is
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <Link
          to="/"
          className="text-2xl font-bold text-center block mb-8 text-gray-800 dark:text-gray-100"
        >
          Nishar Ahmad's Blog
        </Link>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
          Share your story with the world. Customize your blog with ease and
          make it stand out!
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label
              htmlFor="name"
              value="Your Name"
              className="text-gray-700 dark:text-gray-300"
            />
            <TextInput
              id="name"
              type="text"
              placeholder="Nishar Ahmad"
              onChange={handleChange}
              required
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
            />
          </div>
          <div>
            <Label
              htmlFor="username"
              value="Your Username"
              className="text-gray-700 dark:text-gray-300"
            />
            <TextInput
              id="username"
              type="text"
              placeholder="username"
              onChange={handleChange}
              required
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
            />
          </div>
          <div>
            <Label
              htmlFor="email"
              value="Your Email"
              className="text-gray-700 dark:text-gray-300"
            />
            <TextInput
              id="email"
              type="email"
              placeholder="name@company.com"
              onChange={handleChange}
              required
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
            />
          </div>
          <div>
            <Label
              htmlFor="password"
              value="Your Password"
              className="text-gray-700 dark:text-gray-300"
            />
            <TextInput
              id="password"
              type="password"
              placeholder="password"
              onChange={handleChange}
              required
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white dark:bg-teal-600 dark:hover:bg-teal-700"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner size="sm" />
                <span className="pl-3">Loading...</span>
              </>
            ) : (
              "Sign Up"
            )}
          </Button>
          {/* Center OAuth */}
          <div className="flex justify-center mt-4">
            <OAuth />
          </div>
          {errorMessage && (
            <Alert color="failure" className="mt-4">
              {errorMessage}
            </Alert>
          )}
        </form>
        <div className="text-center mt-4">
          <span className="text-gray-700 dark:text-gray-300">
            Already have an account?
          </span>
          <Link to="/sign-in" className="text-teal-500 dark:text-teal-400 ml-2">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
