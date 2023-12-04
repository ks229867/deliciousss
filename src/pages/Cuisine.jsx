import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { motion } from 'framer-motion'

const url = "https://api.spoonacular.com/recipes/complexSearch?"
function Cuisine() {
    const {type} = useParams()
    const [cuisines,setCusines] = useState([])
    useEffect(()=>{
        getCusine()
    },[type])

    const getCusine = async () =>{
        const responce = await fetch(`${url}apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${type}&number=9`)
        const data = await responce.json()
        console.log(data);
        setCusines(data.results)
    }
  return (
    <section className='cuisine-section'>
        <h3>{type}</h3>
        <div className='cuisine-container'>
        {cuisines.map((cuisine)=>{
            return <motion.div
            animate={{opacity:1}}
            initial={{opacity:0}}
            exit={{opacity:0}}
            transition={{duration:0.5}}
             key={cuisine.id} 
             className='cuisine'>
                <Link to={'/recipes/' + cuisine.id }>
                <img src={cuisine.image} alt={cuisine.title} />
                <h4>{cuisine.title}</h4>
                </Link>
            </motion.div>
        })}
        </div>
    </section>
  )
}

export default Cuisine