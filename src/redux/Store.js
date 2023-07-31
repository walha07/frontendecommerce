import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/ArticleSlice"
import scategoriesReducer from "../features/scategorieSlice"
import cartSliceReducer from "../features/cartSlice"
const store = configureStore({
reducer: {
storearticles:articlesReducer,

storescategorie:scategoriesReducer,
storecart:cartSliceReducer,
}
})
export default store