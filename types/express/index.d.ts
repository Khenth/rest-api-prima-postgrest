import express from "express"; 

interface IUser {
    id: string,
    name: string,
    username: string,
    email: string,
    password: string,
    img: string,
    usergroupId: string,
    status: boolean,
    google : boolean,
    datecreated: string,
} 



declare global { namespace Express { interface Request { user?: IUser, farm?: Record<string,any>, files?: any, uid?: string } } }