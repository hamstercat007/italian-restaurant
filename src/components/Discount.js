import { useState } from "react";
import { Button } from "@chakra-ui/react";

//https://www.w3schools.com/react/showreact.asp?filename=demo2_react_forms_submit

function Discount() {
  const [code, setCode] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (pineapplesoc.test(code)) {
      document.getElementById("discountCode").innerText = "You can't have both a free pineapple pizza and 50% off - we'll be bankrupt 😠";
    } else if (soc.test(code)) {
      document.getElementById("discountCode").innerText = "50% off for SOC bootcampers. 🐱‍💻 Live long and code! ";
    } else if (pineapple.test(code)) {
      document.getElementById("discountCode").innerText =
        "You hit the bonus pineapple pot. You get a 9 inch veg and pineapple pizza 🍍 🍕";
    } else {
      document.getElementById("discountCode").innerText =
        "Code is not recognised. Please try again";
    }
  };
  const pineapplesoc = new RegExp(/pineapplesoc/gi)
  const pineapple = new RegExp(/pineapple/gi);
  const soc = new RegExp(/soc/gi);


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter discount code:
          <input
            type="text"
            style={{
              border: "2px solid black",
              borderRadius: "5px",
              margin: "10px",
              padding: "5px",
            }}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          ></input>
        </label>
        <Button type="submit">Submit</Button>
      </form>
      <p id="discountCode"> </p>
    </div>
  );
}

export default Discount;
