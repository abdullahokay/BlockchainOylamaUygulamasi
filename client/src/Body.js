import React ,{ useState } from "react";


const Body = ({candidate1, candidate2, voteToCandidate, accounts}) => {

    const[Candidate, setCandidate] = useState();

    const onchange = (e) => {
        setCandidate(e.target.value);
    }

    const onsubmit = (e) => {
        e.preventDefault();
        if (Candidate.id !== 0) {
            voteToCandidate(Number(Candidate));
        }
        else {
            window.alert("There is error in submission")
        }
    };

    
  return (
    <div className="mt-4 text-center" style={{ color: "#000000" }}>
        <h2>Election Results</h2>
        <hr
            style={{
                width: "70%",
                borderstyle: "solid",
                marginLeft: "auto",
                marginRight: "auto",
            }}
        />
        <div className="p-3 ml-auto mr-auto" style={{width:"40%", marginLeft: "auto", marginRight: "auto"}}>
            <div className="row ml-auto mr-auto mb-2" style={{width:"90%"}}>
                <div className="col">
                    <p>#</p>
                </div>
                <div className="col">
                    <p>Name</p>
                </div>
                <div className="col">
                    <p>Votes</p>
                </div>
            </div>
            <hr
                style={{width:"90%", borderstyle: "solid", borderColor: "#000000"}}
            />
            <div
                className="row ml-auto mr-auto mb-2"
                style={{ width: "90%" }}>
            
                <div className="col">
                    <p>{candidate1.id}</p>
                </div>
                <div className="col">
                    <p>{candidate1.name}</p>
                </div>
                <div className="col">
                    <p>{candidate1.votes}</p>
                </div>
            </div>
            <hr
                style={{width:"90%", borderstyle: "solid", borderColor: "#000000"}}
            />
            <div
                className="row ml-auto mr-auto mb-2"
                style={{ width: "90%" }}>
            
                <div className="col">
                    <p>{candidate2.id}</p>
                </div>
                <div className="col">
                    <p>{candidate2.name}</p>
                </div>
                <div className="col">
                    <p>{candidate2.votes}</p>
                </div>
            </div>
        </div>
            <div className="my-5 mr-auto ml-auto text-left" style={{ width: "55%",marginLeft: "auto", marginRight: "auto"}}>
                <h5>Cast Your Vote:</h5>
                <form onSubmit={onsubmit} style={{
                                display: "flex",
                                flexDirection:" column",
                                alignItems: "center"
                            }}>
                    <select name="candidate" className="from-control" style= {{ marginBottom:"65px", width:"45%" }} onChange={onchange}>
                    <option defaultValue value="">
                        Select
                    </option>
                    <option value="1">{candidate1.name}</option>
                    <option value="2">{candidate2.name}</option>
                    </select>
                    <button className="btn btn-primary mt-2 btn-md w-50" style={{width:"30%"}}>
                        Vote Candidate{" "}  {Candidate}
                    </button>
                </form>
            </div>
            <p className="my-5">
                Your address: <span className="front-weight-bold">{accounts}</span>{" "}
            </p>
    </div>
  );
};

export default Body