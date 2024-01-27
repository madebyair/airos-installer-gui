// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import "./setup.css"

const SetupContainer = ({children} : { children: JSX.Element }) => {
    return (
        <div className="setup">
            <div className="darker">
                <div className="center">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SetupContainer