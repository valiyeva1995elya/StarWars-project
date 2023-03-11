import { useState, useEffect, FC } from "react";
import apiClient from "../../common/api";
import { IPeople } from "../../common/models";
import { Link} from "react-router-dom";

interface IProps {
  onClickPeople: (id: any) => void;
}

const PeopleList: FC<IProps> = (props) => {
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState<IPeople[]>([]);

  const getPeople = async () => {
    try {
      const res = await apiClient.get<IPeople[]>(`/people/?page=${page}`);
      {/* @ts-ignore */}
      setPeople(res.data.results);
    } catch (e) {
      console.log({e});
    }
  };
  const personId = (url: any) => {
    const id = url.slice("https://swapi.dev/api/people/".length, url.length - 1)
    return id
}
 
  useEffect(() => {
    getPeople();
  }, [page]);

  return (
    <div className="block">
      {people.map((p) => (
        <ul key={p.url} onClick={() => personId(p.url)}>
         
          <Link to={`/people/${ p.url.slice("https://swapi.dev/api/people/".length, p.url.length - 1)}`}>
            <li>{p.name}</li>
          </Link>
        </ul>
      ))}
      <div>
        <input className="mr-20" type="button" value="<" onClick={() => setPage(page - 1)} />
        <input className="mr-20" type="button" value=">" onClick={() => setPage(page + 1)} />
      </div>
    </div>
  );
};
export default PeopleList;
