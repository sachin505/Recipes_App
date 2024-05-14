import React from 'react'
import styles from './Recipe.module.css'
function RecipeTile({title,recipe_id,handleClick}) {
  return (
    <div className={styles.tile} onClick={()=>handleClick(recipe_id)}> 
        <h1 className={styles.tile_name}>
          {title}
        </h1>
    </div>
  )
}

export default RecipeTile