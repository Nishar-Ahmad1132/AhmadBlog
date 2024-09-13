import { Footer } from "flowbite-react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function FooterCom() {
  return (
    <div className="footer-container">
      <Footer container className="border border-t-8 border-green-500">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5">
              <Link
                to="/"
                className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
              >
                <span className="px-2 py-1 dark:text-teal-500 rounded-lg text-black ">
                  Nishar Ahmad`s
                </span>
                Blog
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="About" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My Portfolio
                  </Footer.Link>
                  <Footer.Link
                    href="/about"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    About Nishar
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow me" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://github.com/Nishar-Ahmad1132"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Footer.Link>
                  <Footer.Link
                    href="https://www.linkedin.com/in/nishar-ahmad-47b368215/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="#"
              by="Nishar's blog"
              year={new Date().getFullYear()}
            />
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
              <Footer.Icon
                href="https://www.linkedin.com/in/nishar-ahmad-47b368215/"
                icon={BsLinkedin}
                target="_blank"
              />
              <Footer.Icon
                href="https://www.instagram.com/nisharahmad.1132/"
                icon={BsInstagram}
                target="_blank"
              />

              <Footer.Icon href="/" icon={BsTwitter} />
              <Footer.Icon
                href="https://github.com/Nishar-Ahmad1132"
                target="_blank"
                icon={BsGithub}
              />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}
