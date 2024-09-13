import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";
import { useEffect, useState } from "react";

import "./Header.css";

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className="border-b-2">
      <Link to="/" className="logo flex flex-col items-center sm:flex-row">
        <span className="logo-ah">Nishar Ahmad`s </span>
        Blog
      </Link>
      <form onSubmit={handleSubmit} className="flex">
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline min-w-[400px] max-w-[500px]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Button className="search-btn lg:hidden" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-3 md:order-2">
        <Button
          className=""
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar rounded img={currentUser.profilePicture} />}
            className="custom-dropdown"
          >
            <Dropdown.Header className="flex flex-col gap-2 p-4 bg-teal-500 border-b-2 border-gray-200 shadow-sm">
              <div className="flex items-center gap-2">
                <Avatar
                  rounded
                  img={currentUser.profilePicture}
                  className="w-12 h-12"
                />
                <div>
                  <span className="text-black block text-md font-semibold">
                    {currentUser.name}
                  </span>
                  <span className="block text-sm text-black">
                    @{currentUser.username}
                  </span>
                </div>
              </div>
              <span className="block text-sm text-black truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>

            <Link to={"dashboard?tab=profile"}>
              <Dropdown.Item className=" px-4 py-2">
                Profile
              </Dropdown.Item>
            </Link>

            <Dropdown.Divider className="my-1 border-t border-gray-200" />

            <Dropdown.Item
              className="hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out px-4 py-2"
              onClick={handleSignout}
            >
              Sign out
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              SIgn In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link
            to="/"
            className={`nav-item ${path === "/" ? "active-link" : ""}`}
          >
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link
            to="/about"
            className={`nav-item ${path === "/about" ? "active-link" : ""}`}
          >
            About
          </Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link
            to="/projects"
            className={`nav-item ${path === "/projects" ? "active-link" : ""}`}
          >
            Projects
          </Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/contact"} as={"div"}>
          <Link
            to="/contact"
            className={`nav-item ${path === "/contact" ? "active-link" : ""}`}
          >
            Contact
          </Link>
        </Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  );
}
