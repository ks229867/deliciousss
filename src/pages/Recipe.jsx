import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
const url = "https://api.spoonacular.com/recipes/"

function Recipe() {
  const { id }  = useParams()
  const [details, setDetails] = useState({})
  const [active, setActive] = useState('instructions')
  useEffect(() =>{
    getRecipe();
  },[id])
  const getRecipe = async() =>{
    const responce = await fetch(`${url}${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const data =  await responce.json()
    setDetails(data)
    console.log(data);
  }
  return (
    <motion.div
      animate={{opacity:1}}
      initial={{opacity:0}}
      exit={{opacity:0}}
      transition={{duration:0.5}}
     className='recipe-container'>
      <div className='recipe-left'>
        <h3>{details.title}</h3>
        <div className='recipe-img'>
          <img src={details.image} alt={details.title} />
        </div>
       
      </div>
      <div className='recipe-right'>
        <div className='recipe-button'>
          <button className={active === "instructions"?"active":""} onClick={() => setActive('instructions')}>Instructions</button>
        <button className={active === "ingredients"?"active":""} onClick={() => setActive('ingredients')}>Ingredients</button>
        </div>
        {active === 'instructions' && <div className='recipe-info'>
          <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
          <h4 dangerouslySetInnerHTML={{__html:details.instructions}}></h4>
        </div>}
        {active === 'ingredients' && <div  className='recipe-info'>
          <ul>
            {details.extendedIngredients.map((item) =>{
              return <li key={item.id}><h4>{item.original}</h4></li>
            })}
          </ul>
        </div>}
      </div>
    </motion.div>
  )
}

export default Recipe