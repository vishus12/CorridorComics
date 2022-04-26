import React from "react"
import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { ComicListComponent } from "./auth/comics/ComicList"
import { FavoriteComicListComponent } from "./auth/favorites/FavoriteList"


export const ApplicationViews = ({isAuthenticated, setAuthUser, getLoggedInUser}) => {
  const PrivateOutlet = () => {
		return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
	}
  
  
  return (
    <>
    <Routes>
      <Route path="/" element={<PrivateOutlet/>} >
        <Route path="/" element={<ComicListComponent setAuthUser={setAuthUser} getLoggedInUser={getLoggedInUser} />} />
        <Route path="/favorites" element={<FavoriteComicListComponent etAuthUser={setAuthUser} getLoggedInUser={getLoggedInUser} />} />
        <Route path="/favorites/create" element={""} /> 
        <Route path="/favorites/:comicId" element={""} /> 
      </Route>
      <Route path="/login" element={<Login setAuthUser={setAuthUser}/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
  )
}
