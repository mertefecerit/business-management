"use client";

import React from 'react';
import {Provider} from "react-redux";
import {store} from "@/libs/app/store";

const AppStoreProvider = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default AppStoreProvider;