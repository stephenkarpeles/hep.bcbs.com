import React, { Component } from "react"
import { Highlight, connectAutoComplete } from "react-instantsearch-dom"
import AutoSuggest from "react-autosuggest"

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
    return hit.name
  }

  // testing here getting multiple elements to render with highlights
  // TODO: needs image rendering
  renderSuggestion(hit) {
    return (
      <>
        <div class="result">
          <div class="result-image">
            <Highlight attribute="name" hit={hit} tagName="span" />
          </div>
          <div class="result-content">
            <Highlight attribute="company" hit={hit} tagName="span" />
            <Highlight attribute="city" hit={hit} tagName="span" />
          </div>
        </div>
      </>
    )
  }

  // onSuggestionSelected = (event, { suggestion, method }) => {
  //   if (method === "enter" || method === "click") {
  //     navigate(`${typeSlug}${suggestion.slug}`)
  //   }

  //   this.setState({
  //     value: "",
  //   })
  // }

  render() {
    const { hits } = this.props
    const { value } = this.state

    const inputProps = {
      placeholder: "Search plan profiles or topics",
      onChange: this.onChange,
      value,
    }

    return (
      <AutoSuggest
        suggestions={hits}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        // onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    )
  }
}

export default connectAutoComplete(Autocomplete)
