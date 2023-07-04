import { Fragment } from "react";

const RecipeCard = () => {
  return (
    <Fragment>
      <div
        className="card p-3"
        style={{
          width: "25srem",
          borderRadius: "1rem",
          boxShadow: "0 0 1rem 0 rgba(0,0,0,.2)",
        }}
      >
        <img
          className="card-img-top"
          src="https://www.w3schools.com/bootstrap4/img_avatar1.png"
          alt="Card image"
          style={{
            //give the image a ration of 4:3

            width: "23rem",
            height: "15rem",
            borderRadius: "1rem",
          }}
        />
        <div className="card-body text-dark">
          <div className="d-flex flex-column">
            <div
              className="d-flex justify-content-between text-muted h1"
              style={{
                fontSize: "1rem",
              }}
            >
              DairyFree
            </div>
            <div className="d-flex justify-content-between">
              <span className="h3">Russian Salad</span>
              <span
                style={{
                  fontSize: "1rem",
                }}
              >
                ⭐4.5
              </span>
            </div>
            <div className="d-flex justify-content-between">
              <span
                style={{
                  color: "#DC582A",
                }}
              >
                40 min
              </span>
              <span>❤️ 🗨️</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RecipeCard;
