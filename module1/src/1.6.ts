{function add(number1: number, number2: number): number{
    return number1 + number2
}

add(2, 3);

const addArrow = (num1: number, num2: number):number =>{
    return num1 + num2;
}

addArrow(3, 5);

const poorUser = {
    name: 'Zia',
    balance : 0,
    addBalance(balance : number) : number{
        return this.balance + balance;
    }
}

const array : number[] = [1, 4, 5];
const newArray = array.map((element: number) :number => element * element)}