import React from 'react'

function Layout() {
  return (
    <div>
<div className="mb-3">
  <label for="formGroupExampleInput" className="form-label">Enter Your First Name</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="First Name" />
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Enter Your Last Name</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Last Name" / >
</div>

    </div>
  )
}

export default Layout