import React from 'react'
import { useSelector } from 'react-redux'

export const useUser = () => {
    const currentuser = useSelector((state:any)=>state.auth.currentUser)
  return {
        user : currentuser
  }
}
