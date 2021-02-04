import React, { cloneElement } from 'react'

export default props => {
    return (
        <div>
            {
                props.children.map((chield, i) => {
                    return cloneElement(chield, { ...props, key: i })
                })
            }
        </div>
    )
}
