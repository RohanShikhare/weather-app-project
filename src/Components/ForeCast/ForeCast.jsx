import React from 'react'
import { useSelector } from 'react-redux'
import { TypeAction } from '../../Redux-Store/actions/typeActions';

function ForeCast() {
  const {selectedType} = useSelector((store) => store.type);
  const {setType} = TypeAction();
  return (
    <div className='forecast-block'>
        <div className="col-md-8">
          <ul>
            <li>Today</li>
            <li>Tomorrow</li>
            <li>Next 7 Days</li>
          </ul>
        </div>
        <div className="col-md-4">
        <div className="mode-block">
          <div
            className={`forecast-type ${selectedType == "f-type" ? "active" : ""}`}
            onClick={() => setType("f-type")}
          >
            Forecast
          </div>
          <div
            className={`aq-type ${selectedType == "aq-type" ? "active" : ""}`}
            onClick={() => setType("aq-type")}
          >
            Air Quality
          </div>
          <div
            className={`color-slider ${
              selectedType === "f-type" ? "f-active" : "aq-active"
            }`}
          ></div>
        </div>
        </div>
    </div>
  )
}

export default ForeCast