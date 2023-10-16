import classes from './Header.module.css'
import mealsimg from '../../Assets/meals.jpg'
import React from 'react'
const Header=props=>{
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Meals</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsimg} alt='Meals'></img>
        </div>
    </React.Fragment>
}

export default Header;