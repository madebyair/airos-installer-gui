import { useAtomState } from "@zedux/react"
import { componentState } from "./state/componentState"
import "./i18n"

export default function Installer() {
    const [component] = useAtomState(componentState)
    
    return component
}