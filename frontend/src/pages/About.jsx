/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center py-12">
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-8">
          About Nishar Ahmad's Blog
        </h1>
        <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            Welcome to Nishar Ahmad's Blog! Created by Nishar Ahmad, this blog is a
            personal project aimed at sharing valuable insights and ideas about
            technology and coding. As a passionate developer, I love writing
            about the latest trends in web development, app development, and
            programming languages.
          </p>

          <p>
            Here, you will find a variety of articles and tutorials, each
            crafted to help you deepen your understanding of technology. Whether
            you're looking for guidance on the latest frameworks, exploring new
            programming languages, or seeking tips on software engineering,
            there's something for everyone.
          </p>

          <p>
            I encourage you to engage with our content by leaving comments and
            sharing your thoughts. The blog fosters a community of learners who
            support each other’s growth. Feel free to like and reply to comments
            from other readers, and join in on the discussions.
          </p>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Interested in contributing or have suggestions? <br />
            <a
              href="/contact"
              className="text-teal-500 dark:text-teal-400 hover:underline"
            >
              Get in touch with me
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
