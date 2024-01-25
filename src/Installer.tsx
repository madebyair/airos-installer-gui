import { useAtomState } from "@zedux/react"
import { componentState } from "./state/componentState"
import "./i18n"
import SetupContainer from "./setup/SetupContainer.tsx";

export default function Installer() {
    const [component] = useAtomState(componentState)
    
    return <SetupContainer>{component}</SetupContainer>
}