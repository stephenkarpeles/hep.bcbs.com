import * as React from "react"
import { connectAutoComplete } from 'react-instantsearch-dom';

const Autocomplete = ({ hits }) => (
  <div>
    {hits.map(hit => (
      <li key={hit.objectID}>{hit.name}</li>
    ))}
  </div>
);

const CustomAutocomplete = connectAutoComplete(Autocomplete);
export default CustomAutocomplete