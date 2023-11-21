import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./welcome.css"
import { useState } from "react"
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons"
import LanguageSelect from "./welcome/LanguageSelect"
import i18next from "i18next"
import { useTranslation } from "react-i18next"
import OptionsMenu from "./options/OptionsMenu"
import { useAtomState } from "@zedux/react"
import { componentState } from "./state/componentState"

export default function Welcome() {
    const [language, setLanguage] = useState(false)
    const [, setComponent] = useAtomState(componentState)
    const { t } = useTranslation()

    function sumbit (lang: string) {
      setLanguage(false)
      i18next.changeLanguage(lang)
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
                <h1>{t("Welcome")}</h1>
              </div>
              <div className="bl">
                <div className="language" onClick={() => setLanguage(true)}>
                  <div className="icon">
                    <FontAwesomeIcon icon={faEarthEurope} />
                  </div>
                  <div className="text">
                      <span>{t("Language")}</span>
                  </div>
                </div>
              </div>
              <div className="down">
                <button className="button-normal" onClick={() => setComponent(<OptionsMenu />)}>{t("Continue")}</button>
              </div>
            </div>
        </div>
      </div>  
    )
}