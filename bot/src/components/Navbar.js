import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              BotCollection
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/bots">
              YourBotArmy
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
