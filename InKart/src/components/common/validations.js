export const EmailValidation = (email) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        return true;
    } else {
        return false;
    }
}        

export const validatePhoneNumber = (phoneNumber) => {
    // Regular expression for a basic mobile number validation
    const phoneNumberRegex = /^\d{10}$/;

    if (phoneNumberRegex.test(phoneNumber)) {
        return true;
    } else {
        return false;
    }
  };
