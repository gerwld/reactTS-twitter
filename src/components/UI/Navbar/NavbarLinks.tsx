import { NavLink } from "react-router-dom";
import { navbarLinks } from "./fetchData";
import { v4 as id } from 'uuid';

export const NavbarLinks = () => {
 return (
  <ul>
   { navbarLinks.map((item) => <NavbarItem key={'navbar_' + id()} item={item} />) }
   <li>
    <span className="link_content">
     <div className="icon">
      <img src="/img/assets/nav/8.svg" alt="more" />
     </div>
     <span>More</span>
    </span>
   </li>
  </ul>
 );
};

const NavbarItem = ({ item }: any) => (
 <li>
  <NavLink to={item.path}>
   {({ isActive }) => (
    <span className="link_content">
     <div className="icon">
      <img src={isActive ? item.actIcon : item.icon} />
     </div>
     <span className={isActive ? "active" : ""}>{item.name}</span>
    </span>
   )}
  </NavLink>
 </li>
);
