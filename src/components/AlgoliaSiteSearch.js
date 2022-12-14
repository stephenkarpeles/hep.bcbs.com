import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, Configure } from "react-instantsearch-dom"
import Autocomplete from "../components/AlgoliaAutoComplete"

const searchClient = algoliasearch(
  "B604WWKJH0",
  "d5f4c69eedaa62952d698d108856f2a0"
)

const AlgoliaSiteSearch = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="he_plan_profiles">
      <Configure hitsPerPage={5} clickAnalytics />
      <Autocomplete />
    </InstantSearch>
  )
}

export default AlgoliaSiteSearch
