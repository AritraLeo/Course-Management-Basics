import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchCourses } from "../../api";

const initialState: Course[] = []



const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
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
            .addCase(fetchCoursesAsync.pending, (_state) => {
            })
            .addCase(fetchCoursesAsync.fulfilled, (state, action) => {
                state.push(...action.payload);
            })
            .addCase(fetchCoursesAsync.rejected, (_state, action) => {
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
    markCourseCompleted } = coursesSlice.actions;
// export const selectCourses = (state: RootState) => state.courses;

export default coursesSlice.reducer;
