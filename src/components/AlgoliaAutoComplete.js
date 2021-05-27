import React, { Component } from "react"
import { Highlight, connectAutoComplete } from "react-instantsearch-dom"
import AutoSuggest from "react-autosuggest"
import { navigate } from "gatsby"

// Algolia Autocomplete
// @see https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/autocomplete/react/
class Autocomplete extends Component {
  state = {
    value: this.props.currentRefinement,
  }

  onChange = (event, { newValue }) => {
    this.setState({ value: newValue })
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.props.refine(value)
  }

  onSuggestionsClearRequested = () => {
    // clears the searchbox when using escape key
    this.setState({
      hits: [],
    })
  }

  getSuggestionValue(hit) {
    return hit.headline
  }

  // testing here getting multiple elements to render with highlights
  // TODO: needs image rendering
  renderSuggestion(hit) {
    return (
      <>
        <div
          className="site-search-result"
          data-insights-object-id={hit.objectID}
          data-insights-position={hit.__position}
          data-insights-query-id={hit.__queryID}
        >
          {hit.img_url && (
            <div className="site-search-result-image">
              <img
                src={`https://www.bcbs.com/sites/default/files/healthequity/images/${hit.img_url}`}
                alt=""
              />
            </div>
          )}
          <div className="site-search-result-content">
            <div className="site-search-result-content-header">
              <Highlight attribute="headline" hit={hit} tagName="span" />
            </div>
            <div className="site-search-result-content-excerpt">
              <Highlight attribute="teaser" hit={hit} tagName="span" />
            </div>
          </div>
        </div>
      </>
    )
  }

  // TODO: needs close on esc, navigate on enter
  onSuggestionSelected = (event, { suggestion, method }) => {
    if (method === "enter" || method === "click") {
      navigate(`/${suggestion.slug}/`)
    }

    this.setState({
      value: "",
    })
  }

  render() {
    const { hits } = this.props
    const { value } = this.state

    const inputProps = {
      placeholder: "Search",
      onChange: this.onChange,
      value,
    }

    const objectIDs = hits.map(hit => hit.objectID).join(",")
    const userToken = getUserToken("_ALGOLIA") || "anonymous-user"

    if (typeof window !== undefined) {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        algoliaUserToken: userToken, // uniquely identifies the current visitor
        algoliaDisplayedObjectIDs: objectIDs,
      })
    }

    return (
      <AutoSuggest
        suggestions={hits}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    )
  }
}

// Grab Aloglia's cookie that determines who the user is.
const getUserToken = key => {
  if (typeof document !== undefined) {
    return document.cookie.split(`; `).reduce((total, currentCookie) => {
      const item = currentCookie.split(`=`)
      const storedKey = item[0]
      const storedValue = item[1]

      return key === storedKey ? decodeURIComponent(storedValue) : total
    }, ``)
  }
}

export default connectAutoComplete(Autocomplete)
