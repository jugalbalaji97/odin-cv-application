import { useState } from "react";
import SectionField from "./SectionField.jsx";
import "../styles/Section.css"

export default function Section({ heading, fields=[] }) {
    const [mode, setMode] = useState("edit");

    const handleSubmit = (e) => {
        e.preventDefault();
        setMode((mode=="edit")?"submit":"edit");
    }

    return (
        <div className="section">
            <h2>{heading}</h2>
            <form onSubmit={handleSubmit}>
            {fields.map((field) => {
                return <SectionField key={field.id} label={field.label} type={field.type} mode={mode}/>
            })}
            <button type='submit'>
                {(mode=="edit")?"Submit":"Edit"}
            </button>
            </form>
        </div>
    );
}