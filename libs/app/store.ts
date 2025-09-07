import {configureStore} from "@reduxjs/toolkit";
import AuthSliceReducer from "@/libs/auth/slices/AuthSlice";
import AuthWithPasswordCheckLoginSliceReducer from "@/libs/auth/slices/AuthSignInSlice";
import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";

export const store = configureStore({
    reducer: {
        Auth: AuthSliceReducer,
        AuthWithPasswordCheckLogin:AuthWithPasswordCheckLoginSliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// hooks
// store'a action'lar dispatch edilir (gönderilir)
export const useAppDispatch: () => AppDispatch = useDispatch;
// store'dan veriler seçilir (select edilir)
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;