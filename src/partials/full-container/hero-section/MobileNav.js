import React, { Component } from "react";
import styled from "styled-components";

class MobileNav extends Component {
  render() {
    return (
      <nav class="navbar-mainmenu">
        <div class="click-exit" />
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="./index.html#home">
              About
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./gallery.html">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./item.html">
              Item
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./index.html#home">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./demo.html">
              Demo
            </a>
          </li>
        </ul>
        <div class="menu-social">
          <ul class="social">
            <li>
              <a href="//facebook.com/miradontsoa">
                <i class="icon fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="//twitter/miradontsoa">
                <i class="icon fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="//instagram.com/miradontsoa">
                <i class="icon fa fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default MobileNav;
