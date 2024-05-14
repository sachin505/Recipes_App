import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    recipes:[
    {
        id:nanoid(),
        title: 'Creamy tofu curry with homemade roti',
        description: `Make a deceptively rich and filling tofu curry that's entirely vegan. The roti will take just 10 minutes to make while the curry simmers`,
        image: `https://images.immediate.co.uk/production/volatile/sites/30/2023/09/Creamy-Tofu-Curry-with-Homemade-Roti-ac90d6b.jpg`
    },
    {
        id:nanoid(),
        title : 'Classic butter chicken',
        description : `Swap your usual takeaway for homemade butter chicken (chicken makhani). The dish is made in two parts, combining tandoori chicken with a rich, buttery sauce`,
        image: `https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400`

    },
    {
        id:nanoid(),
        title : 'Channa bhatura',
        description : `Serve up a hearty Indian veggie chickpea curry served with fried bread. The addition of spices such as black cardamom impart an irresistible smoky note`,
        image: `https://media.vogue.in/wp-content/uploads/2020/08/chole-bhature-recipe.jpg`
    }
]
}

export const recipeSlice=createSlice({
    name:'recipes',
    initialState,
    reducers:{}
})

export default recipeSlice.reducer;