"use strict";
{
    /*
    *spread operator
    *rest operator
    *destructuring
    */
    const bros1 = ['Mir', 'Firoz', 'Mizan'];
    const bros2 = ['a', 'b', 'c'];
    bros1.push(...bros2);
    console.log(...bros1, bros2);
    const mentors = {
        typescript: 'Majba',
        redux: 'Mir',
        dbms: 'Mizan'
    };
    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'nadid'
    };
    const mentorList = Object.assign(Object.assign({}, mentors), mentors2);
    // learn rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`${friend}`));
    };
    greetFriends('Abul', 'Kabul', 'tabul');
}
