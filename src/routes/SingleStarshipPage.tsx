import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiClient from "../common/api";
import { IStarships } from "../common/models";

const SingleStarshipPage = () => {
  const starshipsId = useParams();
  const navigate = useNavigate();
  const [starship, setStarship] = useState<IStarships>(Object);

  const getHuman = async (id: number) => {
    try {
      const res = await apiClient.get<IStarships>(
        `/starships/${starshipsId.id}`
      );
      setStarship(res.data);
    } catch (e) {
      console.log({ e });
    }
  };
  useEffect(() => {
    if (starshipsId) {
      //   @ts-ignore
      const id = parseInt(starshipsId.id);
      !isNaN(id) && getHuman(id);
    }
  }, [starshipsId]);
  return (
    <div className="single-block">
    <div>
      {/* @ts-ignore */}
      <h3>Name: <b>{starship.name}</b></h3>
      <h3>
        Model: <b>{starship.model}</b>
      </h3>
      <h3>
        Manufacturer: <b>{starship.manufacturer}</b>
      </h3>
      <h3>
        Consumables: <b>{starship.consumables}</b>
      </h3>
      <h3>
        Length: <b>{starship.length}</b>
      </h3>
      <input type="button" value="back" onClick={() => navigate("/starships")} />
    </div>
      <img
        src={`https://starwars-visualguide.com/assets/img/starships/${starshipsId.id}.jpg`}
        alt=""
      />
  </div>
  );
};

export default SingleStarshipPage;
