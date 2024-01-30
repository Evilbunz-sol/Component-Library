import React from "react"
import classnames from "classnames"


export default function Badge({color, shape, className, children}) {
    
    let colorClass = color ? `badge-${color}` : ""
    let shapeClass = shape ? `badge-${shape}` : ""
    
    const allClasses = classnames(colorClass, shapeClass, className)
    
    return (
        <button className={allClasses}> 
            {children} 
        </button>
    )
}






    
