"use strict";
{
    function add(number1, number2) {
        return number1 + number2;
    }
    add(2, 3);
    const addArrow = (num1, num2) => {
        return num1 + num2;
    };
    addArrow(3, 5);
    const poorUser = {
        name: 'Zia',
        balance: 0,
        addBalance(balance) {
            return this.balance + balance;
        }
    };
    const array = [1, 4, 5];
    const newArray = array.map((element) => element * element);
}
