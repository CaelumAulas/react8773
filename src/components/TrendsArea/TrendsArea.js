import React from 'react'
import './trendsArea.css'

function TrendsArea() {
    return (
        <div className="trendsArea">
            <h2 className="trendsArea__titulo widget__titulo">Trends Brasil</h2>
            <ol className="trendsArea__lista">
                <li><a href="/">#bagulhos</a></li>
                <li><a href="/">#bagulheiros</a></li>
            </ol>
        </div>
    )
}

export { TrendsArea }