export function isValidEmail(email) {
    // Define a regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Check if the email matches the pattern
    return emailRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {
    // Remove spaces, +, and - from the phone number
    const cleanedPhoneNumber = phoneNumber.replace(/[+\s-]/g, '');
  
    // Check if the cleaned phone number contains only digits
    const isValid = /^\d+$/.test(cleanedPhoneNumber);
  
    return isValid;
  }
export default validatePhoneNumber