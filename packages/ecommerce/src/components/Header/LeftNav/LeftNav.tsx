import { useEffect, useState } from "react";
import "./LeftNav.css";
import { getHeaderConfig } from "../../../api/config";
import { Link } from "react-router-dom";

/**
 * display the navigation in the left side. The links will be displayed when we click on the nav icon.
 * @param param
 * @returns
 */
export default function LeftNav({
  handleHideNavLink,
}: {
  handleHideNavLink: () => void;
}) {
  const [config, setConfig] = useState([]);
  useEffect(() => {
    getHeaderConfig().then((res) => {
      if (res?.leftNavConfig) {
        setConfig(res.leftNavConfig);
      }
    });
  }, []);

  return (
    <div className="left-nav-wrapper">
      <nav className="left-nav nav">
        <ul>
          <li>
            <Link to="/" onClick={handleHideNavLink}>
              home
            </Link>
          </li>
          {config.map((link) => {
            const name = Object.keys(link)[0];
            const { path, title } = link[name];
            return (
              <li key={name} onClick={handleHideNavLink}>
                <Link to={path}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
