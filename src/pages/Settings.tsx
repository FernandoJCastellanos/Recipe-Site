// Environment
import {useState, useEffect} from "react"

// Content
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

// Components



export default function Settings(){

    // TypeScript     // TypeScript     // TypeScript     // TypeScript

    type ThemesType = {
        "--background-color": string;
        "--background-light": string;
        "--shadow-color": string;
        "--text-color": string;
        "--text-light": string;
      };

    type ColorsType = string[];


    type FontsType = {
        title: any;
        value: any;
      };

      type AnimationType = {
        title: string;
        value: number;
      }

      interface SettingsType  {
        "--background-color": string;
        "--background-light": string;
        "--primary-color": string;
        "--shadow-color": string;
        "--text-color": string;
        "--text-light": string;
        "--font-size": string;
        [key: string]: any;
        "--animation-speed": any;
      }



    // Setting Values     // Setting Values     // Setting Values     // Setting Values 
    const themes: ThemesType[] = [
        {
            "--background-color": "#fff",
            "--background-light": "#fff",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#0A0A0A",
            "--text-light": "#575757"
        },
        {
            "--background-color": "rgb(29, 29, 29)",
            "--background-light": "rgb(77, 77, 77)",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#ffffff",
            "--text-light": "#eceaea"
        }
    ];



    const primaryColors: ColorsType = [
        "rgb(255, 0, 86)",
        "rgb(33, 150, 243)",
        "rgb(255, 193, 7)",
        "rgb(0, 200, 83)",
        "rgb(156, 39, 176)"
      ];

    const fontSizes: FontsType[] = [
        {
            title:"Small",
            value:"12px"
        },
        {
            title:"Medium",
            value:"16px"
        },
        {
            title:"Large",
            value:"20px"
        }
    ]

    const animationSpeeds: AnimationType[] = [
        {
            title:"Slow",
            value: 2
        },
        {
            title:"Medium",
            value: 1
        },
        {
            title:"Fast",
            value: 0.5
        }
    ]
    





    const [ primaryColor, setPrimaryColor ] = useState(0)
    const [fontSize, setFontSize] = useState(1)
    const [animationSpeed, setAnimationSpeed] = useState(1)
    const [theme, setTheme] = useState("light")

    const [settings, setSettings] = useState<SettingsType>({
        "--background-color": "#fff",
        "--background-light": "#fff",
        "--primary-color": "rgb(255,0,86)",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#0A0A0A",
        "--text-light": "#575757",
        "--font-size": "16px",
        "--animation-speed": 1
    })



    function changeTheme(i: number){
        const _theme: any = {...themes[i]}
        setTheme(i === 0 ? "light" : "dark")
        //update settings
        let _settings = {...settings}
        for(let key in _theme){
            _settings[key as keyof SettingsType] = _theme[key]
        }
        setSettings(_settings)
    }


    function changeColor(i: number){
        const _color: string = primaryColors[i]
        let _settings: SettingsType  = {...settings}
        _settings["--primary-color"] = _color
        setPrimaryColor(i)
        setSettings(_settings)
    }

    
    function changeFontSize(i: number){
        const _size: any = fontSizes[i]
        let _settings: SettingsType  = {...settings}
        _settings["--font-size"] = _size.value
        setFontSize(i)
        setSettings(_settings)
    }

    function changeAnimationSpeed(i: number) {
        const _speed: any = animationSpeeds[i]
        let _settings: SettingsType = {...settings}
        _settings["--animation-speed"] = _speed.value
        setAnimationSpeed(i)
        setSettings(_settings)
    }




    useEffect(() => {
        if (typeof localStorage !== "undefined") {
          let data = localStorage.getItem("userSetSettings");
          if (data) {
            const settingJson = JSON.parse(data);
            console.log(settingJson);
            setSettings(settingJson);
          }
        }
      }, []);

    useEffect(() => {
        const root = document.documentElement
        for(let key in settings){
            root.style.setProperty(key, settings[key])
        }
        localStorage.setItem("userSetSettings", JSON.stringify(settings));
    },[settings])



    
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
                   {primaryColors.map((color, index) => 
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
                   {fontSizes.map((size, index) => (
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
                   {animationSpeeds.map((speed, index) =>( 
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