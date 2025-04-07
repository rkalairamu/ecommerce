import { useEffect, useState } from "react";
import "./RightNav.css";
import { getHeaderConfig } from "../../../api/config";
import { Link } from "react-router-dom";

export default function RightNav() {
  const [config, setConfig] = useState([]);
  useEffect(() => {
    getHeaderConfig().then((res) => {
      if (res?.secondaryConfig) {
        setConfig(res.secondaryConfig);
      }
    });
  }, []);

  return (
    <div className="right-nav-wrapper">
      <nav className="right-nav nav">
        <ul>
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
    </div>
  );
}
