let user = 'admin';
let newOrders = 6;
let errorOrders = 3;

if (user === 'admin') {
  console.log("Привет, админ!\nПроверь, нет ли жалоб от пользователей!");
} else {
  console.log('Здравствуйте, ' + user + '! У нас новые поступления халвы!');
}

// Показываем, сколько новых заказов, а сколько заказов с ошибкой
if (newOrders > errorOrders) {
  console.log('В магазине ' + newOrders + ' новых заказов (с ошибкой: ' + errorOrders + ')');
}

if (newOrders === errorOrders) {
  console.log('ВНИМАНИЕ! Что-то идёт не так! Все новые заказы завершились ошибкой!');
}