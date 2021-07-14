const users = [
    {
    username: "renuka",
    password: "renuka!123"
}, 
{
    username: "archana", 
    password: "mummy@123"
}
];
// this function will be async function
const findUserByUsername = (username)=> {
    return users.find((user)=> user.username === username)
    
}

export const fakeAuthApi = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const user = findUserByUsername(username);
            if(user.password === password){
                resolve({ success: true, status: 200 });
            }reject({ success: false, status: 401 });

        }, 3000)

    });
};
