
import ChiefCards from "./ChiefCards";

import img1 from "../content/top-chiefs-prev/img_1.jpg"
import img2 from "../content/top-chiefs-prev/img_2.jpg"
import img3 from "../content/top-chiefs-prev/img_3.jpg"
import img4 from "../content/top-chiefs-prev/img_4.jpg"
import img5 from "../content/top-chiefs-prev/img_5.jpg"
import img6 from "../content/top-chiefs-prev/img_6.jpg"



export default function ChiefSection() {

    const chiefs = [
        {
            name: "Juan Carlos",
            img: img1,
            recipesCount:"10",
            cuisine:"Mexican",
        },
        {
            name:"John Doe",
            img: img2,
            recipesCount: "05",
            cuisine: "Japanese",
        },
        {
            name:"Erich Maria",
            img: img3,
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name:"Chris Brown",
            img: img4,
            recipesCount: "08",
            cuisine: "American",
        },
        {
            name:"Blake Lively",
            img: img5,
            recipesCount: "09",
            cuisine: "French",
        },
        {
            name:"Ben Affleck",
            img: img6,
            recipesCount: "04",
            cuisine: "Indian",
        }
    ]

    return(

        <div className="section chiefsection">
            <h1 className="title">
                Our Top Chiefs
            </h1>
            <div className="top-chiefs-container">
                {chiefs.map( chief => <ChiefCards key={chief.name} chief={chief} />)}
            </div>
        </div>

    )
}