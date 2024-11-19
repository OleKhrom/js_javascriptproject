function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(2, 'John', 'Blum', 'johm.blum@gmail.com', '+3808475679'),
    new User(9, 'Kai', 'Lok', 'kai.lok@gmail.com', '+3808475890'),
    new User(4, 'Sam', 'List', 'sam.list@gmail.com', '+3808475891'),
    new User(3, 'Wendi', 'Red', 'wendi.red@gmail.com', '+3808475892'),
    new User(6, 'Olek', 'Gelb', 'olek.gelb@gmail.com', '+3808475893'),
    new User(5, 'Emili', 'Wind', 'emili.wind@gmail.com', '+3808475894'),
    new User(8, 'Iwan', 'Grass', 'iwan.grass@gmail.com', '+3808475895'),
    new User(1, 'Adrian', 'Narutowicz', 'adrian.narutowicz@gmail.com', '+3808475896'),
    new User(10, 'Nik', 'Blik', 'nik.blik@gmail.com', '+3808475897'),
    new User(7, 'Anna', 'King', 'anna.king@gmail.com', '+3808475898'),
];

function sort(user1, user2) {
    return user1.id - user2.id;
}
console.log(users.sort(sort));