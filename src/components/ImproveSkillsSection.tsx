// CSS
import "../styles/index.scss";


export default function ImproveSkillsSection() {

    const list = [
        "Learn new recipes",
        "Experiment with food",
        "Write your own recipes",
        "Know nutrition facts",
        "Get cooking tips",
        "Get Ranked"
    ]

    return(

    <div className="section improveskills">
        <div className="col img">
            <img src="/content/gallery-preview/img_10.jpg" alt="" />
        </div>
        <div className="col typography ">
            <h1 className="title">
                Improve Your Culinary Skills
            </h1>
            {list.map((item, index) => (
            <p className="skill-item" key={index}>{item}</p>
            ))}
            <button className="button">
                sign up
            </button>
        </div>
       
    </div>

    )
}