import React from 'react'
import TextLoop from "react-text-loop";

export default function Home() {
    return (
        <div className="home">
            <div className="loop">

            <h2>
                <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                    <span>First item1</span>
                    <span>First item2</span>
                    <span>First item3</span>
                    <span>First item4</span>
                    
                </TextLoop>
                
            </h2>
            </div>
        </div>
    )
}
