import { useState, useEffect } from "react";
import apiClient from "../common/api";
import { IPlanets } from "../common/models";
import { Link } from "react-router-dom";

const PlanetsPage = () => {
  const [planets, setPlanets] = useState<IPlanets[]>([]);
  const [page, setPage] = useState(1);

  const getPeople = async () => {
    try {
      const res = await apiClient.get<IPlanets[]>(`/planets/?page=${page}`);
      {/* @ts-ignore */}
      setPlanets(res.data.results);

      console.log(res.data);
    } catch (e) {
      console.log({ e });
    }
  };
  const planetId = (url: any) => {
    const id = url.slice(
      "https://swapi.dev/api/planets/".length,
      url.length - 1
    );
    return id;
  };

  useEffect(() => {
    getPeople();
  }, [page]);

  return (
    <>
      <h1>Planets:</h1>
    <div className="block">
      {planets.map((p) => (
        <ul key={p.url} onClick={() => planetId(p.url)}>
          <Link
            to={`/planets/${p.url.slice(
              "https://swapi.dev/api/planets/".length,
              p.url.length - 1
              )}`}
              >
            <li>{p.name}</li>
          </Link>
        </ul>
      ))}
      <div>
        <input className="mr-20" type="button" value="<" onClick={() => setPage(page - 1)} />
        <input className="mr-20" type="button" value=">" onClick={() => setPage(page + 1)} />
      </div>
    </div>
      </>
  );
};
export default PlanetsPage;
