import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiClient from "../common/api";
import { IPeople } from "../common/models";

const SinglePlanetPage = () => {
  const personId = useParams();
  const idPerson = personId.id;
  const [person, setPerson] = useState<IPeople>(Object);
  const navigate = useNavigate();

  const getHuman = async (id: number) => {
    try {
      const res = await apiClient.get<IPeople>(`/people/${personId.id}`);
      setPerson(res.data);
    } catch (e) {
      console.log({ e });
    }
  };

  useEffect(() => {
    if (personId) {
      //   @ts-ignore
      const id = parseInt(idPerson);
      !isNaN(id) && getHuman(id);
    }
  }, [personId]);
  return (
    <>
      <div className="single-block">
        <div>
          {/* @ts-ignore */}
          <h3>
            Name: <b>{person.name}</b>
          </h3>
          <h3>
            Gender: <b>{person.gender}</b>
          </h3>
          <h3>
            Birth Year: <b>{person.birth_year}</b>
          </h3>
          <h3>
            Height: <b>{person.height}</b>
          </h3>
          <h3>
            Mass: <b>{person.mass}</b>
          </h3>
        <input type="button" value="back" onClick={() => navigate("/people")} />
        </div>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${personId.id}.jpg`}
          alt=""
        />
      </div>
    </>
  );
};

export default SinglePlanetPage;
