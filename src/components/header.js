import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/hoa-primary-logo.svg"
import Navigation from "../components/Navigation"
import Translator from "../components/Translator"
import { useMediaQuery } from "react-responsive"
import algoliasearch from "algoliasearch/lite"
import AlgoliaSiteSearch from "../components/AlgoliaSiteSearch"

const searchClient = algoliasearch(
  "B604WWKJH0",
  "156ba268a0517559cd6a89921ae9cb5f"
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

  return (
    <>
      <header id="top" className={click ? "navigation-mobile" : "navigation"}>
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

          <Desktop>
            <AlgoliaSiteSearch />
            {/* <Translator /> */}
          </Desktop>

          <MobileTablet>
            <div className="mobile-toggle" onClick={handleClick}>
              {click ? <button>Close</button> : <button>Open</button>}
            </div>
          </MobileTablet>
        </div>
      </header>
      <Desktop>
        <Navigation />
      </Desktop>
      <MobileTablet>
        <AlgoliaSiteSearch />
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
