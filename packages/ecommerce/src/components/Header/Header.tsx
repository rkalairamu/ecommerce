import { Link } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";
import { getHeaderConfig } from "../../api/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-regular-svg-icons/faChartBar";
import LeftNav from "./LeftNav/LeftNav";
import RightNav from "./RightNav/RightNav";

export default function Header() {
  const [config, setConfig] = useState([]);
  const [showLeftNav, setShowLeftNav] = useState(false);
  useEffect(() => {
    getHeaderConfig().then((res) => {
      if (res?.headerConfig) {
        setConfig(res.headerConfig);
      }
    });
  }, []);

  /**
   * Show/Hide the navigation
   */
  function handleToggleNavLink() {
    setShowLeftNav(!showLeftNav);
  }

  /**
   * hide the navigation which is displayed in the left side.
   */
  function handleHideNavLink() {
    setShowLeftNav(false);
  }

  return (
    <header className="header">
      <div className="header-row1">
        <div className="logo">
          <FontAwesomeIcon
            icon={faChartBar}
            onClick={handleToggleNavLink}
            title="Open navigation"
          />
          <Link to="/">Ecommerce</Link>
        </div>
        <RightNav />
        {showLeftNav && <LeftNav handleHideNavLink={handleHideNavLink} />}
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          {config.map((link) => {
            const name = Object.keys(link)[0];
            const { path, title } = link[name];
            return (
              <li key={name}>
                <Link to={path}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
