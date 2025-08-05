import RecipeCard from "./RecipeCard";

function WeeklySpecial() {
  const weeklyRecipe = [
  {
    name: "Greek salad",
    price: "12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image_url: "../src/assets/images/greek salad.jpg",
  },
  {
    name: "Bruschetta",
    price: "5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image_url: "../src/assets/images/bruschetta.jpg",
  },
  {
    name: "Lemon Dessert",
    price: "5.00",
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image_url: "../src/assets/images/lemon dessert.jpg",
  },
  {
    name: "Pasta Salad",
    price: "10.99",
    description: "A fresh and vibrant pasta salad with cherry tomatoes, cucumbers, bell peppers, and a light lemon-herb vinaigrette.",
    image_url: "../src/assets/images/pasta salad.jpg",
  },
];
  return (
    <section className="weekly-special">
      <div className="weekly-header">
        <h1> This weeks specials </h1>
        <button> Online Menu </button>
      </div>

      <div className="recipes">
        {
            weeklyRecipe.map((recipe, index) => {
                return ( <RecipeCard key={index} recipe={recipe} />)
            })
        }

      </div>
    </section>
  );
}

export default WeeklySpecial;
