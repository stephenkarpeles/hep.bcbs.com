import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, Configure, VoiceSearch } from "react-instantsearch-dom"
import Autocomplete from "../components/AlgoliaAutoComplete"

const searchClient = algoliasearch(
  "B604WWKJH0",
  "d5f4c69eedaa62952d698d108856f2a0"
)

const AlgoliaSiteSearch = () => {
  return (
    <InstantSearch indexName="he_plan_profiles" searchClient={searchClient}>
      <InstantSearch searchClient={searchClient} indexName="he_plan_profiles">
        <Configure hitsPerPage={5} clickAnalytics />
        <Autocomplete />
        {/* <VoiceSearch
          translations={{
            buttonTitle: "Voice Search",
            disabledButtonTitle: "Voice Search Disabled",
          }}
        /> */}
      </InstantSearch>
    </InstantSearch>
  )
}

export default AlgoliaSiteSearch
