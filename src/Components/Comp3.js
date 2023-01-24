import { useContext } from "react";

import { UserContext } from "../Home";

function Comp3()
{
    const user = useContext(UserContext);

    return(
        <div>
            <h1>Comp3 - {user}</h1>
        </div>
    );
}

export default Comp3;