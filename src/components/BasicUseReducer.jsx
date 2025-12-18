import { useState } from "react"

const people = [
  { id: 1, name: "top" },
  { id: 2, name: "kate" }
]

const BasicUseReducer = () => {
  const [data, setData] = useState(people)
  return (
    <div>
      {
        data.map((item) => {
          return <div key={item.id}>
            <li>{item.id}</li>
            <li>{item.name}</li>
          </div>
        })
      }
    </div>  
  )
}

export default BasicUseReducer