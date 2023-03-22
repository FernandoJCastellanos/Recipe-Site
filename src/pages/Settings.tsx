// Environment
import {useContext} from "react"

// Content
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

// Components
import { AppContext } from "../AppContext"


export default function Settings(){



    const {themes, primaryColors, fontSizes, animationSpeeds, primaryColor, fontSize, animationSpeed, theme, settings, changeTheme, changeColor, changeFontSize, changeAnimationSpeed}: any = useContext(AppContext);

    return(
        <div>
            {/* Background color */}
            <div className="section d-block">
                <h2>
                    Background theme
                </h2>
                <div className="options-container" >
                    <div className="option light" onClick={()=> changeTheme(0)}>
                        {theme === "light" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                    <div className="option dark" onClick={()=> changeTheme(1)}>
                    {theme === "dark" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Primary Color */}
            <div className="section d-block">
                <h2>
                    Preferred Color
                </h2>
                <div className="options-container">
                   {primaryColors.map((color: any, index: any) => 
                   <div className="option light" style={{backgroundColor: color}} onClick={() => changeColor(index)}>
                        {primaryColor === index && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                   )}
                </div>
            </div>
            {/* Font Size */}
            <div className="section d-block">
                <h2>
                    Font Size
                </h2>
                <div className="options-container">
                   {fontSizes.map((size: any, index: any) => (
                <button className="button" onClick={()=> changeFontSize(index)}>
                    {size.title}
                    {fontSize === index && <span><FontAwesomeIcon icon={faCheck} /></span>}
                </button>
                   ))}
                </div>
            </div>

            {/* Animation Speed */}
            <div className="section d-block">
                <h2>
                    Animation Speed
                </h2>
                <div className="options-container">
                   {animationSpeeds.map((speed: any, index: any) =>( 
                <button className="button" onClick={()=> changeAnimationSpeed(index)}>
                    {speed.title}
                    {animationSpeed === index && <span><FontAwesomeIcon icon={faCheck} /></span>}
                </button>
                   ))}
                </div>
            </div>


        </div>
    )
}