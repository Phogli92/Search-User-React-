import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [userData, setUserData] = useState([])
  function Refresh (){
    location.reload()
  }
      useEffect(()=>{
      async function getUser(){
          let response = await fetch ("https://random-data-api.com/api/v2/users")
          let data = await response.json()
        setUserData(data)
      }
      getUser()
  }, []) 


  return <>
  {console.log(userData)}
  <img src={userData.avatar} alt="" />
  <h1>Mr.{userData.first_name} {userData.last_name}</h1>
  <h3>Birthday🎉: {userData.date_of_birth}</h3>
  <p>Email📩: {userData.email}</p>
  <p>Phone📞: {userData.phone_number}</p>

  <button onClick={Refresh}>Refresh🔍</button>
  </>

}
export default App
