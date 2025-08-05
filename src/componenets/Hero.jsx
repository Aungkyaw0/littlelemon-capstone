import HeroImg from "../assets/images/restauranfood.jpg"

function Hero() {
  return (
    <section className="hero-section">
        <div className="hero-left">
            <h1 style={{color: "#F4CE14"}}> Little Lemon</h1>
            <h2> Chicago </h2>
            <div className="description">
                <p> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <button>
                Reserve a Table
            </button>
        </div>
        <div className="hero-right">
            <img src={HeroImg} alt="" className="hero-img" />
        </div>
    </section>
  )
}

export default Hero