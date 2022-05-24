import React, { FunctionComponent } from "react";
import Link from "next/link";
import Search from "./Search";

const Nav: FunctionComponent = (props) => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link href="/Users/alexpatai/projects/personal/assesment/public">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/favourites">
              <a>Favourites</a>
            </Link>
          </li>
        </ul>
        <Search />
      </div>
    </nav>
  );
};

export default Nav;
