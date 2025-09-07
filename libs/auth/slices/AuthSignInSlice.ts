import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuthSignInForm} from "@/libs/auth/types/AuthSignInTypes";
import {createAuthSignInFormEntity} from "@/libs/auth/entities/AuthSignInEntity";


interface AuthWithPasswordLoginSliceState {
    form : IAuthSignInForm
    isPending : boolean
    errorBag : Record<string, string[]>
    showPasswordForm : boolean
}

const initialState : AuthWithPasswordLoginSliceState = {
    form : createAuthSignInFormEntity(),
    isPending : false,
    errorBag : {},
    showPasswordForm : false

}

const AuthSignInSlice = createSlice({
    name: 'AuthWithPasswordCheckLogin',
    initialState,
    reducers : {
        setForm (state : AuthWithPasswordLoginSliceState, action:PayloadAction<Partial<IAuthSignInForm>>) {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        setIsPending (state : AuthWithPasswordLoginSliceState, action:PayloadAction<boolean>) {
            state.isPending = action.payload;
        },
        setErrorBag (state : AuthWithPasswordLoginSliceState, action:PayloadAction<AuthWithPasswordLoginSliceState['errorBag']>) {
            state.errorBag = action.payload
        },
        clearForm (state : AuthWithPasswordLoginSliceState) {
          state.form = createAuthSignInFormEntity()
        },
        clearIsPending (state : AuthWithPasswordLoginSliceState) {
            state.isPending  = false;
        },
        clearErrorBag (state : AuthWithPasswordLoginSliceState) {
            state.errorBag  = {};
        },
        setShowPasswordForm (state : AuthWithPasswordLoginSliceState, action:PayloadAction<boolean>) {
            state.showPasswordForm = action.payload;
        },
        clearShowPasswordForm (state : AuthWithPasswordLoginSliceState) {
            state.showPasswordForm  = false;
        },
    }
})

export const {
    setForm,
    setIsPending,
    setErrorBag,
    clearForm,
    clearIsPending,
    clearErrorBag,
    setShowPasswordForm,
    clearShowPasswordForm
} = AuthSignInSlice.actions;

export default AuthSignInSlice.reducer;