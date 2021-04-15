import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton
} from "react-share"

const Sharing = (props) => {
  const { url, title, img } = props

  return (
    <ul className="share-buttons">
      <li>
        <TwitterShareButton url={url} title={title}>
          <StaticImage src="../images/icons/icon-circle-twitter.svg" />
        </TwitterShareButton>
      </li>
      <li>
        <FacebookShareButton url={url} title={title}>
          <StaticImage src="../images/icons/icon-circle-facebook.svg" />
        </FacebookShareButton>
      </li>
      <li>
        <LinkedinShareButton url={url} title={title}>
          <StaticImage src="../images/icons/icon-circle-linkedin.svg" />
        </LinkedinShareButton>
      </li>
    </ul>
  )
}

export default Sharing
