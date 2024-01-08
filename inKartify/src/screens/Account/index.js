// import { useNavigation } from "@react-navigation/native";
// import React, { useEffect, useState } from "react";
// import { View, Text, TouchableOpacity, Image, ScrollView, Modal } from "react-native";
// import HeaderCommonLeft from "../../components/CommonHeaderLeft";
// import { useDimentionsContext } from "../../context";
// import style from "./style";
// import CustomeTextInput from "../../components/CustomeTextInput";
// import CostomeBotton from "../../components/CostomeBotton";
// import ImagePicker from "react-native-image-crop-picker";
// import {validatePhoneNumber, validateEmail, updateProfileImage} from "./controller";
// import Snackbar from "react-native-snackbar";
// import color from "../../components/common/colors";
// import { useDispatch, useSelector } from "react-redux";
// import firestore  from "@react-native-firebase/firestore"; // make it sure importing firestore gitven like this.
// import { updateProfile } from "../../storage/action";

import { View, Text, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import { useDimentionsContext } from "../../context";
import { useNavigation } from "@react-navigation/native";
import HeaderCommonLeft from "../../components/CommonHeaderLeft";
import style from "./style";
import color from "../../components/common/colors";
import CustomeTextInput from "../../components/CustomeTextInput";
import CostomeBotton from "../../components/CostomeBotton";
import ImagePicker from "react-native-image-crop-picker";
import { useDispatch, useSelector } from "react-redux";
import { validateEmail, validatePhoneNumber } from "./controller";
import Snackbar from "react-native-snackbar";
import firestore from "@react-native-firebase/firestore";
import { updateProfile } from "../../storage/action";
import { updateProfileImage } from "./controller";

const Account = () => {
    const {firstName, lastName, email, mobilenumber, profileImage, userId} = useSelector(state => state); // we can aceess the global state like this 
    const [userProfileImage, setProfileImage] = useState(profileImage)
    const [FirstName, handleFirstNametext] = useState(firstName)
    const [LastName, handleLastNametext] = useState(lastName)
    const [emailID, handleEmailtext] = useState(email)
    const [mobileNumtext, setMobileNumtext] = useState(mobilenumber)
    const dispatch = useDispatch()
    // validations
    const handleUpdateProfile = async () => {
        if(FirstName != '' && LastName != '' && emailID !='' && mobileNumtext != ''){
            if(validatePhoneNumber(mobileNumtext.trim())){
                if(validateEmail(emailID.trim())){
                    let newProfileUrl = profileImage
                    if(userProfileImage !== ''){
                        // updateProfileImage is for dealing the image to firstore
                        newProfileUrl = await updateProfileImage(userProfileImage) // The await is important here
                      }

                    // console.warn('All good'); //save all data to -> firebase
                    await firestore().collection('Users').doc(userId).update({
                        firstName : FirstName,
                        lastName : LastName,
                        email : emailID,
                        mobilenumber : mobileNumtext,
                        profileImage : newProfileUrl === '' ? '' : profileImage
                    }).then(()=>{ // when profile is udated the whole information wanna to update atpresent so should create new action for profileupdate
                        dispatch(updateProfile({
                            firstName :FirstName,
                            lastName :  LastName,
                            email : emailID,
                            mobilenumber : mobileNumtext,
                            profileImage : newProfileUrl,
                        }))
                        Snackbar.show({
                            text: 'Profile is updated',
                            backgroundColor : color.EmeraldGreen,
                            duration: Snackbar.LENGTH_LONG,
                        });
                    }).catch(err=>{
                        console.warn(err)
                    })
                }else{
                    Snackbar.show({
                        text: 'Given email is not a valid email.',
                        backgroundColor : color.red,
                        duration: Snackbar.LENGTH_LONG,
                    });
                }
            }else{
                Snackbar.show({
                    text: 'Given phone number is not a valid number.',
                    backgroundColor : color.red,
                    duration: Snackbar.LENGTH_LONG,
                });
            }
        }else{
            Snackbar.show({
                text: 'Fill up all the fields to continue.',
                backgroundColor : color.red,
                duration: Snackbar.LENGTH_LONG,
            });
        }
    }

    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait);
    const navigation=useNavigation()
    //for profile image popup
    const [model, setModel] = useState(false)
    //for giving suggestion, image picker or open camera.
    const [modelChoose, setModelChoose] = useState(false)

    // console.warn(model);

    // for opening the image using modal.
    const handleOpenImage = () => {
       setModel(!model)
    }
    // for opening the suggetion.
    const handleChooseImagePicker = () => {
        setModelChoose(!modelChoose)
     }
    const handleImagePicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            setProfileImage(image.path);
            setModelChoose(false)
        });
    }

    const handleOpenCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            setProfileImage(image.path);
            setModelChoose(false)
        });
    }

    useEffect(() => {
        navigation.setOptions({
            headerLeft:()=> <HeaderCommonLeft />,
            headerTitleAlign:'left',
            headerTitleStyle:{
                fontFamily:'Lato-Bold',
                fontSize:20
                }
            }
        )
        
    }, [])
    return(
        <ScrollView showsVerticalScrollIndicator={false} style={responsiveStyle.container}>
            <View style={responsiveStyle.fullNameView}><Text style={responsiveStyle.fullNameText}>{firstName} {lastName}</Text></View>
            <TouchableOpacity style={responsiveStyle.profileImageView} onPress={handleOpenImage}>
                <Image source={userProfileImage===''? require('../../assets/images/profilePic.png') : {uri:userProfileImage}} style={responsiveStyle.profileImage}/>
            </TouchableOpacity>
            <TouchableOpacity style={responsiveStyle.penImgView} onPress={handleChooseImagePicker}>
                <Image source={require('../../assets/images/pen.png')} style={responsiveStyle.penImg} />
            </TouchableOpacity>
            <View style={responsiveStyle.detailsView}>
                <CustomeTextInput
                        value = {FirstName}
                        placeholder = {'First Name'}
                        handleText={text => handleFirstNametext(text)}
                    />
                <CustomeTextInput
                        value = {lastName}
                        placeholder = {'Last Name'}
                        handleText={text => handleLastNametext(text)}
                    />
                <CustomeTextInput
                    value={emailID}
                    placeholder = {'Email ID'}
                    type = 'email'
                    handleText={text => handleEmailtext(text)}
                    />
                <CustomeTextInput
                    value={mobileNumtext}
                    placeholder = {'Mobile Number'}
                    type = "mobile"
                    handleText={text => setMobileNumtext(text)}
                    />
            </View> 

            <View style={responsiveStyle.updateButtonView}>
                <CostomeBotton
                        type = 'primary'
                        handleButtonPress={handleUpdateProfile} 
                        buttonText={'Update Profile'}
                    />
            </View>

            {/* if we set the onRequestClose false where ever we press the model will be closed */}
            <Modal visible={model} onRequestClose={()=>setModel(false)} transparent>
                <View style={responsiveStyle.bigProfileBg}>
                    <TouchableOpacity onPress={()=>setModel(false)} style={responsiveStyle.closeView}>
                        <Image source={require('../../assets/images/close-btn.png')} style={responsiveStyle.closeBtn} />
                    </TouchableOpacity>
                    <Image source={userProfileImage==''? require('../../assets/images/profilePic.png') : {uri:userProfileImage}} style={responsiveStyle.bigProfile}/>
                </View>
            </Modal>

            {/* for popuping the selector for choosing image from gallery or open camera  */}
            <Modal visible={modelChoose} onRequestClose={()=>setModelChoose(false)} transparent>
                <View style={responsiveStyle.imagePickerModelBg}>
                    <TouchableOpacity onPress={()=>setModelChoose(false)} style={responsiveStyle.imagePickerCloseView}>
                        <Image source={require('../../assets/images/close-btn.png')} style={responsiveStyle.closeBtn} />
                    </TouchableOpacity>
                    <View style={responsiveStyle.chooseContainer}>
                        <TouchableOpacity style={responsiveStyle.galleryTouch} onPress={handleImagePicker}>
                            <Text style={responsiveStyle.galleryText}>Open Gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={responsiveStyle.openCameraTouch} onPress={handleOpenCamera}>
                            <Text style={responsiveStyle.openCameraText}>Open Camera</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </ScrollView>
    )
}

