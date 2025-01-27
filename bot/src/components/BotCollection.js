import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BotCollection({ handleFilterChange }) {
  const [bot, setBot] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/bots")
      .then((res) => res.json())
      .then((handleFilterChange) => setBot(handleFilterChange));
  }, []);

  const sortedHealth = bot.sort((a, b) => (a.health > b.health ? -1 : 1));

  return (
    <>
      <div className="row" style={{ gap: "3%" }}>
        {" "}
        {sortedHealth.map((bot) => {
          return (
            <div className="col-2 mb-4" onChange={handleFilterChange}>
              <div
                key={bot.name}
                className="row no-gutters"
                style={{ width: "18rem;" }}
              >
                <div className="row">
                  <div className="card p-0 m-1">
                    <div className="col md-3">
                      <img
                        src={bot.avatar_url}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="text-primary">{bot.name}</h5>
                      <p className="card-text-sm">
                        <small>{bot.catchphrase}</small>
                      </p>
                      <h5 className="card-text-sm">
                        Bot Class:
                        <span className="text-primary"> {bot.bot_class}</span>
                      </h5>

                      <div
                        className="ps-10"
                        style={{
                          display: "flex",
                          margin: "20px",
                        }}
                      >
                        <p
                          className="card-text-sm"
                          style={{
                            border: "10px",
                            border_radius: "5px",
                            padding: "10px",
                          }}
                        >
                          <span className="text-danger">
                            <i class="fa-solid fa-heart-pulse"> </i>
                          </span>{" "}
                          {bot.health}
                        </p>

                        <p
                          className="card-text-sm"
                          style={{
                            border: "10px",
                            border_radius: "5px",
                            borderBlockColor: "green",
                            padding: "10px",
                          }}
                        >
                          <span className="text-danger">
                            <i class="fa-solid fa-shield"> </i>
                          </span>
                          {bot.armor}
                        </p>
                        <p
                          className="card-text-sm"
                          style={{
                            border: "10px",
                            border_radius: "5px",
                            borderColor: "red",
                            padding: "10px",
                          }}
                        >
                          <span className="text-danger">
                            <i class="fa-solid fa-bolt-lightning"></i>
                          </span>{" "}
                          {bot.damage}
                        </p>
                      </div>
                    </div>
                    <button className="btn btn-primary">
                      {" "}
                      <Link className="text-white" to={`/post/${bot.id}`}>
                        {" "}
                        ViewPost
                      </Link>{" "}
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BotCollection;
