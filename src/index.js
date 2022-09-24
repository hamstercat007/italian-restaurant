import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { CartContextProvider } from "./components/context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <ChakraProvider>
    <CartContextProvider >
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </CartContextProvider>
  </ChakraProvider>
);


