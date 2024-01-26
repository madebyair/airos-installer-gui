// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, { useEffect, useState } from "react";
import "./options.css";
import optionCreator from "./optionCreator.ts";
import { useAtomState } from "@zedux/react";
import { availableDisksState } from "../state/diskState.ts";
import OptionType from "../interface/OptionType.ts";
import {useTranslation} from "react-i18next";

export default function OptionsMenu() {
    const [disks] = useAtomState(availableDisksState);
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState("");

    useEffect(() => {
        const result = optionCreator(disks);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setOptions(result);
        console.log(result);
    }, [disks]);

    const { t } = useTranslation()

    return (
        <div className="options fadein">
            <h1>{t("Installation options")}</h1>
            {window.location.port === "1420" && (
                <span>
                    Warning: this installer is running in dev mode. <br /> Non-removable
                    disks are not available.
                </span>
            )}
            <div className="disks">
                {options.map((option: OptionType) => (
                    <div className="disk" key={option.location}>
                        <input
                            type="radio"
                            name="diskOption"
                            checked={selected === option.location}
                            onChange={() => setSelected(option.location)}
                        />
                        <span>{option.human_readable}</span>
                    </div>
                ))}
            </div>
            {selected !== "" &&
                <div className="button">
                    <button className="button-normal">{t("Continue")}</button>
                </div>
            }
        </div>
    );
}
