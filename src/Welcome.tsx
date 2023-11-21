import "./welcome.css"
import React from "react"

export default function Welcome() {
    return (
      <div className="welcome">
        <div className="box">
            <div className="center">
              <div className="text">
                <h1>Welcome</h1>
              </div>
              <div className="down">
                <button className="button-normal">Continue</button>
              </div>
            </div>
        </div>
      </div>  
    )
}