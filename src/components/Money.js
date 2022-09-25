
function Money({number}) {

  const money = (number/100).toFixed(2)

  return (
   <span>£{money}</span>
  )
}

export default Money