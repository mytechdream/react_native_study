import { useState } from "react"

function setHandle() {
  const [first, setF] = useState([])
  function www(a) {
    setF([...first, a])
  }
  www(1)
  console.log(first)
  return (
    <>
      <h1>Your age: {age}</h1>
      <button
        onClick={() => {
          increment()
          increment()
          increment()
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          increment()
        }}
      >
        +1
      </button>
    </>
  )
}

export default setHandle
