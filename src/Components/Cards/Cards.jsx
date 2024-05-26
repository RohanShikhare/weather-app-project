import React from "react";
import img from "../../Assets/img/113.png";
import { CardAction } from "../../Redux-Store/actions/cardActions";
import { useSelector } from "react-redux";

function Cards() {
  const { openCard } = CardAction();
  const { cardOpen } =  useSelector((store)=>store.card);
  return (
    <div className={`Card ${cardOpen === false ? "closed" : ""}`} onClick={() => openCard()}>
      <div className="card-row-1">
        <p className="day">Monday</p>
        <p className="time">11:42pm</p>
      </div>
      <div className="card-row-2">
        <p className="celcius">16C</p>
        <img className="temp-img" src={img} alt="temperature" />
      </div>
      <div className="card-row-3">
        <div className=" row-3-wrap">
          <p className="kelvin-label">Kelvin</p>
          <p className="kelvin-value">34K</p>
        </div>
        <div className=" row-3-wrap">
          <p className="fahrenheit-label">Fahrenhiet</p>
          <p className="fahrenheit-value">76F</p>
        </div>
      </div>
      <div className="card-row-3">
        <div className=" row-3-wrap">
          <p className="pressure-label">Pressure</p>
          <p className="pressure-value">500mg</p>
        </div>
        <div className=" row-3-wrap">
          <p className="humidity-label">Humidity</p>
          <p className="humidity-value">52%</p>
        </div>
      </div>
      <div className="card-row-3">
        <div className=" row-3-wrap">
          <p className="wind-name">Wind</p>
          <p className="wind-value">5-6Kmh/h</p>
        </div>
        <div className=" row-3-wrap">
          <p className="feel-label">Real Feel</p>
          <p className="feel-value">8.1</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
