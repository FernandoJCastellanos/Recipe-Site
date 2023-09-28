import CostumeImages from "./CostumeImages";



import img1 from "../content/gallery-preview/img_1.jpg"
import img2 from "../content/gallery-preview/img_2.jpg"
import img3 from "../content/gallery-preview/img_3.jpg"
import img4 from "../content/gallery-preview/img_4.jpg"
import img5 from "../content/gallery-preview/img_5.jpg"
import img6 from "../content/gallery-preview/img_6.jpg"
import img7 from "../content/gallery-preview/img_7.jpg"
import img8 from "../content/gallery-preview/img_8.jpg"
import img9 from "../content/gallery-preview/img_9.jpg"

// CSS
import "../styles/index.scss";


// this gets exported to app
export default function HeroSection(){

    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9
    ]
    return (
        <div className="section hero">
            <div className="col typography ">
                <h1 className="title">
                    What Are We About
                </h1>
                <p className="info">
                    WeGotSauce is a place where you can please your soul and tummy with delicious food recipes of all cuisine. And our service is absolutely free. So start exploring now.
                </p>
                <button className="button">
                    explore now
                </button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                <CostumeImages key={index} src={src} paddingTop={"90%"} />

                ))}
            </div>
        </div>

    )
}