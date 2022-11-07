import React from "react"
import { TextArea } from "./components/TextArea"

export default function App() {
    const [value, setValue] = React.useState("")

    return (
        <div className='app'>
            <h4>Textarea Component</h4>
            <TextArea
                onChange={(e) => setValue(e.target.value)}
                placeholder='Enter value...'
            />
            <br></br>
            Value: {value}
        </div>
    )
}
