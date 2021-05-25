import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Navigation from "../components/Navigation"
import Translator from "../components/Translator"
import { useMediaQuery } from "react-responsive"
import algoliasearch from "algoliasearch/lite"
import AlgoliaSiteSearch from "../components/AlgoliaSiteSearch"

import logo from "../images/hoa-primary-logo.svg"
import burger from "../images/icons/icon-menu.svg"
import close from "../images/icons/icon-close.svg"

const searchClient = algoliasearch(
  "B604WWKJH0",
  "d5f4c69eedaa62952d698d108856f2a0"
)

// match breakpoints to the breakpoints.css file
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 961 })
  return isDesktop ? children : null
}
const MobileTablet = ({ children }) => {
  const isMobileTablet = useMediaQuery({ maxWidth: 960 })
  return isMobileTablet ? children : null
}

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 761, maxWidth: 960 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 760 })
  return isMobile ? children : null
}

const Header = ({ props, siteTitle }) => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const menuOpenClass = "mobile-menu-is-open"

  function addMenuOpenClass() {
    document.body.classList.add(menuOpenClass)
  }

  function removeMenuOpenClass() {
    document.body.classList.remove(menuOpenClass)
  }

  function showMobileNav() {
    document.querySelector("header").classList.add("navigation-mobile")
    document.querySelector("header").classList.remove("navigation")
  }

  function hideMobileNav() {
    document.querySelector("header").classList.remove("navigation-mobile")
    document.querySelector("header").classList.add("navigation")
  }

  return (
    <>
      <header id="top" className={click ? "navigation-mobile" : "navigation"}>
        <div className="max-container">
          <div className="logo">
            <Link to="https://www.bcbs.com/the-health-of-america/">
              <img
                style={{ maxWidth: 160, marginBottom: 0 }}
                src={logo}
                alt={siteTitle}
              />
            </Link>
          </div>

          <Desktop>
            <AlgoliaSiteSearch />
            {/* <Translator /> */}
          </Desktop>

          <MobileTablet>
            <div className="mobile-toggle">
              <button
                onClick={() => {
                  removeMenuOpenClass()
                  hideMobileNav()
                }}
                onKeyDown={removeMenuOpenClass}
              >
                <img src={close} />
              </button>
              <button
                onClick={() => {
                  addMenuOpenClass()
                  showMobileNav()
                }}
                onKeyDown={addMenuOpenClass}
              >
                <img src={burger} />
              </button>
            </div>
          </MobileTablet>
        </div>
      </header>
      <Desktop>
        <Navigation />
      </Desktop>
      <MobileTablet>
        <Link className="he-landing mobile" to="/">
          Health Equity
        </Link>
        <div className="mobile-search">
          <AlgoliaSiteSearch />
        </div>
        <div className="mobile-navigation">
          <Navigation />
          {/* <Translator /> */}
        </div>
      </MobileTablet>
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
