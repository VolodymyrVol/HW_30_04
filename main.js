//task 1 
// let fio = prompt("Введите ФИО: ");
// let gender = prompt("Введите пол: ");
// let age = parseInt(prompt("Введите возраст: "));
// let mail = prompt("Введите почту:");

// confirm(`ФИО: ${fio} \nПол: ${gender}\nВозраст: ${age}\ne-mail: ${mail}\n\nВсе верно?`)

//task2 
let bilnum = prompt("Введите номер билета: ");
let a1 = parseInt(bilnum[0]);
let a2 = parseInt(bilnum[1]);
let a3 = parseInt(bilnum[2]);
let a4 = parseInt(bilnum[3]);
let a5 = parseInt(bilnum[4]);
let a6 = parseInt(bilnum[5]);
firsth = a1+a2+a3;
sech = a4+a5+a6;
if (firsth == sech)
{
    document.writeln("True")
}
else
{
    document.writeln("false")
}