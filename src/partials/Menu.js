import Hamburger from "./Hamburger";
import Hamburger from "./Logo";
import MobileNav from "./MobileNav";

class Menu extends Component {
  render() {
    return (
      <div className="all-menu-wrapper" id="navbarMenu">
        <nav className="navbar-topmenu">
          <ul className="navbar-social d-none d-lg-block">
            <li className="nav-item">
              <a href="//linked.com/miradontsoa" className="btn-social">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li className="nav-item">
              <a href="//twitter/miradontsoa" className="btn-social">
                <i className="icon fa fa-twitter" />
              </a>
            </li>
            <li className="nav-item">
              <a href="//instagram.com/miradontsoa" className="btn-social">
                <i className="icon fa fa-instagram" />
              </a>
            </li>
          </ul>
        </nav>

        <MobileNav />

        <nav className="navbar-sidebar font-primary">
          <ul className="navbar-nav" id="qmenu">
            <li className="nav-item active" data-menuanchor="home">
              <a href="#home">
                <span className="icon">H</span>
                <span className="txt">Home</span>
              </a>
            </li>
            <li className="nav-item" data-menuanchor="about">
              <a href="#about">
                <span className="icon">A</span>
                <span className="txt">About</span>
              </a>
            </li>
            <li className="nav-item" data-menuanchor="projects">
              <a href="#projects">
                <span className="icon">W</span>
                <span className="txt">Works</span>
              </a>
            </li>
            <li className="nav-item" data-menuanchor="contact">
              <a href="#contact">
                <span className="icon">C</span>
                <span className="txt">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
