import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll';



const SmoothScroll = ({ children }) => {
    useEffect(()=>{
        if(window !== undefined){
            const locomotiveScroll = new LocomotiveScroll();
        }
    },[])
    return (
        <div>{children}</div>
    )
}

export default SmoothScroll