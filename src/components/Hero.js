import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"

function Hero() {
  return (
    <div className="hero" style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={8 / 3}
        // This is a presentational image, so the alt should be an empty string
        alt=""
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src={"../images/health-equity-hero.png"}
        formats={["auto", "webp", "avif"]}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        {/* Any content here will be centered in the component */}
        <section className="intro" id="intro" style={{ width: "100%" }}>
          <Fade>
            <div className="inner-content">
              <h1 id="healthequity">Health Equity</h1>
              <div className="subtitle">
                Blue Cross and Blue Shield Companies Adress the Nation's Crisis
                in Racial Health Disparities
              </div>
              <Link className="button" to="/strategy">
                Read Our Strategy
              </Link>
            </div>
          </Fade>
        </section>
      </div>
    </div>
  )
}

export default Hero
