let answers = document.querySelectorAll('#answers li');
let rightAnswer = answers[0];
let wrongAnswer1 = answers[1];
let wrongAnswer2 = answers[2];

//Votre code commence ci dessous
let newClass = document.createElement('class')
for (let i in rightAnswer){
    rightAnswer.item(i).appendChild(newClass);
}


let newClass2 = document.createElement('class');
for (let y in wrongAnswer1 , wrongAnswer2){
    rightAnswer.item(y).appendChild(newClass2);
}







