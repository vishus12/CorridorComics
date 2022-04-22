import React, {useState} from "react"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import "./CorridorComics.css"

export const CorridorComics = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("corridorcomics_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("corridorcomics_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("corridorcomics_user") !== null)
    }
    
    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
      }
    
return (
  <>
  <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
  <ApplicationViews setAuthUser={setAuthUser}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}/>
  </>
)}
