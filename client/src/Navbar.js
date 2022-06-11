import React from "react";

const Navbar = ({ accounts }) => {
    return (
        <div>
        <nav className="navbar navbar-dark bg-dark shadow mb-5">
            <p className="navbar-brand my auto" style={{marginLeft: "10px", marginTop:"1.0rem"}}>Election Dapp</p>
            <ul className= "navbar-nav">
            <li className="nav-item text-white" style={{marginRight: "30px", marginTop:"0.1rem"}}> {accounts} </li>
            </ul>
        </nav>
        </div>
    );
}

export default Navbar