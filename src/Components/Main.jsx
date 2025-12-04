import React from "react";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../Ai";
function Main(){
    const [ingredients,setIngredients]=React.useState([])
    const ingredie=ingredients.map(ingredient=>{
        return <li key={ingredient}>{ingredient}</li>
    })
    function submitFunc(formData){
        const newIngredient=formData.get("ingredient");
        setIngredients(preIngre=>[...preIngre,newIngredient]);
    }
    const [recipe, setRecipe] = React.useState("")
    async function getRecipe() {
        const recipeMarkdown= await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }
    return(
        <main>
            <form className="ingredientName" action={submitFunc}>
                <input type="text" placeholder="e.g. Sugar" aria-labelledby="Add Ingredients" name="ingredient"/>
                <button>+ Add Ingredient</button>
            </form>
            {ingredie.length>0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe}/>}
            {recipe && <Recipe recipe={recipe}/>}
        </main>
    )
}
export default Main;