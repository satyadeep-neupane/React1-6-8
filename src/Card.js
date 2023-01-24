import Welcome from "./Welcome";

function Card({ user })
{
    return (
        <div>
            <Welcome name={user.name} />
            <p>{ user.email }</p>
        </div>
    );
}

export default Card;