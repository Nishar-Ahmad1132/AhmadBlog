import CallToAction from "../components/CallToAction";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto p-6 flex flex-col items-center gap-8">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
        My Projects
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
        Explore a selection of my personal and professional projects that
        showcase a range of skills, technologies, and creative solutions. Each
        project demonstrates my commitment to delivering high-quality work and
        solving real-world problems.
      </p>
      <div className="w-full flex flex-col gap-6 mt-8">
        <div className="flex flex-col gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Recent Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Here are some of my most recent projects, highlighting the diversity
            and depth of my work. Click on each project to learn more about the
            challenges faced and solutions implemented.
          </p>
          <ul className="list-disc list-inside pl-4">
            <li className="text-gray-700 dark:text-gray-200">
              <a href="/project-1" className="text-teal-500 hover:underline">
                Project 1 - A Full-Stack Web Application
              </a>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Developed a full-stack application using MERN stack with user
                authentication and dynamic data management.
              </p>
            </li>
            <li className="text-gray-700 dark:text-gray-200">
              <a href="/project-2" className="text-teal-500 hover:underline">
                Project 2 - Mobile App Development with Flutter
              </a>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Created a cross-platform mobile app with Flutter, focusing on
                seamless user experience and performance.
              </p>
            </li>
            <li className="text-gray-700 dark:text-gray-200">
              <a href="/project-3" className="text-teal-500 hover:underline">
                Project 3 - Responsive Web Design
              </a>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Designed and implemented a responsive website with a modern,
                clean interface and optimized performance.
              </p>
            </li>
          </ul>
        </div>
        <CallToAction />
      </div>
    </div>
  );
}
