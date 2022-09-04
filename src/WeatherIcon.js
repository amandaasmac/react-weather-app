import React from "react";

export default function WeatherIcon(props) {
  let imgUrl = `img/${props.code}d.png`;
  return <img src={imgUrl} alt={props.alt} />;
}
