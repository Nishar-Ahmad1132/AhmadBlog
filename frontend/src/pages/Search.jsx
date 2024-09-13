import { Button, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: "",
    sort: "desc",
    category: "all", // Default to 'all' to fetch all posts initially
  });

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm") || "";
    const sortFromUrl = urlParams.get("sort") || "desc";
    const categoryFromUrl = urlParams.get("category") || "all"; // Set default to 'all'

    setSidebarData({
      searchTerm: searchTermFromUrl,
      sort: sortFromUrl,
      category: categoryFromUrl,
    });

    const fetchPosts = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/post/getposts?${searchQuery}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      const data = await res.json();
      setPosts(data.posts);
      setLoading(false);
      setShowMore(data.posts.length === 9);
    };
    fetchPosts();
  }, [location.search]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSidebarData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(sidebarData);

    // If category is "all", remove it from the query string
    if (sidebarData.category === "all") {
      urlParams.delete("category");
    }

    navigate(`/search?${urlParams.toString()}`);
  };

  const handleShowMore = async () => {
    const startIndex = posts.length;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("startIndex", startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/post/getposts?${searchQuery}`);
    if (!res.ok) {
      return;
    }
    const data = await res.json();
    setPosts([...posts, ...data.posts]);
    setShowMore(data.posts.length === 9);
  };

  return (
    <div className="flex flex-col">
      {/* Filter Section */}
      <div className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-md w-full">
        <form
          className="flex flex-wrap gap-5 justify-around items-end w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-full sm:w-auto">
            <label
              htmlFor="searchTerm"
              className="font-semibold text-gray-700 dark:text-gray-300"
            >
              Search Term:
            </label>
            <TextInput
              placeholder="Search..."
              id="searchTerm"
              type="text"
              value={sidebarData.searchTerm}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col w-full sm:w-auto">
            <label
              htmlFor="sort"
              className="font-semibold text-gray-700 dark:text-gray-300"
            >
              Sort:
            </label>
            <Select
              id="sort"
              onChange={handleChange}
              value={sidebarData.sort}
              className="w-full"
            >
              <option value="desc">Latest</option>
              <option value="asc">Oldest</option>
            </Select>
          </div>

          <div className="flex flex-col w-full sm:w-auto">
            <label
              htmlFor="category"
              className="font-semibold text-gray-700 dark:text-gray-300"
            >
              Category:
            </label>
            <Select
              id="category"
              onChange={handleChange}
              value={sidebarData.category}
              className="w-full"
            >
              <option value="all">All</option>
              <option value="uncategorized">Uncategorized</option>
              <option value="javascript">JavaScript</option>
              <option value="reactjs">React.js</option>
              <option value="nextjs">Next.js</option>
              <option value="MERN Stack">MERN Stack</option>
              <option value="App Development">App Development</option>
            </Select>
          </div>

          <Button
            type="submit"
            outline
            gradientDuoTone="purpleToPink"
            className="w-full sm:w-auto"
          >
            Apply Filters
          </Button>
        </form>
      </div>

      {/* Posts Section */}
      <div className="w-full mt-6">
        <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mb-6">
          Posts Results:
        </h1>
        <div className="p-7 flex flex-wrap gap-4">
          {!loading && posts.length === 0 && (
            <p className="text-xl text-gray-500">No posts found.</p>
          )}
          {loading && <p className="text-xl text-gray-500">Loading...</p>}
          {!loading &&
            posts &&
            posts.map((post) => <PostCard key={post._id} post={post} />)}
          {showMore && (
            <button
              onClick={handleShowMore}
              className="text-teal-600 text-lg hover:underline p-7 w-full"
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
