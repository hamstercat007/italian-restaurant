
//functionality to work with the data and db, to get item by ID. 
//import data

import discountCodes from "../data/discountCodes.js"

//code is an object with code and message, and discount
const getDiscountCode = (code) =>  discountCodes.find(discountCode => discountCode.code === code)

export {getDiscountCode}



