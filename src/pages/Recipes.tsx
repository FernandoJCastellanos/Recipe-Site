import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/content/gallery-preview/img_1.jpg",
            authorImg:"/content/top-chiefs-prev/img_1.jpg"
        },
        {
            title: "Spaghetti and Meatballls",
            image: "/content/gallery-preview/img_4.jpg",
            authorImg:"/content/top-chiefs-prev/img_2.jpg"
        },
        {
            title: "American Cheese Burger",
            image: "/content/gallery-preview/img_5.jpg",
            authorImg:"/content/top-chiefs-prev/img_3.jpg"
        },
        {
            title: "Mutton Biryani",
            image: "/content/gallery-preview/img_6.jpg",
            authorImg:"/content/top-chiefs-prev/img_5.jpg"
        },
        {
            title: "Japanese Sushi",
            image: "/content/gallery-preview/img_10.jpg",
            authorImg:"/content/top-chiefs-prev/img_6.jpg"
        },
    ].sort(()=> Math.random() - 0.5)
    return(
      

        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} index={index}/>
                ))}
                
            </div>
        </div>
    )
}