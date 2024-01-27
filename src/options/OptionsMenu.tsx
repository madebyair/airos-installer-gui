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
import {componentState} from "../state/componentState.tsx";
import Installing from "../installing/Installing.tsx";
import {fadeIn} from "../helpers.ts";

export default function OptionsMenu() {
    const [disks] = useAtomState(availableDisksState);
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState("");
    const [selectedName, setSelectedName] = useState("");
    const [modal, setModal] = useState(false)
    const [, setSelectedDisk] = useAtomState(selectedDiskState)
    const [, setComponent] = useAtomState(componentState)

    useEffect(() => {
        const result = optionCreator(disks);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setOptions(result);
        console.log(result);
    }, [disks]);

    const { t } = useTranslation()

    return (
        <div className="options fadein" id="options">
            {modal &&
                <>
                    <Modal name={selectedName} cont={() => {
                        fadeIn(["options"], () => {
                            setSelectedDisk(selected)
                            setComponent(<Installing />)
                        })
                    }}/>
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
                            onChange={() => {
                                setSelectedName(option.name)
                                setSelected(option.location)
                            }
                            }
                        />
                        <span>{option.human_readable}</span>
                    </div>
                ))}
            </div>
            {selected !== "" &&
                <div className="button fadein">
                    <button className="button-normal" onClick={() => setModal(true)}>{t("Continue")}</button>
                </div>
            }
        </div>
    );
}
