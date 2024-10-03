{
type frontEndDeveloper = 'fakibazDeveloper' | 'juniorDeveloper' 
const newDeveloper : frontEndDeveloper = 'juniorDeveloper'

type User = {
    name : string;
    email ? : string;
    gender: string;
    bloodGroup: "O+"|"B+"|"A+"
}

const user : User = {
    name: 'Zia',
    gender: 'Male',
    bloodGroup: 'A+'
}
}