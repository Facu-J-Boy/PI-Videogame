import "./Detail.css";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
      <div className="content">
        <div className="detail">
          <div>
            <img src={date.background_image} alt={date.name} />
            <div>
              <h3>Rating:</h3>
              <p>{date.rating}</p>
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
    </div>
  );
};

export default Details;
