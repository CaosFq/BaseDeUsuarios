

import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'
import useCrud from './hooks/useCrud'

function App() {
const [closeForm, setCloseForm] = useState(true)

 const{users, updateUserById, deleteUserById, createNewUser, getAllUsers}= useCrud()
  
  const [updateInfo, setUpdateInfo]= useState()

  useEffect(() => {
  getAllUsers()
}, [])
  
  return (
    <div className="App">
     
      <div className='head'>
      <h1>Users</h1>
      <button onClick={() => setCloseForm(false)} className='App__btn'>Open Form</button>
      </div>
      
     
     <div className={`form-container ${closeForm &&'close__form'}`} >
     <FormUsers
      createNewUser = {createNewUser}  
      updateInfo={updateInfo}
      updateUserById={updateUserById}
      setCloseForm={setCloseForm}
      />
       </div>
     
      <div className = 'user-container'>
      {
        users?.map(user =>(
          <UserCard 
          key={user.id}
          user={user}
          deleteUserById={deleteUserById}
          setUpdateInfo={setUpdateInfo}
          />
        ))
      }

      </div>
    </div>
  )
}

export default App
