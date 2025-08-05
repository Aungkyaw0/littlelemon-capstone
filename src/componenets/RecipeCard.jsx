import RI from "../assets/images/greek salad.jpg"

function RecipeCard({recipe}) {
  return (
    <div className="recipe-card">
      <div className="recipe-img-container">
        <img src={recipe.image_url} alt={recipe.name} className="recipe-img" />
      </div>
      <div className="recipe-data">
        <div className="name-price">
          <h1> {recipe.name} </h1>
          <p> {recipe.price} </p>
        </div>
        <div className="description">
          <p>
            {recipe.description}
          </p>
        </div>
        <button className="order-btn"> Order Now </button>
      </div>
    </div>
  );
}

export default RecipeCard;
