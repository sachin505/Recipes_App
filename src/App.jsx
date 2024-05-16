import { Provider, useSelector } from "react-redux"
import { store } from "./redux/store"
import SideNavBar from "./components/SideNavBar";
import RecipeDetails from "./components/RecipeDetails";
import styles from "./App.module.css"
import { useEffect, useState } from "react";


function App() {
  const {recipe} = useSelector((state)=>state.currentRecipeSlice);
  const [currentRecipe,setCurrentRecipe]=useState();  
  console.log(currentRecipe);
  useEffect(()=>{
    setCurrentRecipe(recipe);
  },[recipe])

  return (
    <div className={styles.App}>
      <SideNavBar />
      {Object.keys(currentRecipe).length>1 && <RecipeDetails />}
    </div>
  )
}

export default App
