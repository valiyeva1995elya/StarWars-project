import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiClient from "../common/api";
import { IPlanets } from "../common/models";

const SinglePeoplePage = () => {
  const planetId = useParams();
  const navigate = useNavigate();
  const [planet, setPlanet] = useState<IPlanets>(Object);

  const getHuman = async (id: number) => {
    try {
      const res = await apiClient.get<IPlanets>(`/planets/${planetId.id}`);
      setPlanet(res.data);
    } catch (e) {
      console.log({ e });
    }
  };
  useEffect(() => {
    if (planetId) {
      //   @ts-ignore
      const id = parseInt(planetId.id);
      !isNaN(id) && getHuman(id);
    }
  }, [planetId]);
  return (
    <div className="single-block">
    <div>
      {/* @ts-ignore */}
      <h3>Name: <b>{planet.name}</b></h3>
      <h3>
        Diameter: <b>{planet.diameter}</b>
      </h3>
      <h3>
        Climate: <b>{planet.climate}</b>
      </h3>
      <h3>
        Population: <b>{planet.population}</b>
      </h3>
      <input type="button" value="back" onClick={() => navigate("/planets")} />
    </div>
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${planetId.id}.jpg`}
        alt=""
      />
    </div>
  );
};

export default SinglePeoplePage;
