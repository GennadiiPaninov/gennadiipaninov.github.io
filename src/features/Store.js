import { configureStore } from "@reduxjs/toolkit";
import  testSlicer  from "./TestSlice";

const  store = configureStore({
    reducer: {
      test: testSlicer,
      
    }
  })
  
  export default store;