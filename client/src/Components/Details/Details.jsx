import "./Detail.css";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Loading/Loading";
import { clearGameDetail, getDetail } from "../../redux/Actions/index.js";

const Details = (props) => {
  const date = useSelector((state) => state.gameDetail);
  console.log("date-->", date);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    return () => dispatch(clearGameDetail());
  }, [dispatch, props.match.params.id]);

  return (
    <div>
      {!Object.keys(date).length ? (
        <Loading />
      ) : (
        <div className="content">
          <div className="detail">
            <div>
              <img src={date.background_image} alt={date.name} />
              <div className="rating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-star"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                </svg>
                <h3 className="number">{date.rating}</h3>
              </div>
              <div>
                <h3>Released:</h3>
                <p>{date.released}</p>
              </div>
            </div>
            <div className="info">
              <h1>{date.name}</h1>
              <h4>Description: </h4>
              {date.description}
              <h4>Platforms: </h4>
              {date.Platforms?.map((e) => {
                return <ul key={e.name}>{e.name}</ul>;
              })}
              <h4>Genres: </h4>
              {date.Genres?.map((e) => {
                return <ul key={e.name}>{e.name}</ul>;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
