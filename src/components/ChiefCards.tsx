import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

type ChiefCardsProps = {
    chief: any;
}


export default function ChiefCards(props: ChiefCardsProps) {


    return (
        <div className="chief-card">
            <img src={props.chief.img} alt="" />
            <div className="chief-card-info">
                <h3 className="chief-card-name">{props.chief.name}</h3>
                <p className="chief-recipe-count">Recipes: <b> {props.chief.recipesCount} </b> </p>
                <p className="chief-cuisine">Cuisine: <b> {props.chief.cuisine} </b> </p>
                <p className="chief-icons">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                </p>
            </div>
        </div>
    )
}