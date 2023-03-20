import CostumeImages from "./CostumeImages";

// CSS
import "../styles/index.scss";


// this gets exported to app
export default function HeroSection(){

    const images = [
        "/content/gallery-preview/img_1.jpg",
        "/content/gallery-preview/img_2.jpg",
        "/content/gallery-preview/img_3.jpg",
        "/content/gallery-preview/img_4.jpg",
        "/content/gallery-preview/img_5.jpg",
        "/content/gallery-preview/img_6.jpg",
        "/content/gallery-preview/img_7.jpg",
        "/content/gallery-preview/img_8.jpg",
        "/content/gallery-preview/img_9.jpg"
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