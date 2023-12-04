import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const url = "https://api.spoonacular.com/recipes/complexSearch?"

function Searched() {
    const {search} = useParams()
    const [searchResult,setSearchResult] = useState([])
    
    useEffect(() =>{
        getSearchedItem()
    },[search])
    const getSearchedItem = async () =>{
        const responce = await fetch(`${url}apiKey=${process.env.REACT_APP_API_KEY}&query=${search}`)
        const data = await responce.json()
        setSearchResult(data.results)
    }
  return (
    <div className='searched-container'>
    <div className='search-cuisines'>
        {searchResult.map((item) =>{
            return <motion.div
            animate={{opacity:1}}
            initial={{opacity:0}}
            exit={{opacity:0}}
            transition={{duration:0.5}}
             key={item.id} className="search-item">
                <Link to={'/recipes/' + item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                </Link>
            </motion.div>
        })}
    </div>
    </div>
  )
}

export default Searched