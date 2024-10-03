{
    /*
    *spread operator
    *rest operator
    *destructuring
    */
    const bros1 : string[] = ['Mir','Firoz', 'Mizan'];
    const bros2 : string[] = ['a','b','c'];
    bros1.push(...bros2)

    console.log(...bros1, bros2)

    const mentors = {
        typescript : 'Majba',
        redux: 'Mir',
        dbms: 'Mizan'
    }

    const mentors2 = {
        prisma : 'Firoz',
        next : 'Tanmoy',
        cloud : 'nadid'
    }

    const mentorList = {
        ...mentors,
        ...mentors2
    }

    // learn rest operator

    const greetFriends = (...friends: string[]) =>{
        friends.forEach((friend: string) => console.log(`${friend}`))
    }
    greetFriends('Abul', 'Kabul', 'tabul')
}