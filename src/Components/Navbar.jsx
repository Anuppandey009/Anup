import { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles.css";

export const Navbar = () => {
  const [isPage, setIsPage] = useState("hero");
  return (
    <div className="navMain">
      <div
        onClick={() => {
          setIsPage("hero");
        }}
        style={isPage === "hero" ? { color: "wheat" } : null}
      >
        <Link to="/">Anup Pandey</Link>
      </div>
      <div>
        <div
          onClick={() => {
            setIsPage("project");
          }}
          style={isPage === "project" ? { color: "wheat" } : null}
        >
          <Link to="/projects">Projects</Link>
        </div>
        <div
          onClick={() => {
            setIsPage("about");
          }}
          style={isPage === "about" ? { color: "wheat" } : null}
        >
          <Link to="/about-me">About</Link>
        </div>
        <div
          onClick={() => {
            setIsPage("skill");
          }}
          style={isPage === "skill" ? { color: "wheat" } : null}
        >
          <Link to="/skills">Skills</Link>
        </div>
        <div>
          {/* <a
            href="https://albartjose.hashnode.dev/"
            rel="noreferrer"
            target="_blank"
          >
            Blog
          </a> */}
        </div>
        {/* <div className="download">
          <Link to="/files/AlbartJose_Resume.pdf" target="_blank" download>
            Resume
          </Link>
        </div> */}
      </div>
    </div>
  );
};
