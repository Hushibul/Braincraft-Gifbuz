import { useLocation, Link } from "react-router-dom";
import Classes from "./BreadCrumb.module.scss";

const BreadCrumb = () => {
  const location = useLocation();
  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => (currentLink += `${crumb}`));

  const link = crumbs
    .toString()
    .replaceAll("-", " ")
    .split(" ")
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
    .join(" ");

  return (
    <div className={`${Classes.breadcrumb} mt-2 mt-lg-3`}>
      <h1 className={`${Classes.breadcrumb__heading} text-center pt-2 pt-lg-3`}>
        {link}
      </h1>
      <div className="d-flex justify-content-center align-items-center gap-3 pt-lg-2">
        <Link className={Classes.breadcrumb__links} to="/">
          Home
        </Link>
        <p className={`${Classes.breadcrumb__links} m-0`}>{">"}</p>
        <Link
          className={`${Classes.breadcrumb__links} ${Classes.breadcrumb__active}`}
          to={`/${crumbs}`}
        >
          {link}
        </Link>
      </div>
    </div>
  );
};

export default BreadCrumb;
