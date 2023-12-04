import React from 'react';
import { useEffect, useState } from 'react';
import { Splide,SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from 'react-router-dom';

function Popular() {
    const [popular,setPopular] = useState([])

    useEffect(() =>{
        getPopular();
    },[])

    const getPopular = async () =>{
        const check = localStorage.getItem("popular")
        if (check) {
             setPopular(JSON.parse(check));
        }else{
            const responce = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await responce.json()
            localStorage.setItem("popular", JSON.stringify(data.recipes))
            setPopular(data.recipes)
        }
    }

    const popularSliced = popular.slice(0,4)
    return (
    <section className='popular-container'>
        <h3>Popular Picks</h3>
        <section className='carousel'>
        <Splide  options={{
            perPage:4, arrow:false, pagination:false, drag:'free', gap:'3rem'
        }}
        >
        {popular.map((recipe) =>{
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
            {popularSliced.map((recipe) =>{
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

export default Popular