import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {PeopleList} from '../components';

const PeoplePage = () => {
    
    const [peopleId, setPeopleId] = useState(0);
    const navigate = useNavigate();
    
    const onClickPeople = (id: number) => {
        setPeopleId(id);
        navigate(`/people/${id}`);
        console.log(id);
        
    };

    
    console.log(peopleId);

    return (
        <>
            <h1>People:</h1>
            <PeopleList onClickPeople={onClickPeople} />
        </>
    )

}
export default PeoplePage