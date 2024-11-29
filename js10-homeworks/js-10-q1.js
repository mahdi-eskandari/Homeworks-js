// Using an example, explain the difference between block,global and function scope in variables.




// global function
// این نوع فانکشن را میتوان در هر جای فایل صدا زد و اجرا کرد
function globalFunction() {
console.log("my name is Mahdi Eskandari");
}
globalFunction()


// block function
// و اما این نوع از فانکشن که فقط درون یکسری بلوک ها
// مانند  loop  ها
// قابل دسترسی هستند
for (let i = 1; i <= 3; i++) {
    function blockFunction() {
      console.log(`Loop: ${i}`);
    }
  
    blockFunction();
  }