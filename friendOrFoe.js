// function friend(friends){
//     let friendArr = []
//     for (let i =0; i < friends.length; i++){
//         if(friends[i].length == 4){
//             friendArr.push(friends[i])
//         }
//     }

//     return friendArr
// }

const friend = (friends) => {
    return friends.filter((name) => name.length === 4)
}

console.log(friend(["Ryan", "Kieran", "Mark"]));