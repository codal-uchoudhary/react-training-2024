'use client';
import { Store } from "@/lib/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

const StoreProvider=({children}:{children:ReactNode})=>{
    return <Provider store={Store}>{children}</Provider>
}

export default StoreProvider