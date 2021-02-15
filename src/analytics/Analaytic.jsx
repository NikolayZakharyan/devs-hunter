import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
// import { GithubContext } from "../context/context";




function Analytic() {

    // const { getUserLogin } = React.useContext(GithubContext)
    let { slug } = useParams();

    
    return <div>- {slug} -:slag </div>;
    

}

export default Analytic