import { useState } from "react"
import "../styles/SectionField.css"

export default function SectionField ({label, type, mode}) {
    const [value, setValue] = useState("");

    const inputField = (type == "textarea")
        ?<textarea value={value} onChange={(e)=>setValue(e.target.value)} />
        :<input value={value} type={type} onChange={(e)=>setValue(e.target.value)} />

    const output = (type == "textarea")
        ?value.split("\n").map(line => <><br />{line}</>)
        :<>{value}</>;

    if (mode == "edit") {
        return (
            <>  
                <label>{label} </label>
                {inputField}
            </>
        );
    }
    else {
        return (
            <>
                <p>{label}</p> <p>{output}</p>
            </>
        );
    }
}