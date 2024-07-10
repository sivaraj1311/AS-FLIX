import React from 'react'

const HeaderSearch = () => {
  return (
    <>
    <header className="headerhome">
  
    <div>
      <h2 className="h3headinghome">AS Flix</h2>
    </div>
    <div className="home-texthome">Search Movies</div>

  <div className="search-bar">
    <div className="search-bar1">
      <input type="text" placeholder="Search movies" />
    </div>
    <div className="search-bar1">
      <button>
        <img src="Images/search.svg" width="10px" height="10px" alt="" />
      </button>
    </div>
  </div>
</header>

    </>
  )
}

export default HeaderSearch