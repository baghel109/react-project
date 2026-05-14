function ArrayWorld() {
    const isLoggedIn = false
    const fruits = ["Apple","Banana","Orange"]
    let userInfo;
    // if(isLoggedIn){
    //          userInfo = {
    //         firstName: "Arjun singh",
    //         lastName: "kumar",
    //         email: "arjun@gmail.com",
    //         gender: "Male"
    //     }
    // }else{
    //          userInfo = {
    //         firstName: "Bheema kumar",
    //         lastName: "baghel",
    //         email: "bheema@yahoo.com",
    //         gender: "Male"
    //     }
    // }

    const userInfox = isLoggedIn ? 
     userInfo = {
            firstName: "Arjun singh",
            lastName: "kumar",
            email: "arjun@gmail.com",
            gender: "Male"
        }
        : 
         userInfo = {
            firstName: "deepa singh",
            lastName: "kumari",
            email: "deepa@gmail.com",
            gender: "female"
        }

    function fullName(user){
        return user.firstName+ ' '+user.lastName
    }
    return (
        <>
            <h1>Array world</h1>

            
<ul>Fruit Name:
            {fruits.map((val, index)=>(
                    <li>{index} - {val} </li> 
            ))}
    </ul>

    <h1>User Info:</h1>
<p>
    Name: {fullName(userInfo)}
</p>
<p>    Email: {userInfo.email}
</p>

<p>
    Gender: {userInfo.gender}
</p>
        </>
    )
}

export default ArrayWorld