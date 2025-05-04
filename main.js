//task 1 
// let fio = prompt("Введите ФИО: ");
// let gender = prompt("Введите пол: ");
// let age = parseInt(prompt("Введите возраст: "));
// let mail = prompt("Введите почту:");

// confirm(`ФИО: ${fio} \nПол: ${gender}\nВозраст: ${age}\ne-mail: ${mail}\n\nВсе верно?`)

//task2 
// let bilnum = prompt("Введите номер билета: ");
// let a1 = parseInt(bilnum[0]);
// let a2 = parseInt(bilnum[1]);
// let a3 = parseInt(bilnum[2]);
// let a4 = parseInt(bilnum[3]);
// let a5 = parseInt(bilnum[4]);
// let a6 = parseInt(bilnum[5]);
// firsth = a1+a2+a3;
// sech = a4+a5+a6;
// if (firsth == sech)
// {
//     document.writeln("True")
// }
// else
// {
//     document.writeln("false")
// }

//task3
let min = 0;
let max = 100;

while (true)
{
    let num = Math.round((min + max) / 2);
    let answ = prompt(`1 - Ваше число > ${num}\n2 - Ваше число < ${num}\n3 - Ваше число == ${num}`)

    if (answ == '1')
    {
        min = num + 1;
    }
    else if (answ == '2')
    {  
        max = num - 1;
    }
    else if (answ == '3')
    {
        alert(`Твое число - ${num}`)
    }
    else 
    {
        alert("Введи 1, 2 или 3")
    }
}