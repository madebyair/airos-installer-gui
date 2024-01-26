import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./welcome.css"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, { useState } from "react"
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons"
import LanguageSelect from "./LanguageSelect.tsx"
import i18next from "i18next"
import { useTranslation } from "react-i18next"
import OptionsMenu from "../options/OptionsMenu.tsx"
import { useAtomState } from "@zedux/react"
import { componentState } from "../state/componentState.tsx"
import { fadeIn } from "../helpers.ts";
import DiskLoader from "../loaders/DiskLoader.tsx";

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
              <div className="text fadein" id="text">
                <h1>{t("Welcome")}</h1>
              </div>
              <div className="bl fadein" id="content">
                <div className="language" onClick={() => setLanguage(true)}>
                  <div className="icon">
                    <FontAwesomeIcon icon={faEarthEurope} />
                  </div>
                  <div className="text">
                      <span>{t("Language")}</span>
                  </div>
                </div>
              </div>
              <div className="down fadein" id="button">
                <button className="button-normal" onClick={() =>  fadeIn(["text", "content", "button"], () => { setComponent(<DiskLoader />) })}>{t("Continue")}</button>
              </div>
            </div>
    )
}