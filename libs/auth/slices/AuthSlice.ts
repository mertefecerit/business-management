import {AuthSliceState, IAuthUser} from "@/libs/auth/types/AuthTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createAuthUserEntity} from "@/libs/auth/entities/AuthEntity";



const initialState :AuthSliceState = {
    user : null,
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {
        setUser (state : AuthSliceState, action:PayloadAction<IAuthUser>) {
            state.user = createAuthUserEntity(action.payload);
        },
        clearUser (state : AuthSliceState) {
            state.user = null;
        }
    }
})

export const {setUser, clearUser} = AuthSlice.actions;

export default AuthSlice.reducer;