export default Account



// import {
//     View,
//     Text,
//     Image,
//     TouchableOpacity,
//     ScrollView,
//     Modal,
//   } from "react-native";
//   import React, { useEffect, useState } from "react";
//   import { useDimentionsContext } from "../../context";
//   import { useNavigation } from "@react-navigation/native";
//   import CommonHeaderLeft from "../../components/CommonHeaderLeft";
//   import style from "./style";
//   import colors from "../../components/common/colors";
//   import CustomTextInput from "../../components/CustomeTextInput";
//   import CustomButton from "../../components/CostomeBotton";
//   import ImagePicker from "react-native-image-crop-picker";
//   import { useDispatch, useSelector } from "react-redux";
//   import { validateEmail, validatePhoneNumber } from "./controller";
//   import Snackbar from "react-native-snackbar";
//   // import {
//   //   validateEmail,
//   //   validatePhoneNumber,
//   // } from "../../components/common/validation";
//   import firestore from "@react-native-firebase/firestore";
//   import { updateProfile } from "../../storage/action";
//   import { updateProfileImage } from "./controller";
  
//   const Account = () => {
//   const {firstName, lastName, email, mobilenumber, profileImage, userId} = 
//   useSelector((state) => state);
  
//     const dispatch = useDispatch();
  
//     const [fName, setFName] = useState(firstName);
//     const [lName, setLName] = useState(lastName);
//     const [phone, setPhone] = useState(mobilenumber);
//     const [StateEmail, setEmail] = useState(email)
//     const [modal, setModal] = useState(false);
//     const [modalChoose, setModalChoose] = useState(false);
//     const [userImage, setUerImage] = useState("");
//     const dimensions = useDimentionsContext();
//     const responsiveStyle = style(
//       dimensions.windowWidth,
//       dimensions.windowHeight
//     );
//     const navigation = useNavigation();
  
//     useEffect(() => {
//       navigation.setOptions({
//         headerLeft: () => <CommonHeaderLeft />,
//       });
//     }, []);
  
//     const handleOpenImage = () => {
//       setModal(!modal);
//     };
  
//     const handleEditImage = () => {
//       setModalChoose(true);
//     };
  
//     const handlePickFromGallery = () => {
//       // setModalChoose(false);
//       ImagePicker.openPicker({
//         width: 300,
//         height: 400,
//         cropping: true,
//       })
//         .then((image) => {
//           setUerImage(image.path ?? "");
//           setModalChoose(false);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     };
  
//     const handleFromCamera = () => {
//       ImagePicker.openCamera({
//         width: 300,
//         height: 400,
//         cropping: true,
//       })
//         .then((image) => {
//           setModalChoose(false);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     };
  
//     const handleUpdateProfile = async () => {
//       if (validatePhoneNumber(phone.trim())) {
//         if (validateEmail(StateEmail.trim())) {
//           if (fName !== "" && lName !== "") {
//             let newUrl = profileImage;
//             if (userImage !== "") {
//               newUrl = await updateProfileImage(userImage);
//               console.log('newUrl======>>',newUrl);
//             }
//             await firestore()
//               .collection("Users")
//               .doc(userId)
//               .update({
//                 firstName: fName,
//                 lastName: lName,
//                 email: StateEmail,
//                 mobilenumber: phone,
//                 profileimage: newUrl,
//               })
//               .then(() => {
//                 dispatch(
//                   updateProfile({
//                     firstName: fName,
//                     lastName: lName,
//                     email: StateEmail,
//                     mobilenumber: phone,
//                     profileImage: newUrl === "" ? profileImage : "",
//                   })
//                 );
//                 Snackbar.show({
//                   text: "profile is updated",
//                   duration: Snackbar.LENGTH_SHORT,
//                   backgroundColor: colors.primaryGreen,
//                   textColor: colors.white,
//                 });
//               }).catch(err=>{
//                 console.warn('errrror------>',err);
//               })
//           } else {
//             Snackbar.show({
//               text: "Please fill all the fields to continue",
//               duration: Snackbar.LENGTH_SHORT,
//               backgroundColor: colors.red,
//               textColor: colors.white,
//             });
//           }
//         } else {
//           Snackbar.show({
//             text: "Given email is not valid",
//             duration: Snackbar.LENGTH_SHORT,
//             backgroundColor: colors.red,
//             textColor: colors.white,
//           });
//         }
//       } else {
//         Snackbar.show({
//           text: "Given phone number is not valid",
//           duration: Snackbar.LENGTH_SHORT,
//           backgroundColor: colors.red,
//           textColor: colors.white,
//         });
//       }
//     };
  
