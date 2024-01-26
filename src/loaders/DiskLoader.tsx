import LoadingAnimation from "./animation/LoadingAnimation.tsx";
import {useEffect} from "react";
import {fadeIn, gbToMb} from "../helpers.ts";
import {Command} from "@tauri-apps/api/shell";
import DiskType from "../interface/DiskType.ts";
import {useAtomState} from "@zedux/react";
import {componentState} from "../state/componentState.tsx";
import OptionsMenu from "../options/OptionsMenu.tsx";
import {availableDisksState} from "../state/diskState.ts";

export default function DiskLoader() {
    const [, setComponent] = useAtomState(componentState)
    const [, setAvailableDisks] = useAtomState(availableDisksState)

    useEffect(() => {
        const disks: DiskType[] = []
        async function executeCmd() {
            const command = new Command('lsblk');

            command.stdout.on("data", (line) => {
                if (line.startsWith("NAME")) { // Return if line is NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
                    return
                }

                if (line.startsWith("├─") || line.startsWith("└─")) { // Return if line is a partition
                    return
                }

                if (line.includes("loop")) { // Return if disk is loop
                    return
                }

                if (line.startsWith("zram")) { // Return if disk is swap
                    return
                }

                if (line.includes("/")) { // Delete mountpoints
                    return
                }

                const parts = line.split(" ")

                for (let i = parts.length - 1; i >= 0; i--) {
                    if (parts[i] === "") {
                        parts.splice(i, 1);
                    }
                }

                const location = "/dev/" + parts[0]
                const size = parseFloat(parts[1].replace(',', ''))
                const removable = Boolean(parseInt(parts[2]))
                const name = parts.slice(3).join(' ')

                disks.push({ location: location, name: name, removable: removable, size: gbToMb(size) })
            })

            await command.spawn()
        }

        executeCmd()

        setTimeout(() => {
            console.log("lsblk detected these disks ", disks)
            setAvailableDisks(disks)
            fadeIn(["loading"], () => { setComponent(<OptionsMenu />) })
        }, 800)
        
    }, [])

    return <LoadingAnimation />
}