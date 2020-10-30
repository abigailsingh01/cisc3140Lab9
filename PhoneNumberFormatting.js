/* TASK 1 Input Mask (Phone Number Formatting)- The objective is to create an input mask that formats telephone numbers in real-time. It should present a user entered phone number xxxxxxxx as something like xxx-xxx-xxxx. Note: Choosing the - here as it is slightly easier to implement than with () characters for (XXX) XXX - XXXX. We will assume US phone numbers to keep it simple. The presented example uses Brooklyn College's phone number, 718-951-5000 */

let formatPhoneNumber = (str) => {
 //Filter only numbers from the input
 let cleaned = ('' + str).replace(/\D/g, '');
  //Check if the input is of correct length
 let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
 
 if (match) {
   return '(' + match[1] + ') ' + match[2] + '-' + match[3]
 };
 
 return null
};
 
Input:
console.log(formatPhoneNumber('7189515000'));

