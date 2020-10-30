/* TASK 2 Input Mask (Credit Card Verification)- Create an elegant user experience for verifying credit card number inputs. The implementation proposed here is to create a textbox that has an underlying luhn algorithm implementation in vanilla JavaScript. */

function lundCheck(sixteenDigitString) {
   var numSum = 0;
   var value;
   for (var i = 0; i < 16; ++i) {
       if (i % 2 == 0) {
           value = 2 * sixteenDigitString[i];
           if (value >= 10) {
               value = (Math.floor(value / 10) + value % 10);
           }
       } else {
           value = +sixteenDigitString[i];
       }
       numSum += value;
   }
   return (numSum % 10 == 0);
}
 
alert(lundCheck("5594589764218858"));
alert(lundCheck("1234567898765432"));
