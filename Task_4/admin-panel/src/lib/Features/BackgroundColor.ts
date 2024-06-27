import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import exp from 'constants';

export interface ColorState{
    value:string;
}

const intilaState:ColorState={
    value:"black"
}

export const counterSlice = createSlice({
    name:'color',
    
})