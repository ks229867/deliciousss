import React from 'react'
import {FaPizzaSlice, FaHamburger} from "react-icons/fa" 
import {GiNoodles, GiChopsticks} from "react-icons/gi"
import { NavLink } from 'react-router-dom'
function Category() {
  return (
    <section className='category-section'>
    <NavLink to="/cuisine/Italian" className='category'>
      <div className='category-icon'>
      <FaPizzaSlice />
      </div>
      <h4>Italian</h4>
    </NavLink>
    <NavLink to="/cuisine/American" className='category'>
    <div className='category-icon'>
    <FaHamburger />
    </div>
      <h4>American</h4>
    </NavLink>
    <NavLink to="/cuisine/Thai" className='category'>
    <div className='category-icon'>
    <GiNoodles />
    </div>
      <h4>Thai</h4>
    </NavLink>
    <NavLink to="/cuisine/Japanese" className='category'>
    <div className='category-icon' >
    <GiChopsticks />
    </div>
      <h4>Japanese</h4>
    </NavLink>
    </section>
  )
}

export default Category