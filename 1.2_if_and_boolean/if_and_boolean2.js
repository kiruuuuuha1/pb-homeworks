let user;
let orderOwner;

user = 'admin';
orderOwner = 'leo_tolstoy';

if (user === 'admin' || user === orderOwner) {
  console.log('Редактирование разрешено');
} else {
  console.log('Заказ нельзя редактировать');
}