import React, { useState } from "react"
import { useTranslation } from "react-i18next"

function Translator() {
  const { t, i18n } = useTranslation()

  const [values, setValues] = useState({
    value: "",
  })

  function handleChange(event) {
    i18n.changeLanguage(event.target.value)

    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <select
      name="translator"
      className="translator"
      value={values.language}
      onChange={e => handleChange(e)}
    >
      <option value="">Change Language</option>
      <option value={"en"}>English</option>
      <option value={"zh-Hant"}>Taiwan</option>
    </select>
  )
}

export default Translator
