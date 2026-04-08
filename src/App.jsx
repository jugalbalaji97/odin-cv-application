import { useState } from 'react'
import Section from './components/Section.jsx'
import "./styles/App.css"

function App() {

  const generalInformationFields = [
    {
      "id": 0,
      "label": "Name:",
      "type": "text",
    },
    {
      "id": 2,
      "label": "Email:",
      "type": "email",
    },
    {
      "id": 3,
      "label": "Phone Number:",
      "type": "tel",
    },
  ]

  const educationDetailsFields = [
    {
      "id": 1,
      "label": "School name:",
      "type": "text",
    },
    {
      "id": 2,
      "label": "Title of Study",
      "type": "text",
    },
    {
      "id": 3,
      "label": "Graduation Date",
      "type": "date"
    },
  ]

  const workExperienceFields = [
    {
      "id": 1,
      "label": "Company name:",
      "type": "text",
    },
    {
      "id": 2,
      "label": "Position title:",
      "type": "text",
    },
    {
      "id": 3,
      "label": "Main Responsibilities:",
      "type": "textarea"
    },
    {
      "id": 4,
      "label": "Date from:",
      "type": "date"
    },
    {
      "id": 5,
      "label": "Date until:",
      "type": "date"
    },
  ]

  return (
    <>
      <h1>CV Builder</h1>
      <Section heading="General Information" fields={generalInformationFields}/>
      <Section heading="Work Experience" fields={workExperienceFields}/>
      <Section heading="Educational Details" fields={educationDetailsFields}/>
    </>
  )
}

export default App
