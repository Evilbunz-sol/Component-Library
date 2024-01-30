import React from "react"
import Card from "./Card"


export default function Cards() {
    return (
          <>
            <h2 className="component-title">Cards</h2>
            <div className="cards-container">
                <div className="card-wrapper">
                    <h2 className="component-description">Card</h2>
                    <Card> 
                        <div className="card">
                            <img src="/cardIcon.png" className="icon" />
                            <h2 className="card-title">Easy Deployment</h2>
                            <p className="card-text">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                        </div>
                    </Card>
                </div>
                <div className="card-wrapper">
                    <h2 className="component-description">Hover State</h2>
                    <Card>
                        <div className="card-hover">
                            <img src="/cardIcon.png" className="icon" />
                            <h2 className="card-title">Easy Deployment</h2>
                            <p className="card-text">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}