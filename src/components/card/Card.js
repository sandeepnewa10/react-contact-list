import React from "react";
import "./card.css";

export const Card = ({user}) => {
  return (
    <div className="card">
      <div className="card__platform">
        <div className="card__image">
          <img src={user.picture.large} />
        </div>
        <div className="card__info">
          <div className="card__info__label">
            <h2>{user.name.title} {user.name.first}  {user.name.last} </h2>
          </div>
          <div className="card__info__details">
            <ul className="list">
              <li>
                <i className="fa-solid fa-mobile"></i>{user.cell}<span></span>
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>{user.email}<span></span>
              </li>
              <li>
                <i className="fa-solid fa-calendar-days"></i>{user.dob.age}<span></span>
              </li>
              <li>
                <i className="fa-solid fa-city"></i>{user.location.city}<span></span>
              </li>
              <li>
                <i className="fa-solid fa-globe"></i>{user.location.country}<span></span>
              </li>

              <li></li>
            </ul>
            {/* <div className="a">
            <span className="icon"><i className="fa-solid fa-globe"></i></span>adas
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
};
