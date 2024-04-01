import React from 'react'

const Navbar = () => {

  const loginIcon = "url(https://www.svgrepo.com/show/169884/login.svg)";
  return (
    <div className='navbar'>
      <div className="navbarDisplay">
        <a href="/" className="homeLogo">Weather App</a>
        <div className="tabLinks">
          <a href="/favorites" className="favoritesTab">Favorites</a>
          <a className='loginTab'></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar