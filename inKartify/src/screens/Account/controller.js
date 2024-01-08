import storage from "@react-native-firebase/storage";
import { Platform } from "react-native";
import RNFetchBlob from "rn-fetch-blob";

export const updateProfileImage = async (image) => {
  return new Promise(async resolve => {
    try {
      const filename = image.substring(image.lastIndexOf("/") + 1);
      // console.warn('filename==>>',filename)
      const pathForFirebaseStorage = await getPathForFirebaseStorage(image);
      // console.warn('pathForFirebaseStorage==>>',pathForFirebaseStorage)

      await storage().ref(filename).putFile(pathForFirebaseStorage).then().catch(err=>{
        // console.warn('err2===>>',err)
      })
      await storage().ref(filename).getDownloadURL().then(url => {
        // console.log('resolve---url--->',url);
        resolve(url);
      }).catch(err=>{
        console.warn('err1=====>>>',err)
      })

    } catch (error) {
      console.warn('newerror==>>',error)
    }
  });
};

const getPathForFirebaseStorage = async uri => {
  if(Platform.OS === 'ios') {
    return uri;
  }
  const stat = await RNFetchBlob.fs.stat(uri);
  return stat.path;
}


// import storage from "@react-native-firebase/storage";
// import { Platform } from "react-native";
// import RNFetchBlob from "rn-fetch-blob"

// export const updateProfileImage = async (image) => {

//     return new Promise(async resolve => {           // we should do the think is resolve uri
//         try {
//             const fileName =  image.substring(image.lastIndexOf('/')+1)         // Excluding unnecessory slashes
//             const pathForFirbaseStorage = await getPathForFirebaseStorage(image);

//             // given code is for storing the image path to firebase
//             await storage().ref(fileName).putFile(pathForFirbaseStorage);
//             // getting the above stored image url from firbase storage
//             await storage().ref(fileName).getDownloadURL().then(url=>{
//                 resolve(url)
//             })
            
//         } catch (error) {
//             console.warn('error------>>',error)
//         }
//     })
// }

// const getPathForFirebaseStorage = async (image) => {
//     if(Platform.OS=='ios'){
//         return image
//     }else{
//         const stat = await RNFetchBlob.fs.stat(image) // to getting the correct path of the image url in our system
//         return stat.path
//     }
// }


export const validatePhoneNumber = (phoneNumber) =>{
    // Define the regex pattern for Indian phone numbers
    var phonePattern = /^(0|\+91)?[789]\d{9}$/;
  
    // Test the phone number against the pattern
    return phonePattern.test(phoneNumber);
}

export const validateEmail = (email) => {
    // Define the regex pattern for email validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // console.warn(emailPattern.test(email));
    // Test the email against the pattern
    return emailPattern.test(email);
}