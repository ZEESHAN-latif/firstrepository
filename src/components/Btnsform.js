import React from 'react'
import { useState } from 'react'


export default function Btnsform() {

  const darkmod = () => {
    return (
      // document.write("Hello!")
      <div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">Enter Your First Name</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="First Name" />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">Enter Your Last Name</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Last Name" />
        </div>

      </div>


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
    <darkmod />

    </div>
  )
}
