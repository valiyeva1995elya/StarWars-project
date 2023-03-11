import { useState, useEffect } from "react";
import apiClient from "../common/api";
import { IStarships } from "../common/models";
import { Link } from "react-router-dom";

const StarshipsPage = () => {
  const [starships, setStarships] = useState<IStarships[]>([]);
  const [page, setPage] = useState(1);

  const getPeople = async () => {
    try {
      const res = await apiClient.get<IStarships[]>(`/starships/?page=${page}`);
      { /* @ts-ignore */}
      setStarships(res.data.results);

      console.log(res.data);
    } catch (e) {
      console.log({ e });
    }
  };
  const starshipsId = (url: any) => {
    const id = url.slice(
      "https://swapi.dev/api/starships/".length,
      url.length - 1
    );
    return id;
  };
  useEffect(() => {
    getPeople();
  }, [page]);

  return (
    <>
    <h1>Starships:</h1>
      <div className="block">
        {starships.map((p) => (
          <ul key={p.url} onClick={() => starshipsId(p.url)}>
            <Link
              to={`/starships/${p.url.slice(
                "https://swapi.dev/api/starships/".length,
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
export default StarshipsPage;
