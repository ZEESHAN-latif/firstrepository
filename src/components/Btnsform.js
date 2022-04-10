import React from 'react'
import { useState } from 'react'
 

export default function Btnsform  () {
    const {color,setColor} = useState("light");

    const darkmod = () =>{
        return(
            document.write({color})
        
    
        )
    }
  return (
    <div>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark" onClick={darkmod}>Dark</button>


    </div>
  )
}
