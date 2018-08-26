import React from 'react';
import PropTypes from 'prop-types';
import './Navigation.scss';

export default class Navigation extends React.PureComponent {
    render() {
        const links = this.props.links;
      const renderNavigationLinks = () => (
        links.map((link) => {
          if (typeof link.childrens === 'undefined') {
            return  <li key={link.name} className="nav-item">
              <a className="nav-link" href={link.url}>{link.name}</a>
            </li>
          } else {
            return  <li key={link.name} className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href={link.url}
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {link.name}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {
                  link.childrens.map((childrenLink) => <a key={childrenLink.name} className="dropdown-item" href={childrenLink.url}>{childrenLink.name}</a>)
                }
              </div>
            </li>
          }
        })
      );

        return (
            <div className="navigation">
              <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                <div className="container">
                  <a className="navbar-brand" href="#">LOGO</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse"
                          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav d-md-flex flex-row ml-md-auto">
                      {
                          renderNavigationLinks()
                      }
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
        )
    };
}

Navigation.propTypes = {
    links: PropTypes.array,
};
