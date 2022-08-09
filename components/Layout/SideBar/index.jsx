import React from "react";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="sidebarContainer">
      <p className="logo">K</p>
      <ul className="listContainer">
        <Link href="/">
          <li>
            <a>Home</a>
          </li>
        </Link>
        <Link href="/skills">
          <li>
            <a>Skills</a>
          </li>
        </Link>
        <Link href="/projects">
          <li>
            <a>Projects</a>
          </li>
        </Link>
        <Link href="/about">
          <li>
            <a>About me</a>
          </li>
        </Link>
        <Link href="/contact">
          <li>
            <a>Contact</a>
          </li>
        </Link>
      </ul>
      <div className="socialContainer">
        <p>Redes sociales</p>
      </div>
    </div>
  );
};

export default SideBar;
