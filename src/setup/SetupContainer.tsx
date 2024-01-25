// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import "./setup.css"

// eslint-disable-next-line react/prop-types,@typescript-eslint/ban-ts-comment
// @ts-expect-error
const SetupContainer = ({children}) => {
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