import { LOGIN, SIGNOUT, UPDATECATEGORIES, UPDATEPROFILE } from "./constance";

export const login = data =>({
    type : LOGIN,
    payload:{
        userId : data.userId,
        firstName : data.firstName,
        lastName : data.lastName,
        email : data.email,
        mobilenumber : data.mobilenumber,
        profileImage : data.profileImage,
    }
})

export const signOut = data =>({
    type : SIGNOUT,
    payload:{}
})

export const updateProfile = data =>({
    type : UPDATEPROFILE,
    payload : {
        firstName : data.firstName,
        lastName : data.lastName,
        email : data.email,
        mobilenumber : data.mobilenumber,
        profileImage : data.profileImage,
    }
})

export const updateCategories = data =>({
    type : UPDATECATEGORIES,
    payload : {
        updateCategories : data
    }
})