let age = prompt("Вкажіть Ваш рік народження");
if (age === null){
    alert('Шкода, що Ви не захотіли ввести Ваш вік.');
}
let cityMessage;
let sportMessage;
let city = prompt("В якому місті Ви проживаєте?");
if (city === null) {
    alert('Шкода, що Ви не захотіли ввести Ваше місто.');
}
let sport = prompt("Ваш улюблений вид спорту?");
if (sport === null) {
    alert('Шкода, що Ви не захотіли ввести улюблений вид спорту.');
}
if (city === 'Київ') {
    cityMessage = 'Ти живеш у столиці України';
} else if (city === 'Вашингтон') {
    cityMessage = 'Ти живеш у столиці США';
} else if (city === 'Лондон') {
    cityMessage = 'Ти живеш у столиці Англії';
} else {
    cityMessage = 'Ти живеш у місті' + city;
}
if (sport === 'бокс') {
    sportMessage = 'Круто! Хочеш стати Олександром Усиком?';
} else if (sport === 'плавання') {
    sportMessage = 'Круто! Хочеш стати Валерієм Димо?';
} else if (sport === 'настільний теніс') {
    sportMessage = 'Круто! Хочеш стати Ярославом Жмуденко?';
}
    alert((2022- +age) + "\n" + cityMessage + "\n" + sportMessage);

