import React from 'react'
import { useEffect, useState } from 'react';
import { Splide,SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from 'react-router-dom';

function Veggies() {
    const [veggie,setVeggie] = useState([])

    useEffect(() =>{
        getVeggie();
    },[])

    const getVeggie = async () =>{
        const check = localStorage.getItem("veggie")
        if (check) {
             setVeggie(JSON.parse(check));
        }else{
            const responce = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data = await responce.json()
            localStorage.setItem("veggie", JSON.stringify(data.recipes))
            console.log(data.recipes);
            setVeggie(data.recipes)
        }
    }

    const veggieSliced = veggie.slice(0,3)
  return (
    <section className='veggie-container'>
    <h3>Vegitarian Picks</h3>
    <section className='carousel'>
        <Splide options={{
            perPage:3,pagination:false, arrow:false,drag:'free',gap:'4rem'
        }}>
        {veggie.map((recipe) =>{
            return <SplideSlide key={recipe.id}>
                <div className='card'>
                    <Link to={'/recipes/' + recipe.id}>
                    <h4>{recipe.title}</h4>
                    <img src={recipe.image} alt={recipe.title} />
                    <div className='gradient'></div>
                    </Link>
                </div>
            </SplideSlide>
        })}
        </Splide>
    </section>
    <section className='non-carousel'>
            {veggieSliced.map((recipe) =>{
            return <article key={recipe.id}>
                    <div className='card'>
                        <Link to={'/recipes/' + recipe.id}>
                            <h4>{recipe.title}</h4>
                            <img src={recipe.image} alt={recipe.title} />
                            <div className='gradient'></div>
                        </Link>
                    </div>
                    </article>
        })}
        </section>
    
    </section>
  )
}

export default Veggies