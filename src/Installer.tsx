import { useAtomState } from "@zedux/react"
import { componentState } from "./state/componentState"

export default function Installer() {
    const [component] = useAtomState(componentState)
    
    return component
}