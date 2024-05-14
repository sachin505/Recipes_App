import { createSlice } from "@reduxjs/toolkit";

const initialState={
    recipe:{}
}
export const currentRecipeSlice = createSlice({
    name:'currentRecipeSlice',
    initialState,
    reducers:{
        addRecipe: (state,action)=>{
            const recipe ={
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                image: action.payload.image
                 
            }
            state.recipe=recipe;
        }
    }

})

export const {addRecipe} = currentRecipeSlice.actions
export default currentRecipeSlice.reducer;