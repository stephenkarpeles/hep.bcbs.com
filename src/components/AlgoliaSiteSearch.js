import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, Configure, VoiceSearch } from "react-instantsearch-dom"
import Autocomplete from "../components/AlgoliaAutoComplete"

const searchClient = algoliasearch(
  "B604WWKJH0",
  "156ba268a0517559cd6a89921ae9cb5f"
)

const AlgoliaSiteSearch = () => {
  return (
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
  )
}

export default AlgoliaSiteSearch
