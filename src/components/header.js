import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/hoa-primary-logo.svg"
import Navigation from "../components/Navigation"
import { useTranslation } from "react-i18next"

import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"
import AlgoliaSiteSearch from "../components/AlgoliaSiteSearch"

const searchClient = algoliasearch(
  "B604WWKJH0",
  "156ba268a0517559cd6a89921ae9cb5f"
)

const Header = ({ props, siteTitle }) => {
  const { t, i18n } = useTranslation()
  
  const [values, setValues] = useState({
    value: ''
  });

  function handleChange(event) {
    i18n.changeLanguage(event.target.value)

    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return(
    <>
      <header id="top">
        <div className="max-container">
          <div className="logo">
            <Link to="/">{siteTitle}</Link>
          </div>

          <AlgoliaSiteSearch />

          <select 
            name="translator" 
            className="translator"
            value={values.language}
            onChange={(e) => handleChange(e)}
          >
            <option value="">Change Language</option>
            <option value={'en'}>English</option>
            <option value={'zh-Hant'}>Taiwan</option>
          </select>
        </div>
      </header>

      <Navigation />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
