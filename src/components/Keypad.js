import React from "react";

function Keypad (){
   
    function handleChange() {
        console.log('Entering password...')
    }
    return (
        <div>
            <form>
            <input type="password" placeholder="Type in Password" onChange={handleChange} />
            <button>Submit</button>
            </form>
        </div>
    )
}

export default Keypad;