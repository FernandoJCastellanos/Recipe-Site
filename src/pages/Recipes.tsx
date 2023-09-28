import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";


import fimg1 from "../content/gallery-preview/img_1.jpg"
import fimg2 from "../content/gallery-preview/img_2.jpg"
import fimg3 from "../content/gallery-preview/img_3.jpg"
import fimg4 from "../content/gallery-preview/img_4.jpg"
import fimg5 from "../content/gallery-preview/img_5.jpg"
import fimg6 from "../content/gallery-preview/img_6.jpg"
import fimg7 from "../content/gallery-preview/img_7.jpg"
import fimg8 from "../content/gallery-preview/img_8.jpg"
import fimg9 from "../content/gallery-preview/img_9.jpg"
import fimg10 from "../content/gallery-preview/img_10.jpg"


import img1 from "../content/top-chiefs-prev/img_1.jpg"
import img2 from "../content/top-chiefs-prev/img_2.jpg"
import img3 from "../content/top-chiefs-prev/img_3.jpg"
import img4 from "../content/top-chiefs-prev/img_4.jpg"
import img5 from "../content/top-chiefs-prev/img_5.jpg"
import img6 from "../content/top-chiefs-prev/img_6.jpg"

export default function Recipes() {


    const images = [
        fimg1,
        fimg2,
        fimg3,
        fimg4,
        fimg5,
        fimg6,
        fimg7,
        fimg8,
        fimg9
    ]




    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: fimg1,
            authorImg:img1
        },
        {
            title: "Spaghetti and Meatballls",
            image: fimg4,
            authorImg:img2
        },
        {
            title: "American Cheese Burger",
            image: fimg5,
            authorImg:img3
        },
        {
            title: "Mutton Biryani",
            image: fimg6,
            authorImg:img5
        },
        {
            title: "Japanese Sushi",
            image: fimg10,
            authorImg:img6
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