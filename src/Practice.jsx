import { useState } from "react"
function Practice(){

    return(
        <div>
        <Form>
            <input type="text"
           value={name}
           placeholder="enter your name"
           onChange={(e) => setName(e.target.value)}
            />
        </Form>
        </div>
    )
}
export default Practice;