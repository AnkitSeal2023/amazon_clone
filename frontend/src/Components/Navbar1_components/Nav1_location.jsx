import React from "react"
export default function Nav1_location(props) {
    return (
        <div className="nav1-location">
            <div className="nav1-location-line1">
                <div id="nav1-location-ico"></div>
                <h6 id="nav1-location-delivery">Delivering to {props.location.zip}</h6>
            </div>
            <a href="/" id="nav1-location-update">
                <div className="nav1-location-update-text">Update Location</div>
            </a>
        </div>
    )
}