import { LOGIN, SIGNOUT, UPDATECATEGORIES, UPDATEPROFILE, UPDATECARTCOUNT, UPDATEWISHLIST} from "./constance";

const initialState = {
    userId : '',
    firstName : '',
    lastName : '',
    email : '',
    mobilenumber : '',
    profileImage : '',
    isLoged : false,
    updateCategories : [],
    cartCount : 0,
    wishlistId : []
}
export const InKartReducer = (state = initialState, action) =>{

    switch (action.type) {
        case LOGIN:
            return{
                ...state,
                userId : action.payload.userId,
                firstName : action.payload.firstName,
                lastName : action.payload.lastName,
                email : action.payload.email,
                mobilenumber : action.payload.mobilenumber,
                profileImage : action.payload.profileImage,
                isLoged : true,
            };
        case SIGNOUT:
            return{
                ...state,
                userId : '',
                firstName : '',
                lastName : '',
                email : '',
                mobilenumber : '',
                profileImage : '',
                isLoged : false,
            };
        case UPDATEPROFILE:
            return{
                ...state,
                firstName : action.payload.firstName,
                lastName : action.payload.lastName,
                email : action.payload.email,
                mobilenumber : action.payload.mobilenumber,
                profileImage : action.payload.profileImage,
            };
        case UPDATECATEGORIES:
            // console.warn('action.payload.categories--->',action.payload.updateCategories)
            return{
                ...state,
                updateCategories : [...action.payload.updateCategories],
            };
        case UPDATECARTCOUNT:
            return{
                ...state,
                cartCount : action.payload.cartCount,
            }
        case UPDATEWISHLIST:
            return{
                ...state,
                wishlistId : [...action.payload.wishlistId]
            }
        default:
            return state;
    }
}