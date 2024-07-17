import React from 'react'
import Forms from './Components/Form'

export default function CreateUser() {
  return (
    <>
    <h1 className="mt-4 mx-4">New User</h1>
      <Forms
        button="Add New User "
        navigate="dashboard/users"
        endPoint="user/create"
        IsLocalStorage={false}
        BtnStyle={true}
      />
    </>
    
    
  )
}
