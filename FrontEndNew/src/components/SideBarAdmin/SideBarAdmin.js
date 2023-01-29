import React from "react";

function SideBarAdmin() {
  return (
    <div
      className="sidebar"
      data-color="orange"
      data-image="https://demos.creative-tim.com/light-bootstrap-dashboard-pro/assets/img/sidebar-5.jpg"
    >
      <div className="sidebar-wrapper">
        <div className="logo">
          <a
            href="https://www.creative-tim.com/"
            className="simple-text logo-mini"
          >
            Ct
          </a>
          <a
            href="https://www.creative-tim.com/"
            className="simple-text logo-normal"
          >
            Creative Tim
          </a>
        </div>
        <div className="user">
          <div className="photo">
            <img src="https://demos.creative-tim.com/light-bootstrap-dashboard-pro/assets/img/default-avatar.png" />
          </div>
          <div className="info">
            <a
              data-toggle="collapse"
              href="#collapseExample"
              className="collapsed"
            >
              <span>
                Tania Andrew
                <b className="caret"></b>
              </span>
            </a>
            <div className="collapse" id="collapseExample">
              <ul className="nav">
                <li>
                  <a className="profile-dropdown" href="#pablo">
                    <span className="sidebar-mini">MP</span>
                    <span className="sidebar-normal">My Profile</span>
                  </a>
                </li>
                <li>
                  <a className="profile-dropdown" href="#pablo">
                    <span className="sidebar-mini">EP</span>
                    <span className="sidebar-normal">Edit Profile</span>
                  </a>
                </li>
                <li>
                  <a className="profile-dropdown" href="#pablo">
                    <span className="sidebar-mini">S</span>
                    <span className="sidebar-normal">Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="dashboard-2.html">
              <i className="nc-icon nc-chart-pie-35"></i>
              <p>Dashboard</p>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#componentsExamples"
            >
              <i className="nc-icon nc-app"></i>
              <p>
                Components
                <b className="caret"></b>
              </p>
            </a>
            <div className="collapse" id="componentsExamples">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="components/buttons.html">
                    <span className="sidebar-mini">B</span>
                    <span className="sidebar-normal">Buttons</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="components/grid.html">
                    <span className="sidebar-mini">GS</span>
                    <span className="sidebar-normal">Grid System</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="components/panels.html">
                    <span className="sidebar-mini">P</span>
                    <span className="sidebar-normal">Panels</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="components/sweet-alert.html">
                    <span className="sidebar-mini">SA</span>
                    <span className="sidebar-normal">Sweet Alert</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="components/notifications.html">
                    <span className="sidebar-mini">N</span>
                    <span className="sidebar-normal">Notifications</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="components/icons.html">
                    <span className="sidebar-mini">I</span>
                    <span className="sidebar-normal">Icons</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="components/typography.html">
                    <span className="sidebar-mini">T</span>
                    <span className="sidebar-normal">Typography</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#formsExamples"
            >
              <i className="nc-icon nc-notes"></i>
              <p>
                Forms
                <b className="caret"></b>
              </p>
            </a>
            <div className="collapse" id="formsExamples">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="forms/regular.html">
                    <span className="sidebar-mini">Rf</span>
                    <span className="sidebar-normal">Regular Forms</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="forms/extended.html">
                    <span className="sidebar-mini">Ef</span>
                    <span className="sidebar-normal">Extended Forms</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="forms/validation.html">
                    <span className="sidebar-mini">Vf</span>
                    <span className="sidebar-normal">Validation Forms</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="forms/wizard.html">
                    <span className="sidebar-mini">W</span>
                    <span className="sidebar-normal">Wizard</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#tablesExamples"
            >
              <i className="nc-icon nc-paper-2"></i>
              <p>
                Tables
                <b className="caret"></b>
              </p>
            </a>
            <div className="collapse" id="tablesExamples">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="tables/regular.html">
                    <span className="sidebar-mini">RT</span>
                    <span className="sidebar-normal">Regular Tables</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="tables/extended.html">
                    <span className="sidebar-mini">ET</span>
                    <span className="sidebar-normal">Extended Tables</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="tables/bootstrap-table.html">
                    <span className="sidebar-mini">BT</span>
                    <span className="sidebar-normal">Bootstrap Table</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="tables/datatables.net.html">
                    <span className="sidebar-mini">DT</span>
                    <span className="sidebar-normal">DataTables.net</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#mapsExamples">
              <i className="nc-icon nc-pin-3"></i>
              <p>
                Maps
                <b className="caret"></b>
              </p>
            </a>
            <div className="collapse" id="mapsExamples">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="maps/google.html">
                    <span className="sidebar-mini">GM</span>
                    <span className="sidebar-normal">Google Maps</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="maps/vector.html">
                    <span className="sidebar-mini">VM</span>
                    <span className="sidebar-normal">Vector maps</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="maps/fullscreen.html">
                    <span className="sidebar-mini">FSM</span>
                    <span className="sidebar-normal">Full Screen Map</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="charts.html">
              <i className="nc-icon nc-chart-bar-32"></i>
              <p>Charts</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="calendar.html">
              <i className="nc-icon nc-single-copy-04"></i>
              <p>Calendar</p>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#pagesExamples"
            >
              <i className="nc-icon nc-puzzle-10"></i>
              <p>
                Pages
                <b className="caret"></b>
              </p>
            </a>
            <div className="collapse" id="pagesExamples">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="pages/login.html">
                    <span className="sidebar-mini">LP</span>
                    <span className="sidebar-normal">Login Page</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/register.html">
                    <span className="sidebar-mini">RP</span>
                    <span className="sidebar-normal">Register Page</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/lock.html">
                    <span className="sidebar-mini">LSP</span>
                    <span className="sidebar-normal">Lock Screen Page</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/user.html">
                    <span className="sidebar-mini">UP</span>
                    <span className="sidebar-normal">User Page</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#lbd">
                    <span className="sidebar-mini">MCS</span>
                    <span className="sidebar-normal">More coming soon...</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBarAdmin;
