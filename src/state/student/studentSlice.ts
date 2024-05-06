import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
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
        getStudentDetails: (_state, action: PayloadAction<StudentDetails>) => {
            return action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchStudentAsync.pending, (_state) => {
            })
            .addCase(fetchStudentAsync.fulfilled, (_state, action) => {
                return action.payload; 
            })
            .addCase(fetchStudentAsync.rejected, (_state, action) => {
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
