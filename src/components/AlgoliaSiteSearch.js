import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, VoiceSearch } from "react-instantsearch-dom"
import CustomAutocomplete from "../components/AlgoliaAutoComplete"

const searchClient = algoliasearch(
  "B604WWKJH0",
  "156ba268a0517559cd6a89921ae9cb5f"
)

// const Hit = ({ hit }) => {
//   return <p>{hit.name}</p>
// }

const AlgoliaSiteSearch = () => {

    return (
    <InstantSearch indexName="test_index" searchClient={searchClient}>
      <InstantSearch searchClient={searchClient} indexName="test_index">
        <SearchBox />
        <VoiceSearch />
        <CustomAutocomplete />
      </InstantSearch>
    </InstantSearch>
  )
}

export default AlgoliaSiteSearch
