import React from 'react'
import { Link } from 'react-router-dom'

const Section1 = () => {
  return (
    <>
    <div>
  <h1 id="movie-type">Hollywood Movies</h1>
  <div className="container">
    <div className="content">
      <img src="images/fast and furious.jpg" alt="Image 1" />
      <p>Fast and Furious</p>
      <div>
        <h4>Fast and Furious</h4>
        <br />
        <button className="flex-item-btn">
          {" "}
          <i className="fa-regular fa-heart" />{" "}
        </button>
        <button className="flex-item-btn">
          {" "}
          <i className="fa-regular fa-comment" />
        </button>
      <Link to='/section1/1'><button className="clicknow2">click now</button></Link>
        
      </div>
    </div>
    <div className="content">
      <img src="/images/Harry-Potter-Movies-in-Order.avif" alt="Image 2" />
      <p>Content for image 2</p>
      <div>
        <h4>Harry Potter</h4>
        <br />
        <button className="flex-item-btn">
          {" "}
          <i className="fa-regular fa-heart" />{" "}
        </button>
        <button className="flex-item-btn">
          {" "}
          <i className="fa-regular fa-comment" />
        </button>
        <Link to='/section1/2'><button className="clicknow2">click now</button></Link>
      </div>
    </div>
    <div className="content">
      <img src="images/Independence day.jpg" alt="Image 3" />
      <p>Content for image 3</p>
      <div>
        <h4>Independence Day</h4>
        <br />
        <button className="flex-item-btn">
          {" "}
          <i className="fa-regular fa-heart" />{" "}
        </button>
        <button className="flex-item-btn">
          {" "}
          <i className="fa-regular fa-comment" />
        </button>
        <Link to='/section1/3'><button className="clicknow2">click now</button></Link>
      </div>
    </div>
    <div className="content">
      <img src="images/Jurassic Park.jpeg" alt="Image 4" />
      <p>Content for image 4</p>
      <div>
        <h4>Jurassic Park</h4>
        <br />
        <button className="flex-item-btn">
          {" "}
          <i className="fa-regular fa-heart" />{" "}
        </button>
        <button className="flex-item-btn">
          {" "}
          <i className="fa-regular fa-comment" />
        </button>
        {/* <a href="https://www.youtube.com/watch?v=_jKEqDKpJLw">
          {" "}
          <button className="clicknow2">click now</button>{" "}
        </a> */}
        <Link to='/section1/4'><button className="clicknow2">click now</button></Link>
      </div>
    </div>
    <div className="content">
      <img src="images/mission impossible.jpg" alt="Image 5" />
      <p>Content for image 5</p>
      <div>
        <h4>Mission Impossible</h4>
        <br />
        <button className="flex-item-btn">
          {" "}
          <i className="fa-regular fa-heart" />{" "}
        </button>
        <button className="flex-item-btn">
          {" "}
          <i className="fa-regular fa-comment" />
        </button>
        {/* <a href="https://www.youtube.com/watch?v=avz06PDqDbM">
          <button className="clicknow2">click now</button>{" "}
        </a> */}
        <Link to='/section1/1'><button className="clicknow2">click now</button></Link>
      </div>
    </div>
    <div className="content">
      <img src="images/Shaolin soccer.jpg" alt="Image 6" />
      <p>Content for image 6</p>
      <div>
        <h4>Shaolin soccer</h4>
        <br />
        <button className="flex-item-btn">
          {" "}
          <i className="fa-regular fa-heart" />{" "}
        </button>
        <button className="flex-item-btn">
          {" "}
          <i className="fa-regular fa-comment" />
        </button>
        {/* <a href="https://www.youtube.com/watch?v=KEWUDWYDdYs">
          <button className="clicknow2">click now</button>{" "}
        </a> */}
        <Link to='/section1/1'><button className="clicknow2">click now</button></Link>
      </div>
    </div>
    <div className="content">
      <img src="images/spider man.jpeg" alt="Image 7" />
      <p>Content for image 7</p>
      <div>
        <h4>Spider Man</h4>
        <br />
        <button className="flex-item-btn">
          {" "}
          <i className="fa-regular fa-heart" />{" "}
        </button>
        <button className="flex-item-btn">
          {" "}
          <i className="fa-regular fa-comment" />
        </button>
        {/* <a href="https://www.youtube.com/watch?v=t06RUxPbp_c">
          <button className="clicknow2">click now</button>{" "}
        </a> */}
        <Link to='/section1/4'><button className="clicknow2">click now</button></Link>
      </div>
    </div>
    <div className="content">
      <img src="images/The Pianist.jpg" alt="Image 4" />
      <p>Content for image 4</p>
      <div>
        <h4>The Pianist</h4>
        <br />
        <button className="flex-item-btn">
          {" "}
          <i className="fa-regular fa-heart" />{" "}
        </button>
        <button className="flex-item-btn">
          {" "}
          <i className="fa-regular fa-comment" />
        </button>
        {/* <a href="https://www.youtube.com/watch?v=BFwGqLa_oAo">
          <button className="clicknow2">click now</button>{" "}
        </a> */}
        <Link to='/section1/5'><button className="clicknow2">click now</button></Link>
      </div>
    </div>
    <div className="content">
      <img src="images/maanadu.webp" alt="Image 8" />
      <p>Content for image 8</p>
      <div>
        <h4>Maanadu</h4>
        <br />
        <button className="flex-item-btn">
          {" "}
          <i className="fa-regular fa-heart" />{" "}
        </button>
        <button className="flex-item-btn">
          {" "}
          <i className="fa-regular fa-comment" />
        </button>
        {/* <a href="https://www.youtube.com/watch?v=3FuuZU21S80" />
        <button className="clicknow1">click now</button> */}
        <Link to='/section1/6'><button className="clicknow2">click now</button></Link>
      </div>
    </div>
    <div className="content">
      <img src="images/Independence day.jpg" alt="Image 7" />
      <p>Content for image 7</p>
      <div>
        <h4>Independence Day</h4>
        <br />
        <button className="flex-item-btn">
          {" "}
          <i className="fa-regular fa-heart" />{" "}
        </button>
        <button className="flex-item-btn">
          {" "}
          <i className="fa-regular fa-comment" />
        </button>
        <a href="https://www.youtube.com/watch?v=B1E7h3SeMDk">
          {" "}
          <button className="clicknow2">click now</button>{" "}
        </a>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Section1