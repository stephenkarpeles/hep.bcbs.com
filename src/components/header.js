import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/hoa-primary-logo.svg"
import Navigation from "../components/Navigation"

import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"
import AlgoliaSiteSearch from "../components/AlgoliaSiteSearch"

const searchClient = algoliasearch(
  "B604WWKJH0",
  "156ba268a0517559cd6a89921ae9cb5f"
)

const Header = ({ siteTitle }) => (
  <>
    <header id="top">
      <div className="max-container">
        <div className="logo">
          <Link to="/">
            <img
              style={{ maxWidth: 160, marginBottom: 0 }}
              src={logo}
              alt={siteTitle}
            />
          </Link>
        </div>

        <AlgoliaSiteSearch />

        <div className="translator">
          <select name="translator">
            <option value="">Change Language</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
        </div>
      </div>
    </header>

    <Navigation />
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
