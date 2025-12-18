import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchBasic = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    hdlFetch()
  }, [])

  const hdlFetch = async () => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setUsers(data)
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <h1>Hello Fetch</h1>
      {
        users.map((item) => {
          return <div key={item.id}>
            <img src={item.avatar_url} />
            <p>{item.login}</p>
          </div>
        })
      }
    </div>
  )
}

export default FetchBasic