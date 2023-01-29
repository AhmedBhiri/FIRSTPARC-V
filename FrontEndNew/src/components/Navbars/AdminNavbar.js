import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Nav, Dropdown, Button } from "react-bootstrap";

import routes from "../../routes";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/actions/uiActions";
import { Row, Container, Col } from "reactstrap";
import { modifyNotification } from "../../redux/actions/notificationsActions";

import { useHistory } from "react-router-dom";

import { logOut } from "../../redux/actions/authActions";

import styles from "./AdminNavbar.module.css";

function Header() {
  const location = useLocation();

  const dispatch = useDispatch();
  const { sideBarIsOpen } = useSelector((state) => state.ui);

  const notifications = useSelector((state) => state.notifications);

  const notificationsNotSeen = notifications.filter(
    ({ seen }) => seen === false
  );

  let history = useHistory();

  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    if (!sideBarIsOpen) {
      document.documentElement.classList.toggle("nav-open");
      var node = document.createElement("div");
      node.id = "bodyClick";
      node.onclick = function () {
        this.parentElement.removeChild(this);
        document.documentElement.classList.toggle("nav-open");
      };
      document.body.appendChild(node);
    }

    dispatch(toggleSidebar());
  };

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  const handleSeen = (id) => {
    dispatch(modifyNotification(id));

    history.push("/admin/notifications");
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
          </Navbar.Toggle>

          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            {getBrandText()}
          </Navbar.Brand>
        </div>

        <Button
          variant="dark"
          className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
          onClick={mobileSidebarToggle}
        >
          <i className="fas fa-ellipsis-v"></i>
        </Button>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" navbar>
            <Nav.Item>
              <Nav.Link
                data-toggle="dropdown"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className="m-0"
              >
               
              </Nav.Link>
            </Nav.Item>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                as={Nav.Link}
                data-toggle="dropdown"
                id="dropdown-67443507"
                variant="default"
                className="m-0"
              >
                <i
                  className="nc-icon nc-bell-55

"
                ></i>
                {notificationsNotSeen.length > 0 && (
                  <span className="notification">
                    {notificationsNotSeen.length}
                  </span>
                )}
                <span className="d-lg-none ml-1">Notification</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {notifications.map(({ date, id }, i) => (
                  <Dropdown.Item key={i} onClick={() => handleSeen(id)}>
                    <Container>
                      <Row>Notification {i + 1}</Row>
                      <Row>
                        <Col>Added at:</Col>
                        <Col>
                          <small>{date}</small>
                        </Col>
                      </Row>
                    </Container>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="nc-icon nc-zoom-split"></i>
                <span className="d-lg-block">Rechercher</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto" navbar>
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="no-icon">Compte</span>
              </Nav.Link>
            </Nav.Item>
           
            <Nav.Item
              className="d-flex justify-content-center align-items-center btn btn-light"
              onClick={handleLogOut}
            >
              Se deconnecter
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
