import React from 'react';
import { Link } from 'react-router-dom';
import { dateFormatDbToView } from "../../Utils/stringFunctions";
import { Tooltip } from "react-tooltip";
import './PreviousEvent.css'

const PreviousEvent = ({ title, description, eventDate, idEvent }) => {
  return (
    <article className="event-card">
      <Tooltip id={idEvent} className="tooltip"  />
      <h2 className="event-card__title"
      data-tooltip-id={idEvent}
      data-tooltip-content={title}
      data-tooltip-place="top"
      >{title.substr(0,15)}</h2>

      <p 
        className="event-card__description"
        data-tooltip-id={idEvent}
        data-tooltip-content={description}
        data-tooltip-place="top"
      
      >
        <Tooltip id={idEvent} className="tooltip"  />
        {description.substr(0,15)}
      </p>

      <p className="event-card__description">{dateFormatDbToView(eventDate)}</p>

      <Link  className="event-card__connect-link" to="/detalhe-evento">
      <p>Visualizar</p>
      </Link>
    </article>
  );
}

export default PreviousEvent;