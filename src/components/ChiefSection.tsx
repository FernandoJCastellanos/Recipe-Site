
import ChiefCards from "./ChiefCards";

export default function ChiefSection() {

    const chiefs = [
        {
            name: "Juan Carlos",
            img: "/content/top-chiefs-prev/img_1.jpg",
            recipesCount:"10",
            cuisine:"Mexican",
        },
        {
            name:"John Doe",
            img: "/content/top-chiefs-prev/img_2.jpg",
            recipesCount: "05",
            cuisine: "Japanese",
        },
        {
            name:"Erich Maria",
            img: "/content/top-chiefs-prev/img_3.jpg",
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name:"Chris Brown",
            img: "/content/top-chiefs-prev/img_4.jpg",
            recipesCount: "08",
            cuisine: "American",
        },
        {
            name:"Blake Lively",
            img: "/content/top-chiefs-prev/img_5.jpg",
            recipesCount: "09",
            cuisine: "French",
        },
        {
            name:"Ben Affleck",
            img: "/content/top-chiefs-prev/img_6.jpg",
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