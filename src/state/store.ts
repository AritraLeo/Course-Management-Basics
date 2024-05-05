import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./courses/coursesSlice";
import { useDispatch, useSelector } from "react-redux";
import studentSlice from "./student/studentSlice";


export const store = configureStore({
    reducer: {
        coursesSlice,
        studentSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()