// Environment
import React, {createContext, useState, useEffect} from "react";





export const AppContext: any = createContext(null);




const AppContextProvider = (props: any) => {


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


    // Variables      // Variables    // Variables    // Variables    // Variables
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



    // Logic     // Logic     // Logic    // Logic    // Logic

    const [theme, setTheme] = useState(()=>{
        let localTheme = localStorage.getItem("themeSetItem")
        if(localTheme){
            return JSON.parse(localTheme);
        }else{
            return "light";
        }
    })
    const [primaryColor, setPrimaryColor] = useState(()=>{
        const primaryColorString: any = localStorage.getItem("primaryColorSetItem")
        const localPrimaryColor: any = parseInt(JSON.parse(primaryColorString))
        if(localPrimaryColor){
            return localPrimaryColor;
        }else{
            return 0;
        }
    })    
    const [fontSize, setFontSize] = useState(()=>{
        const fontSizeString: any = localStorage.getItem("fontSizeSetItem")
        const localFontSize: any = parseInt(JSON.parse(fontSizeString))
        if(localFontSize){
            return localFontSize;
        }else{
            return 1;
        }
    })   
    const [animationSpeed, setAnimationSpeed] = useState(()=>{
        const animationSpeedString: any = localStorage.getItem("animationSpeedSetItem")
        const localAnimationSpeed: any = parseInt(JSON.parse(animationSpeedString))
        if(localAnimationSpeed){
            return localAnimationSpeed;
        }else{
            return 1;
        }
    })
 


    const [settings, setSettings] = useState<SettingsType>(() => {
        let localSettings = localStorage.getItem("userSetSettings");
        if (localSettings) {
          return JSON.parse(localSettings);
        } else {
          return {
            "--background-color": "#fff",
            "--background-light": "#fff",
            "--primary-color": "rgb(255,0,86)",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#0A0A0A",
            "--text-light": "#575757",
            "--font-size": "16px",
            "--animation-speed": 1
          };
        }
      });


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
        let root = document.documentElement
        for(let key in settings){
            root.style.setProperty(key, settings[key])
        }
        localStorage.setItem("userSetSettings", JSON.stringify(settings));
        
    },[settings])


    useEffect(() => {
        localStorage.setItem("themeSetItem", JSON.stringify(theme))
        localStorage.setItem("primaryColorSetItem", JSON.stringify(primaryColor.toString()))
        localStorage.setItem("fontSizeSetItem", JSON.stringify(fontSize.toString()))
        localStorage.setItem("animationSpeedSetItem", JSON.stringify(animationSpeed.toString()))
    },[primaryColor, theme, fontSize, animationSpeed])




    


    const contextValue: any = {
        themes, primaryColors, fontSizes, animationSpeeds, primaryColor, fontSize, animationSpeed, theme, settings, changeTheme, changeColor, changeFontSize, changeAnimationSpeed
    };





    return(
        // You pass down contextValue object that has other functions injected into it
        // You pass it down as a value attribute so you can deconstruct it in other components
        // this is how we package and transfer functions from components
        <AppContext.Provider value ={contextValue} >
            {props.children}
        </AppContext.Provider>
    )
};
export default AppContextProvider