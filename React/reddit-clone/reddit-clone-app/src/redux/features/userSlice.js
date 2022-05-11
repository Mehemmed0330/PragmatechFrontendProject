import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: null,
    userName: null,
    userEmail: null,
};
// console.log(user)

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.userName = action.payload.userName;
            state.userEmail = action.payload.userEmail;
        },
        logout: (state) => {
            state.user = null;
        }
    }
})

export const { login, logout } = userSlice.actions

export const selectUser = (state) => state.user.user
export const selectUserName = (state) => state.user.userName
export const selectUserEmail = (state) => state.user.userEmail
export default userSlice.reducer