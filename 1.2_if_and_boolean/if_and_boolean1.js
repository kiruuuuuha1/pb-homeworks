let userName;
let userBalance;

userName = 'Vovs';
userBalance = 5600;    

if (userName === 'admin') {
  console.log('Администратор');
} else if (userName === '') {
  console.log('Гость');
} else 
    {

  if (userBalance > 5000) {
    console.log('Вип-клиент');
  } else if (userBalance > 1000) {
    console.log('Постоянный покупатель');
  } else {
    console.log('Обычный пользователь');
  }
}