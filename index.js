let age = prompt("Вкажіть Ваш рік народження");
if (!(age === null)) {
    let city = prompt("В якому місті Ви проживаєте?");
    if (!(city === null)) {
        let cityMessage;
        if (city === 'Київ') {
            cityMessage = 'Ти живеш у столиці України';
        } else if (city === 'Вашингтон') {
            cityMessage = 'Ти живеш у столиці США';
        } else if (city === 'Лондон') {
            cityMessage = 'Ти живеш у столиці Англії';
        } else {
            cityMessage = 'Ти живеш у місті' + city;
        }
        let sport = prompt("Ваш улюблений вид спорту?");
        if (!(sport === null)) {
            let sportMessage;
            if (sport === 'бокс') {
                sportMessage = 'Круто! Хочеш стати Олександром Усиком?';
            } else if (sport === 'плавання') {
                sportMessage = 'Круто! Хочеш стати Валерієм Димо?';
            } else if (sport === 'настільний теніс') {
                sportMessage = 'Круто! Хочеш стати Ярославом Жмуденко?';
            }
            alert((2022 - +age) + "\n" + cityMessage + "\n" + sportMessage);
        } else {
            alert('Шкода, що Ви не захотіли ввести улюблений вид спорту.');
        }
    } else {
        alert('Шкода, що Ви не захотіли ввести Ваше місто.');
    }
} else {
    alert('Шкода, що Ви не захотіли ввести Ваш вік.');
}








