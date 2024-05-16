import React from 'react';
import styles from './SideNavBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import RecipeTile from './RecipeTile';
import { addRecipe } from '../feature/recipes/currentRecipeSlice';
function SideNavBar() {
  const {recipes} = useSelector(state=>state.recipeSlice);
  const dispatch = useDispatch();

  const handleOnClick = (id)=>{
    const selectedRecipe=recipes.filter((rcp)=>rcp.id==id)[0];
    dispatch(addRecipe(selectedRecipe));
  } 
  return (
    <div className={styles.sidenav}>
        { 
          recipes.map((recipe,i)=>
            <RecipeTile key={i} title={recipe.title} recipe_id={recipe.id} handleClick={handleOnClick}/>
          )
        }
    </div>
  )
}

export default SideNavBar