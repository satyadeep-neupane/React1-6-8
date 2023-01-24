import { useState, useEffect, createContext } from "react";

import Card from './Card';
import Comp1 from './Components/Comp1';

export const UserContext = createContext()

function Home()
{
    let [count, setCount] = useState(0);
    let [users, setUsers] = useState(["Ram", "Shyam", "Hari", "Geeta"]);

    const increment = () => {
        setCount(count + 1);
    }

    const addUser = () => {
        setUsers([...users, { name:"New User"}]);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])

    return (
        <div>
            <h1>Home</h1>

            <p>{ count }</p>

            <button onClick={increment}>Inc</button>
            {
                users.map(user => <Card user={user} />)
            }

            <button onClick={addUser}>Add User</button>

            <UserContext.Provider value="random">
                <Comp1/>
            </UserContext.Provider>
            
        </div>
    );
}

export default Home;