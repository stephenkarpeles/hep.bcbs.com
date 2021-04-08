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
    this.props.refine()
  }

  getSuggestionValue(hit) {
    return hit.title
  }

  // testing here getting multiple elements to render with highlights
  // TODO: needs image rendering
  renderSuggestion(hit) {
    return (
      <>
        <div class="site-search-result">
          <div class="site-search-result-image">
            <img src={hit.img_url} />
          </div>
          <div class="site-search-result-content">
            <div class="site-search-result-content-header">
              <Highlight attribute="title" hit={hit} tagName="span" />
            </div>
            <div class="site-search-result-content-excerpt">
              <Highlight attribute="excerpt" hit={hit} tagName="span" />
            </div>
          </div>
        </div>
      </>
    )
  }

  // TODO: needs close on esc, navigate on enter
  onSuggestionSelected = (event, { suggestion, method }) => {
    if (method === "enter" || method === "click") {
      navigate()
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

export default connectAutoComplete(Autocomplete)
