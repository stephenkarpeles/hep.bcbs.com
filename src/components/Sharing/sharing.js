import React from "react"
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share"

import twitterCircleIcon from "../../images/icons/icon-circle-twitter.svg"
import twitterCircleHover from "../../images/icons/icon-circle-twitter-hover.svg"
import facebookCircleIcon from "../../images/icons/icon-circle-facebook.svg"
import facebookCircleHover from "../../images/icons/icon-circle-facebook-hover.svg"
import linkedinCircleIcon from "../../images/icons/icon-circle-linkedin.svg"
import linkedinCircleHover from "../../images/icons/icon-circle-linkedin-hover.svg"

const Sharing = props => {
  const { url, title, img } = props

  return (
    <ul className="share-buttons">
      <li>
        <TwitterShareButton url={url} title={title}>
          <img
            style={{ width: 44, height: 44 }}
            src={twitterCircleIcon}
            alt=""
            onMouseOver={e => (e.currentTarget.src = twitterCircleHover)}
            onMouseOut={e => (e.currentTarget.src = twitterCircleIcon)}
          />
        </TwitterShareButton>
      </li>
      <li>
        <FacebookShareButton url={url} title={title}>
          <img
            style={{ width: 44, height: 44 }}
            src={facebookCircleIcon}
            alt=""
            onMouseOver={e => (e.currentTarget.src = facebookCircleHover)}
            onMouseOut={e => (e.currentTarget.src = facebookCircleIcon)}
          />
        </FacebookShareButton>
      </li>
      <li>
        <LinkedinShareButton url={url} title={title}>
          <img
            style={{ width: 44, height: 44 }}
            src={linkedinCircleIcon}
            alt=""
            onMouseOver={e => (e.currentTarget.src = linkedinCircleHover)}
            onMouseOut={e => (e.currentTarget.src = linkedinCircleIcon)}
          />
        </LinkedinShareButton>
      </li>
    </ul>
  )
}

export default Sharing
