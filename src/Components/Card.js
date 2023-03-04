import React from "react";


export default function Card(props) {
    return (
        <div class="card">
            <img src={`./img/${props.imgSrc}`} />
            <div class="info-box">
                <p class="location"><i className="fa fa-map-marker-alt"></i> { props.location }</p>
                <h1 className="place">{ props.title }</h1>
                <p className="time">{ props.start_date } - { props.end_date }</p>
                <p className="description">{ props.description }</p>
            </div>
        </div>
    )
}
