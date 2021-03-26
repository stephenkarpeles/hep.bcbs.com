import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"
import AlgoliaSiteSearch from "../components/AlgoliaSiteSearch"

const searchClient = algoliasearch(
  "B604WWKJH0",
  "156ba268a0517559cd6a89921ae9cb5f"
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div className="logo">
        <Link to="/">{siteTitle}</Link>
      </div>

      <AlgoliaSiteSearch />

      <select name="tarnslator" className="translator">
        <option value="">Change Language</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
