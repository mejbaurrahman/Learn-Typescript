{

// destructuring

const user = {
    id: 365,
    name: {
        firstName: 'John',
        middleName: 'kabir',
        lastName: 'Khan',
    },
    contactNo: '017000000',
    address:'Bangladesh',
    
}


const {contactNo, 
    name:{middleName : midName} // name alias, you can not use identifier as middleName:string here.
} = user;

const myFriends = ['chandler', 'joey', 'ross', 'james', 'rachel'];

const [, , bestFriend,...rest ] = myFriends;

}