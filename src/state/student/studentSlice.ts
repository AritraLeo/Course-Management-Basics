import { Dispatch, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchStudentDetails } from "../../api";

const initialState: StudentDetails = {
    id: 0,
    name: "",
    email: "",
    coursesEnrolled: []
}




const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        getStudentDetails: (state, action: PayloadAction<StudentDetails>) => {
            return action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchStudentAsync.pending, (state) => {
                // Handle pending state if needed
            })
            .addCase(fetchStudentAsync.fulfilled, (state, action) => {
                return action.payload; // Update state with fetched student details
            })
            .addCase(fetchStudentAsync.rejected, (state, action) => {
                // Handle the error case if needed
                console.error('Error fetching student details:', action.error);
            });
    }

});

export const fetchStudentAsync = createAsyncThunk(
    "student/fetchStudentAsync",
    async () => {
        const student = await fetchStudentDetails();
        return student;
    }
)


export const { getStudentDetails } = studentSlice.actions;

export default studentSlice.reducer;

// export const fetchStudent = () => async (dispatch: Dispatch) => {
//     const studentData = await fetchStudentDetails();
//     dispatch({ type: 'courses/fetched', payload: studentData });
// };