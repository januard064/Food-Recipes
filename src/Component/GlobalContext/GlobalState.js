import React,{createContext, useReducer, useEffect} from "react";

const initialState = {
  recipes: localStorage.getItem("recipes")
    ? JSON.parse(localStorage.getItem("recipes"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
          case "ADD_RECIPE_TO_LIBRARY":
            return {
              ...state,
              recipes: state.recipes.find((el) => el.idMeal === action.payload.idMeal)
                ? state.recipes
                : [action.payload, ...state.recipes],
            };
          case "REMOVE_RECIPE_FROM_LIBRARY":
            return {
              ...state,
              recipes: state.recipes.filter((recipe) => recipe.idMeal !== action.payload),
            };
      
          default:
            return state;
        }
      },initialState)

    useEffect(() => {
        localStorage.setItem("recipes", JSON.stringify(state.recipes));
      }, [state]);
    // const addToMyLibrary = (nilai) => {
    //     alert(nilai)
    // }

    const addToMyLibrary = (recipes) => {
      dispatch({ type: "ADD_RECIPE_TO_LIBRARY", payload: recipes });
      console.log('selected',recipes)
      // localStorage.setItem('react-movie-app-favorite', JSON.stringify(recipes))
    }

    const removeFromLibrary = (idMeal) => {
      dispatch({ type: "REMOVE_RECIPE_FROM_LIBRARY", payload: idMeal})
    }

    return(
        <GlobalContext.Provider
           value = {{
              library : state.recipes,
              addToMyLibrary,
              removeFromLibrary
           }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}
