function validatePhoneNumber(phoneNumber) {
    // Remove spaces, +, and - from the phone number
    const cleanedPhoneNumber = phoneNumber.replace(/[+\s-]/g, '');
  
    // Check if the cleaned phone number contains only digits
    const isValid = /^\d+$/.test(cleanedPhoneNumber);
  
    return isValid;
  }
export default validatePhoneNumber

export function hasSpecialCharacter(otp) {
    // Check if the OTP contains a special character
    return !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(otp)
}
