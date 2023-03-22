import CostumeImages from "./CostumeImages";

type RecipeCardProps = {
    recipe: any;
    index: any;
}


export default function RecipeCard(props: RecipeCardProps){
    return(
        <div className="recipe-card" style={{animationDelay: props.index * 0.1 + "s"}}>
            <CostumeImages src={props.recipe.image} paddingTop="50%" />
            <div className="recipe-card-info" >
                <img className="author-img" src={props.recipe.authorImg} alt=""/>
                <p className="recipe-title">{props.recipe.title}</p>
                <p className="recipe-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugit maentium tempore totam quasi, natus </p>
                <a className="view-button" href="!#"> VIEW RECIPE</a>
            </div>
        </div>
    )
}