// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, {useEffect} from "react";
import "./installing.css"
import {BarLoader} from "react-spinners";
import {useTranslation} from "react-i18next";
import {useAtomState} from "@zedux/react";
import {selectedDiskState} from "../state/diskState.ts";
export default function Installing() {
    const { t } = useTranslation()
    const [disk] = useAtomState(selectedDiskState)

    useEffect(() => {
        console.log("Installation script running on ", disk)
    }, [disk])

    return (
        <div className="installing fadein">
            <BarLoader
                height={8}
                cssOverride={{
                    borderRadius: "10px",
                    width: "100%"
                }}
                aria-label="Loading Spinner"
                data-testid="loader"
                color="#2563eb"
            />
            <div className="box">
                <div className="text">
                    <h1>{t("Installing airos")}</h1>
                    <h2>{t("Grab a coffee and chill out :)")}</h2>
                    <h3>{t("This may take a few minutes.")}</h3>
                </div>
            </div>
        </div>
    )
}