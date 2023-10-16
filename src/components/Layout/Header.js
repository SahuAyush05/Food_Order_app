import classes from './Header.module.css'
import mealsimg from '../../Assets/meals.jpg'
import React from 'react'
import HeaderCartButton from './HeaderCartButton'
const Header=props=>{
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Meals</h1>
            <HeaderCartButton></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsimg} alt='Meals'></img>
        </div>
    </React.Fragment>
}

export default Header;