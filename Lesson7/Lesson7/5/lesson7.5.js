function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}


let clients = [
    new Client(2, 'John', 'Blum', 'johm.blum@gmail.com', '+3808475679', [{title: 'book', price: 50}, {title: 'phone', price: 5000}]),
    new Client(3, 'Kai', 'Lok', 'kai.lok@gmail.com', '+3808475890', [{title: 'book', price: 50}]),
    new Client(4, 'Sam', 'List', 'sam.list@gmail.com', '+3808475891',[{title: 'book', price: 50}, {title: 'phone', price: 5000}]),
    new Client(5, 'Wendi', 'Red', 'wendi.red@gmail.com', '+3808475892',[{title: 'book', price: 50}, {title: 'phone', price: 5000}, {title: 'phone', price: 5000}]),
    new Client(6, 'Olek', 'Gelb', 'olek.gelb@gmail.com', '+3808475893', [[{title: 'book', price: 50}]]),
    new Client(7, 'Emili', 'Wind', 'emili.wind@gmail.com', '+3808475894', [{title: 'book', price: 50}]),
    new Client(8, 'Iwan', 'Grass', 'iwan.grass@gmail.com', '+3808475895', [{title: 'book', price: 50}, {title: 'phone', price: 5000}]),
    new Client(9, 'Adrian', 'Narutowicz', 'adrian.narutowicz@gmail.com', '+3808475896', [{title: 'book', price: 50}]),
    new Client(10, 'Nik', 'Blik', 'nik.blik@gmail.com', '+3808475897', [{title:'pc', price: 4000}, {title: 'phone', price: 5000}, {title: 'phone', price: 5000}, {title: 'phone', price: 5000}]),
    new Client(11, 'Anna', 'King', 'anna.king@gmail.com', '+3808475898', [{title: 'phone', price: 5000}]),
];

let sort = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sort);
