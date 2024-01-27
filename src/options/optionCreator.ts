import DiskType from "../interface/DiskType.ts";
import OptionType from "../interface/OptionType.ts";
import {letterToNumber, mbToGb} from "../helpers.ts";
import i18n from "i18next";

export default function optionCreator(disks: DiskType[]) {
    const result: OptionType[] = []

    disks.forEach((disk) => {
        if (window.location.port == "1420") {
            if (!disk.removable) {
                return
            }
        } else {
            if (disk.removable) {
                return
            }
        }

        if (disk.location.includes("vda")) {
            result.push({
                "human_readable": i18n.t("Install on virtual machine disk 1"),
                "location": disk.location,
                "name": "Virtual disk",
                "tooSmall": mbToGb(disk.size) <= 300
            });
        }

        if (disk.location.startsWith("/dev/sd")) {
            const letter = disk.location.replace("/dev/sd", "")

            result.push({
                "human_readable": i18n.t("Install on hard disk {{name}} {{number}} ({{size}} GB)", { name: disk.name, number: letterToNumber(letter), size: mbToGb(disk.size).toString().slice(0, -1)}),
                "location": disk.location,
                "name": disk.name + " (" + mbToGb(disk.size).toString().slice(0, -1) + " GB)",
                "tooSmall": mbToGb(disk.size) <= 300
            });
        }

        if (disk.location.startsWith("/dev/nvme")) {

            result.push({
                "human_readable": i18n.t("Install on NVME disk {{name}} ({{size}} GB)", { name: disk.name, size: mbToGb(disk.size).toString().slice(0, -1)}),
                "location": disk.location,
                "name": disk.name + " (" + mbToGb(disk.size).toString().slice(0, -1) + " GB)",
                "tooSmall": mbToGb(disk.size) <= 300
            });
        }
    });

    return result
}