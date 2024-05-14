import React, { useEffect, useState } from 'react'
import styles from './RecipeDetails.module.css'
import {useSelector} from 'react-redux';
function RecipeDetails() {
      const {recipe} =useSelector(state => state.currentRecipeSlice);
  return (
     <div className={styles.main}> 
        <div className={styles.contentSection}>
        <img src={recipe.image} className={styles.img}/>
            <div className={styles.detailsSection}>
               <p><b>title :</b> {recipe.title}</p>
               <p><b>description :</b> {recipe.description}</p>
            </div>
        </div>
    </div>
  )
}

export default RecipeDetails;