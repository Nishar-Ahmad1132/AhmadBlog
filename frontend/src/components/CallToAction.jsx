import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-6 bg-teal-100 dark:bg-teal-800 border border-teal-500 rounded-lg shadow-lg max-w-6xl mx-auto">
      <div className="flex-1 flex flex-col justify-center items-start gap-4 p-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Ready to Dive Deeper into Development?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Explore a curated selection of resources, tutorials, and guides to
          enhance your skills and stay updated with the latest trends.
        </p>
        <div className="flex gap-4 mt-4">
          <Button
            gradientDuoTone="purpleToPink"
            className="rounded-tl-xl rounded-bl-none"
          >
            <a href="/search?searchTerm=mern" rel="noopener noreferrer">
              MERN Stack
            </a>
          </Button>
          <Button
            gradientDuoTone="cyanToBlue"
            className="rounded-tl-xl rounded-bl-none"
          >
            <a
              href="/search?searchTerm=app%20development"
              rel="noopener noreferrer"
            >
              Flutter Development
            </a>
          </Button>
          <Button
            gradientDuoTone="orangeToRed"
            className="rounded-tl-xl rounded-bl-none"
          >
            <a href="/search?searchTerm=mern" rel="noopener noreferrer">
              Web Development
            </a>
          </Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center p-6">
        <img
          src="https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Development Resources"
          className="w-full max-w-sm rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
