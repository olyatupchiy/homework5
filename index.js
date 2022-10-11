let age = prompt("Вкажіть Ваш рік народження");
let city = prompt("В якому місті Ви проживаєте?");
let sport = prompt("Ваш улюблений вид спорту?");
let cityMessage;
let sportMessage;
if (city === 'Київ') {
    cityMessage = 'Ти живеш у столиці України';
} else if (city === 'Вашингтон') {
    cityMessage = 'Ти живеш у столиці США';
} else if (city === 'Лондон') {
    cityMessage = 'Ти живеш у столиці Англії';
} else {
    cityMessage = 'Ти живеш у столиці ' + city;
}
if (sport === 'бокс') {
    sportMessage = 'Круто! Хочеш стати Олександром Усиком?';
} else if (sport === 'плавання') {
    sportMessage = 'Круто! Хочеш стати Валерієм Димо?';
} else if (sport === 'настільний теніс') {
    sportMessage = 'Круто! Хочеш стати Ярославом Жмуденко?';
} else {
    sportMessage = 'Шкода, що Ви не захотіли ввести улюблений вид спорту.';
}
alert((2022- +age) + cityMessage + sportMessage);
