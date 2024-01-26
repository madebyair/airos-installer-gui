// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, { useEffect, useState } from "react";
import "./options.css";
import optionCreator from "./optionCreator.ts";
import { useAtomState } from "@zedux/react";
import {availableDisksState, selectedDiskState} from "../state/diskState.ts";
import OptionType from "../interface/OptionType.ts";
import {useTranslation} from "react-i18next";
import Modal from "./Modal.tsx";

export default function OptionsMenu() {
    const [disks] = useAtomState(availableDisksState);
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState("");
    const [selectedName, setSelectedName] = useState("");
    const [modal, setModal] = useState(false)
    const [, setSelectedDisk] = useAtomState(selectedDiskState)

    useEffect(() => {
        const result = optionCreator(disks);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setOptions(result);
        console.log(result);
    }, [disks]);

    const { t } = useTranslation()

    // @ts-ignore
    return (
        <div className="options fadein">
            {modal &&
                <>
                    <Modal name={selectedName} cont={() => setSelectedDisk(selected)} />
                    <div className="overlay"></div>
                </>
            }
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
                            name="diskOptions"
                            checked={selected === option.location}
                            onChange={() => setSelectedName(option.name) || setSelected(option.location)}
                        />
                        <span>{option.human_readable}</span>
                    </div>
                ))}
            </div>
            {selected !== "" &&
                <div className="button">
                    <button className="button-normal" onClick={() => setModal(true)}>{t("Continue")}</button>
                </div>
            }
        </div>
    );
}
