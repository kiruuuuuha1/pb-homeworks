let bonusBalance = 50000;
let purchases = 2;
const standard = 10;
const vip = 20;
const Bonus = 5;
let finalRate = 0;

if (bonusBalance > 5000) {
  finalRate = vip;
} else {
  finalRate = standard;
}
if (purchases > 1) {
  finalRate += Bonus;
}
console.log(`Процент от покупки: ${finalRate}`);