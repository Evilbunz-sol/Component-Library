import React from "react"
import classnames from "classnames"


export default function Banner({line, variant, children}) {
    
    let lineClass = line && `banner banner-${line}`
    let variantClass = variant && `banner banner-${variant}`
    const allClasses = classnames(lineClass, variantClass)
    
    return (
        <div className={allClasses}>
            {children}
        </div>
    )
}