/* eslint-disable react/prop-types */
import { createContext, useContext ,useState,useEffect} from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider=({children})=>{

    const [favorites, setfavorites] = useState([]);

    useEffect(() => {
      const storedFavs=localStorage.getItem('favorites')

      if(storedFavs) setfavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
     localStorage.setItem('favorites',JSON.stringify(favorites))
    }, [favorites])
    
    
    const addToFavorites=(movie)=>{
        setfavorites(prev=>[...prev,movie])
    }

    const removeFromFavorite=(movieId)=>{
        setfavorites(prev=>prev.filter(movie=> movie.id!==movieId))
    }

    const isFavorite=(movieId)=>{
        return favorites.some(movie=>movie.id===movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorite,
        isFavorite
    }
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>

}