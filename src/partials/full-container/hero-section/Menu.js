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
      </div>
    );
  }
}

export default Menu;
