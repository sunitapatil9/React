import { useRouteError } from "react-router-dom";

const Errorpage = () =>{ 
    const err = useRouteError();
    console.log(err);

    return(
        <div>
            <h1>error page</h1>
            <h2>{err.status}</h2> : <h3>{err.statusText}</h3>
        </div>
    )
}

export default Errorpage;