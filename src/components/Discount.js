import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { useCartContext } from "./context/CartContext";
//https://www.w3schools.com/react/showreact.asp?filename=demo2_react_forms_submit

function Discount() {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("")
  const {applyDiscount} = useCartContext()
  const [successful, setSuccessful] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
   const result = applyDiscount(code)
   setMessage(result.message)
   setSuccessful(result.outcome)
  }


  //show discount was successful
  //shows class applied even at start but no message
  const discountOutcome = () => {
    if (successful) {
      return "discountApplied"
    } else {
      return "discountInvalid"
    }
  }

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
      <p className={discountOutcome()}>{message}</p>
            
    </div>
  );
}

export default Discount;
