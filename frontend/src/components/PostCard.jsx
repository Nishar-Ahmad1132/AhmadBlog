import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="group bg-[#25313C] rounded-3xl overflow-hidden w-[350px] h-[400px] sm:w-[350px] mx-1 shadow-lg transition-transform transform hover:-translate-y-2 duration-300">
      {/* Card Image Section */}
      <div className="relative">
        <Link to={`/post/${post.slug}`}>
          <img
            src={post.image}
            alt="post cover"
            className="w-full h-[220px] object-cover"
          />
        </Link>
        <p className="absolute top-5 left-5 bg-gradient-to-r from-[#6416D3] to-[#B078FF] text-white font-medium text-sm py-2 px-5 rounded-full">
          {post.category}
        </p>
      </div>

      {/* Card Content */}
      <div className="p-6 bg-white bg-opacity-10 relative transition-all duration-300 hover:border-[#00FFB6] border border-opacity-45 rounded-b-3xl h-[180px]">
        {/* Post Title */}
        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF2F6F] to-[#8F41FF] mb-4 line-clamp-2">
          {post.title}
        </p>

        {/* Read More Button */}
        <Link
          to={`/post/${post.slug}`}
          className="bg-gradient-to-r from-[#6416D3] to-[#B078FF] text-white font-medium text-sm py-2 px-5 rounded-full absolute bottom-4 left-6 transition-all duration-300 hover:from-[#B078FF] hover:to-[#6416D3]"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

// Define propTypes for PostCard component
PostCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
