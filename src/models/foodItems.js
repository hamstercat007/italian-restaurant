
//functionality to work with the data, to get item by ID. 
//import data

import foodData from "../data/data.js"
const getFoodItemById = (id) =>  foodData.find(foodItem => foodItem.id === Number(id))

export {getFoodItemById}