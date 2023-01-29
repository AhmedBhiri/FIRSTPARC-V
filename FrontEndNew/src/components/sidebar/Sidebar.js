import React, { Component, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Icon from "@mui/material/Icon";

function Sidebar({ color, image, routes }) {
  const location = useLocation();

  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  const { sideBarIsOpen } = useSelector((state) => state.ui);
  const { user } = useSelector((state) => state.auth);

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className="sidebar"
      data-color={color}
      style={{ display: sideBarIsOpen ? "block" : "" }}
    >
      <div className="sidebar-background" />
      <div className="sidebar-wrapper">
        <Nav>
          <List
            sx={{ width: "100%", color: "white" }}
            component="nav"
            fullWidth
            aria-labelledby="nested-list-subheader"
            subheader={
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "30px",
                }}
                className="logo-img"
              >
                <h4>First Parc </h4>
              </div>
            }
          >
            {routes
              .filter(({ layout }) => layout.split("/")[1] === user.role)
              .map((prop, key) => {
                if (!prop.redirect)
                  return (
                    <>
                      {prop.subMenus && prop.subMenus.length ? (
                        <>
                          <ListItemButton key={key} onClick={handleClick}>
                            <ListItemIcon style={{ widh: "100%" }}>
                              <Icon
                                baseClassName="fas"
                                style={{
                                  color: "white",
                                }}
                                className={prop.icon}
                              />
                            </ListItemIcon>
                            <ListItemText primary={prop.name} />
                            {open ? <ExpandLess /> : <ExpandMore />}
                          </ListItemButton>
                          <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              {prop.subMenus.map((subMenu, index) => (
                                <NavLink
                                  key={index}
                                  className=""
                                  to={subMenu.layout + subMenu.path}
                                >
                                  <ListItemButton>
                                    <ListItemIcon
                                      sx={{ pl: 5 }}
                                      style={{ marginRight: "12px" }}
                                    >
                                      <Icon
                                        style={{
                                          color: "white",
                                        }}
                                        className={subMenu.icon}
                                      />
                                    </ListItemIcon>
                                    <ListItemText primary={subMenu.name} />
                                  </ListItemButton>
                                </NavLink>
                              ))}
                            </List>
                          </Collapse>
                        </>
                      ) : (
                        <NavLink
                          key={key}
                          className=""
                          to={prop.layout + prop.path}
                        >
                          <ListItemButton key={key}>
                            <ListItemIcon>
                              <Icon
                                style={{
                                  color: "white",
                                }}
                                baseClassName="fas"
                                className={prop.icon}
                              />
                            </ListItemIcon>
                            <ListItemText primary={prop.name} />
                          </ListItemButton>
                        </NavLink>
                      )}
                    </>
                  );
              })}
          </List>
          {/* {routes
            .filter(({ layout }) => layout.split("/")[1] === user.role)
            .map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li
                    className={
                      prop.upgrade
                        ? "active active-pro"
                        : activeRoute(prop.layout + prop.path)
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              return null;
            })} */}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
