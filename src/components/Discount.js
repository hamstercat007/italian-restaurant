import {useState} from "react";

//https://www.w3schools.com/react/showreact.asp?filename=demo2_react_forms_submit

function Discount() {
  const [code, setCode] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    if (code === "SOC") {
    <h1>Welcome software engineer. Get 50% off your order with SOC code</h1>
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter discount code: 
          <input 
          type="text"
          style = {{
     border: '2px solid black', borderRadius: "5px", margin:"10px", padding:"5px"
    }}
          value={code}
          onChange={(e) => setCode(e.target.value)}>
          </input>
        </label>
      </form>
      <p>{code === "SOC"? "Welcome software engineer. Get 50% off your order with SOC code" : ""} </p>
    </div>
  );
}

export default Discount;
