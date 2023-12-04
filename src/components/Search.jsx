import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function Search() {
    const [searchTerm,setSearchTerm] = useState('');

    const navigate = useNavigate();
    const handleSubmit =(e) =>{
        e.preventDefault();
        navigate('/searched/'+ searchTerm)
        setSearchTerm('')
    }
  return (
    <section className='search-container'>
        <form onSubmit={handleSubmit}>
            <div className='search-form'>
            <FaSearch />
            <input type="text" value={searchTerm} onChange={((e) => setSearchTerm(e.target.value))} />
            </div>
        </form> 
    </section>
  )
}

export default Search