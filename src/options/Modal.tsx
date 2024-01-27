// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import { useTranslation } from "react-i18next";

export default function Modal({name, cont} : {name: string, cont: () => void}) {
    const { t } = useTranslation()

    return (
        <div className="modal fadein" id="modal">
            <header>
                <h1>{t("Delete all data, and install airos")}</h1>
            </header>
            <main>
                {t("To install airos, you must delete all data from {{disk}}. If another operating system is currently installed, all data will be deleted.", { disk: name })}
                <br /><br /><br />
                {t("If you want to transfer data from Windows, close this installer and use the Switch to airos application in Windows")}
            </main>
            <footer>
                <button className="button-normal" onClick={() => cont()}>{t("Delete everything, and install airos")}</button>
            </footer>
        </div>
    )
}