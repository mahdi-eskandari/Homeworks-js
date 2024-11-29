// According to your js10 session, write a code that shows why we shouldn't use var?

for(let i=0; i<3; i++) {
    console.log(`number: ${i}`);
}
console.log(`${i}`);
// اگر از  let استفاده کنیم 
// نمیتونیم بیرون از loop  آن را صدا بزنیم




for(var i=0; i<3; i++) {
    console.log(`number: ${i}`);
}
console.log(`${i}`);
// اما اگر از var استفاده کنیم 
// i همه جا قابل دسترسیه

