let start = document.getElementById("start")

let body = document.body;
let title;
let input;
let preTitle;

let image1;
let image2;


start.addEventListener('click', ()=>{
    // удалить элемент со страницы
    start.parentNode.removeChild(start);
    title = document.createElement("h1");
    input = document.createElement("INPUT");

    title.textContent = "Введите Ваше имя";
    body.append(title);
    body.append(input);

    // событие, которое обрабатывает событие, после ввода имени и  после нажатия на клавишу Enter
input.addEventListener('keyup',(event)=>{
    if (event.code == "Enter" && input.value !=""){ 
        title.textContent = "Добро пожаловать, " + input.value;
        input.parentNode.removeChild(input);

    //    запустить первый уровень

    setTimeout(()=>{
        title.parentNode.removeChild(title);
        iloveMath();
    }, 3000); 
    }

})
})



// вопрос и ответ, следующий уровень
// создаем первый уровень
// напишем единую функцию, которая создает уровень, т.е. будем вызывать эту функцию для создания уровня.

function createTextLevel(question, answer, nextLevel){
        title = document.createElement("h1");
        input = document.createElement("input");
        preTitle = document.createElement("p");

        title.textContent = question;

        body.append(title);
        body.append(input);
        body.append(preTitle);

        // вводим ответ правильно или неправильно (проверка ответа)
        // Когда ответ у нас буквенный, правильный ответ будет зависеть от регистра. Давайте зададим
// команду toLowerCase()  - метод строк, для перевода ответа пользователя в маленькие буквы (нижний регистр). Это команда преобразует любую строку
// в сторку с маленькими буквами. Т.е. любой ответ пользователя, мы будем преобразовывать в нижний регистр. Причем на численный ответ это
// никак не повлияет.

        input.addEventListener('keyup',(event)=>{
            if (event.code == "Enter" && input.value !=""){ 
           if (input.value == answer){
            input.parentNode.removeChild(input);
            preTitle.textContent = "Верно!";
            // через 3 секунды запускаем второй уровень

            setTimeout(()=>{
                title.parentNode.removeChild(title);
                preTitle.parentNode.removeChild(preTitle);
                if (nextLevel != null){
                    nextLevel();
            }
        }, 3000); 
           }
        //    если введенный ответ неверный
        else{
            preTitle.textContent = "Неверно!";
            input.value = "";
        }
            }
        
        })

}

// теперь для создания уровня, нам будет достаточно написать функцию (в скобках указываем: вопрос, правильный ответ и ссылка на следующий уровень)
function iloveMath(){
    createTextLevel("Сколько будет 2*8?", 16, iloveGeography); 
}

function iloveGeography(){
    createTextLevel("Назовите столицу Бразилии", "Бразилиа", iloveBiology); 
}

function iloveBiology(){
    createTextLevel("Из какого дерева делают спички?", "осина", iLoveMountains); 
}

// Помимо текстовых уровней, можносоздавать уровни с картинкой. Создадим задание, в котором
// пользователю будет предложено две картинки, нужно будет выбрать одну из них. Возьмем Эльбрус и Эверест.
// Будем спрашивать на какой картинке изображен Эверест? 
// Функции задажим параметры: вопрос, ссылка на первую картинку, ссылка нв вторую картинку и след.уровень

    // Создадим title, preTitle, h1 (для задания) и тэг р (для того,чтобы вводить: "Правильно!" или "Неправильно!") и два тэга,
    // чтобы поместить туда картинки.

    function createIMGLevel(question, truelink1, falselink2, nextLevel){
    
    title = document.createElement("h1");
    input = document.createElement("input");
    preTitle = document.createElement("p");
    // создаем разметку, создаем тэг img
    image1 = document.createElement("img");
    image2 = document.createElement("img"); 
    // Эти тэги нужно добавить в body, чтобы они отобразились на странице.

    title.textContent = question;

    body.append(title);
    body.append(preTitle);
    body.append(image1);
    body.append(image2);

        // Но мало создать просто тэг img, этому тэгу мы прописываем атрибут src - адрес картинки (либо локальный, на компьютере, 
    // либо из сети). У нас картинки скачаны и локально хранятся в папке на нашем компьтере. Нам нужно обратиться к атрибуту src
    // Для этого мы обращаемся к тэгу, в котором лежит картинка и через точку обращаемся к src
    // А ссылку мы передадим через параметры link1 и link2.

    image1.src = truelink1;
    image2.src = falselink2;

    // Мы решили, что клик по одной картинке - это правилно, а клик по другой картинке - это неправильно. 
    // Поэтому мы обрабатываем клики по картинкам. Нам нудно два addEventListener
    // Кликнули по первой картинке, дальше пропишем стрелочную функцию без условий.
    // Кликнули по второй картинке, дальше пропишем стрелочную функцию без условий.
// У нас клик по одной картинке - правильный ответ (true), а клик по другой картинке - false/

    image1.addEventListener('click', ()=>{
        // удаление картинки. Т.е. мы выбрали картинку, кликнули по ней и со страницы удаляем обе картинки, 
        // чтобы перейти на следующий уровень через 3 секунды.
image1.parentNode.removeChild(image1);
image2.parentNode.removeChild(image2);
preTitle.textContent = "Верно!";

// копируем весь setTimeout и вставляем
setTimeout(()=>{
    title.parentNode.removeChild(title);
    preTitle.parentNode.removeChild(preTitle);
    if (nextLevel != null){
        nextLevel();
}
}, 3000); 
})

// это мы кликнули по правильной картинку. А теперь прпопишем событие, которое произойдет,
// если пользователь кликнет по неправильной картинке.
    image2.addEventListener('click', ()=>{
        preTitle.textContent = "Неверно!";

    })

}
// Мы создали общий вид. Теперь нам нужно создать функцию, которая будет вызывать уровень с картинкой.
function iLoveMountains(){
    createIMGLevel("На какой картинке Эверест?", "./image/Эверест.jpg", "./image/Эльбрус.jpg", null);
}

// для тэгов img зададим стили