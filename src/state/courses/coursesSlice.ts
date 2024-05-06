import { Dispatch, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchCourses } from "../../api";

const initialState: Course[] = []



const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        // getCourses: (state, action: PayloadAction<Course[]>) => {
        //     return action.payload;
        // },
        markCourseCompleted: (state, action) => {
            const course = state.find((c) => c.id === action.payload);
            if (course) {
              course.completed = true;
              course.progress = 100;
            }
          },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoursesAsync.pending, (state) => {
                // Handle the pending state if needed
            })
            .addCase(fetchCoursesAsync.fulfilled, (state, action) => {
                // Update the state with the fetched courses
                state.push(...action.payload);
            })
            .addCase(fetchCoursesAsync.rejected, (state, action) => {
                // Handle the error case if needed
                console.error('Error fetching courses:', action.error);
            });
    }
});

export const fetchCoursesAsync = createAsyncThunk(
    "courses/getCoursesAsync",
    async () => {
        const courses = await fetchCourses();
        return courses;
    }
)


export const { 
    // getCourses, 
    markCourseCompleted } = coursesSlice.actions;
// export const selectCourses = (state: RootState) => state.courses;

export default coursesSlice.reducer;


// export const fetchAllCourses = () => async (dispatch: Dispatch) => {
//     const coursesData = await fetchCourses();
//     dispatch({ type: 'courses/fetched', payload: coursesData });
// };