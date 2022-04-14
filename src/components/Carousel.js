import React from 'react'

function Carousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="logo192.png" className="d-block w-50" alt="..." / >
      </div>
      <div className="carousel-item">
        <img src=".logo512.png" className="d-block w-50" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="logo192.png" className="d-block w-50" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousel