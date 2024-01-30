import React from "react"
import Badge from "./Badge"

export default function Badges() {
    return (
        <>
            <h2 className="component-title">Badges</h2>
            <h2 className="component-description">Square</h2>
            <div className="square-badges">
                <Badge color="grey" shape="square" className="badge"> Badge </Badge>
                <Badge color="red" shape="square" className="badge"> Badge </Badge>
                <Badge color="yellow" shape="square" className="badge"> Badge </Badge>
                <Badge color="green" shape="square" className="badge"> Badge </Badge>
                <Badge color="blue" shape="square" className="badge"> Badge </Badge>
                <Badge color="indigo" shape="square" className="badge"> Badge </Badge>
                <Badge color="purple" shape="square" className="badge"> Badge </Badge>
                <Badge color="pink" shape="square" className="badge"> Badge </Badge>
            </div>
            
            <h2 className="component-description">Pill</h2>
            <div className="pill-badges">
                <Badge color="grey" shape="pill" className="badge"> Badge </Badge>
                <Badge color="red" shape="pill" className="badge"> Badge </Badge>
                <Badge color="yellow" shape="pill" className="badge"> Badge </Badge>
                <Badge color="green" shape="pill" className="badge"> Badge </Badge>
                <Badge color="blue" shape="pill" className="badge"> Badge </Badge>
                <Badge color="indigo" shape="pill" className="badge"> Badge </Badge>
                <Badge color="purple" shape="pill" className="badge"> Badge </Badge>
                <Badge color="pink" shape="pill" className="badge"> Badge </Badge>
            </div>

            
        </>
    )
} 