//     return (
//       <ScrollView style={responsiveStyle.container}>
//         <Text style={responsiveStyle.header}>
//           {firstName} {lastName}
//         </Text>
//         <View style={responsiveStyle.userImage}>
//           <TouchableOpacity onPress={handleOpenImage}>
//             <Image
//               source={
//                 userImage === ""
//                   ? profileImage === ""
//                     ? require("../../assets/images/profilePic.png")
//                     : { uri: profileImage }
//                   : { uri: userImage }
//               }
//               style={responsiveStyle.image}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={handleEditImage}
//             style={responsiveStyle.editTouch}
//           >
//             <Image
//               source={require("../../assets/images/pen.png")}
//               style={responsiveStyle.edit}
//             />
//           </TouchableOpacity>
//         </View>
  
//         <CustomTextInput
//           handleText={(text) => setFName(text)}
//           value={fName}
//           placeholder="First Name"
//         />
//         <CustomTextInput
//           handleText={(text) => setLName(text)}
//           value={lName}
//           placeholder="Last Name"
//         />
//         <CustomTextInput
//           type="email"
//           handleText={(text) => setEmail(text)}
//           value={StateEmail}
//           placeholder="Email"
//         />
//         <CustomTextInput
//           handleText={(text) => setPhone(text)}
//           value={phone}
//           placeholder="Mobile number"
//         />
  
//         <CustomButton
//           type="primary"
//           handleButtonPress={handleUpdateProfile}
//           buttonText={"Update Profile"}
//         />
  
//         <Modal visible={modal} onRequestClose={() => setModal(false)}>
//           <View style={responsiveStyle.modalBack}>
//             <TouchableOpacity onPress={() => setModal(false)} transparent>
//               <Image
//                 source={require("../../assets/images/close.png")}
//                 style={responsiveStyle.edit}
//               />
//             </TouchableOpacity>
//             <Image source={{ uri: userImage }} style={responsiveStyle.bigImage} />
//           </View>
//         </Modal>
  
//         <Modal visible={modalChoose} onRequestClose={() => setModalChoose(false)}>
//           <View style={responsiveStyle.modalBack}>
//             <TouchableOpacity
//               onPress={() => setModalChoose(false)}
//               transparent
//               style={responsiveStyle.Choose}
//             >
//               <Image
//                 source={require("../../assets/images/close-btn.png")}
//                 style={responsiveStyle.editChoose}
//               />
//             </TouchableOpacity>
//             <View style={responsiveStyle.selectBox}>
//               <TouchableOpacity
//                 onPress={handlePickFromGallery}
//                 style={responsiveStyle.touch}
//               >
//                 <Text style={responsiveStyle.pickText}>Gallery</Text>
//               </TouchableOpacity>
  
//               <TouchableOpacity
//                 onPress={handleFromCamera}
//                 style={responsiveStyle.touch}
//               >
//                 <Text style={responsiveStyle.pickText}>Camera</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//       </ScrollView>
//     );
//   };
  
//   export default Account;    