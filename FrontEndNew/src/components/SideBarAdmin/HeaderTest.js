import React, { useState } from "react";

function HeaderTest() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <div className="main-panel">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-minimize">
              <button
                id="minimizeSidebar"
                className="btn btn-warning btn-fill btn-round btn-icon d-none d-lg-block"
                onClick={handleToggle}
              >
                <i className="fa fa-ellipsis-v visible-on-sidebar-regular"></i>

                <i className="fa fa-navicon visible-on-sidebar-mini"></i>
              </button>

              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                aria-controls="navigation-index"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-bar burger-lines"></span>
                <span className="navbar-toggler-bar burger-lines"></span>
                <span className="navbar-toggler-bar burger-lines"></span>
              </button>
            </div>
          </div>

          <div className="collapse navbar-collapse justify-content-end">
            <ul className="nav navbar-nav mr-auto">
              <form
                className="navbar-form navbar-left navbar-search-form"
                role="search"
              >
                <div className="input-group">
                  <i className="nc-icon nc-zoom-split"></i>
                  <input
                    type="text"
                    value=""
                    className="form-control"
                    placeholder="Search..."
                  />
                </div>
              </form>
            </ul>
            <ul className="navbar-nav">
              
               
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderTest;
