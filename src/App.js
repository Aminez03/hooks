
import './App.css';
import { moviesdata } from './data';
import React,{useState} from 'react'
import MoviesList from './Components/MoviesList';
import AddNewmovie from './Components/AddNewmovie';
import Search from './Components/Search';
import Navbar from './Components/Navbar';


function App() {
  const [data, setData] = useState(moviesdata)
  const [searching, setSearching] = useState("")
  const [rating, setRating] = useState(1)
  //edit search
  const handleSearch=(y)=>setSearching(y);
  const handleRating=(z)=>setRating(z);
  // to delete a Movie 
  const handleDelete=(ID)=>setData(data.filter(el=>el.id!==ID))
  // Add a Movie
  const handleAdd=(newMovie)=>{
    setData([...data,newMovie])}
// Edit amovie
  const handleEdit=(editmovie)=>setData(data.map(el=>el.id===editmovie.id?{...el,...editmovie}:el))
  return (
    <div className="App">
      <Navbar searching={searching} rating={rating} handleRating={handleRating} handleSearch={handleSearch}/>
      <MoviesList list={data.filter(el=>el.name.toLocaleLowerCase().includes(searching.toLocaleLowerCase())&& el.rating>=rating)} deleteMovie={handleDelete} handleEdit={handleEdit}/>
      <AddNewmovie handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
