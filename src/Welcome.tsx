import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./welcome.css"
import { useState } from "react"
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons"
import LanguageSelect from "./welcome/LanguageSelect"

export default function Welcome() {
    const [language, setLanguage] = useState(false)

    function sumbit (/*lang*/) {
      setLanguage(false)
    }

    return (
      <div className="welcome">
        {language && <>
            <LanguageSelect sumbit={sumbit} />
            <div className="overlay"></div>
        </>}
        <div className="div">
            <div className="center">
              <div className="text">
                <h1>Welcome</h1>
              </div>
              <div className="bl">
                <div className="language" onClick={() => setLanguage(true)}>
                  <div className="icon">
                    <FontAwesomeIcon icon={faEarthEurope} />
                  </div>
                  <div className="text">
                      <span>Language</span>
                  </div>
                </div>
              </div>
              <div className="down">
                <button className="button-normal">Continue</button>
              </div>
            </div>
        </div>
      </div>  
    )
}