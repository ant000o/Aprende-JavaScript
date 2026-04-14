function User(name, balance) {
  this.name = name;
  this.balance = balance;
}






User.prototype.deposit = function (amount) {
//   this.balance = this.balance + amount;
// MEJORA IDIOMATICA
    // this.balance += amount
    // return this.balance;


    // VALIDACION AGREGADA
    if (amount <= 0) return false
        this.balance += amount
        return true
};







// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️      MEZCLA TIPOS DE RETORNO, GENERA BUGS EN SISTEMAS REALES
// User.prototype.withdraw = function (amount) {
//     if (amount > this.balance) {
//         return `Over your balance`;     
//     } else {
//     this.balance = this.balance - amount;
//         return this.balance;
//     }
// };

// MEJORADO  ✅✅✅✅✅✅✅
User.prototype.withdraw = function(amount) {
  if (amount > this.balance) return false

  this.balance -= amount
  return true
}









// ❌❌❌❌❌❌❌❌❌ (aquí está el mayor error)
// User.prototype.transfer = function (amount, otherUser) {
//   withdraw = this.withdraw(amount);
//   if (withdraw === "number") {
//     otherUser.deposit(amount);
//     return `${amount} was transfered to ${otherUser.name}`;
//   } else {
//     return withdraw;
//   }
// };
// 💥 Problemas:
// ❌ estás sobrescribiendo variable global (withdraw)
// ❌ comparas con string 'number'
// ❌ lógica incorrecta

// ✅ Versión correcta:
User.prototype.transfer = function(amount, otherUser) {
    const success = this.withdraw(amount)

    if (!success) return "Insufficient funds"

    otherUser.deposit(amount)
    return `${amount} was transferred to ${otherUser.name}`
}










User.prototype.getInfo = function () {
  return `${this.name} has $${this.balance}`;
};







const getRichestUser = (users) => {
//   return users.reduce((max, actual) => {
//     if (actual.balance > max.balance) {
//       return actual;
//     } else {
//       return max;
//     }
//   });
// MEJORA MINIMA -> MÁS LIMPIO
    return users.reduce((max, user) =>
        user.balance > max.balance ? user : max
    )
};








const cote = new User("Cote", 5000);
const anto = new User("Anto", 7000);
console.log(cote);
console.log(cote.deposit(4000));
console.log(cote.withdraw(3000));
console.log(cote.transfer(37000, anto));
console.log(anto.getInfo());
console.log(getRichestUser([anto, cote]));
