import {Action} from '@ngrx/store';

export const SIGNUP='SIGNUP';
export const TRY_SIGNUP='TRY_SIGNUP';
export const SIGNIN='SIGNIN';
export const TRY_SIGNIN='TRY_SIGNIN';
export const LOGOUT='LOGOUT';
export const GETTOKEN='GETTOKEN';


export class signin implements Action{
    readonly type=SIGNIN;
}

export class try_signup implements Action{
    readonly type=TRY_SIGNUP;

    constructor(public payload:{username:string, password:string}){}
}

export class signup implements Action{
    readonly type=SIGNUP;
}

export class try_signin implements Action{
    readonly type=TRY_SIGNIN;

    constructor(public payload:{username:string, password:string}){}
}

export class logout implements Action{
    readonly type=LOGOUT;
}

export class gettoken implements Action{
    readonly type=GETTOKEN;

    constructor(public payload:string){}
}

export type AuthAction=signin|signup|logout|gettoken|try_signup|try_signin;

