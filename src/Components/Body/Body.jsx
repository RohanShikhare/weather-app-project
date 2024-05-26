import React from 'react'
import ForeCast from '../ForeCast/ForeCast'

function Body() {
  return (
    <div className="body-row-1">
        <div className="col-md-9 col-12">
            <ForeCast/>
        </div>
        <div className="col-md-3 col-12"></div>
    </div>
  )
}

export default Body