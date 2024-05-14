import { Provider, useSelector } from "react-redux"
import { store } from "./redux/store"
import SideNavBar from "./components/SideNavBar";
import RecipeDetails from "./components/RecipeDetails";
import styles from "./App.module.css"


function App() {
  const recipes=useSelector(state=>state.recipes)
  return (
    <div className={styles.App}>
      <SideNavBar />
      <RecipeDetails />
    </div>
  )
}

export default App
