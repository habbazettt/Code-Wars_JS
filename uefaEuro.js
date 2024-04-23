// function uefaEuro2016(teams, scores){
//     if(scores[0] > scores[1]){
//         return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
//     } else if(scores[0] < scores[1]){
//         return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
//     } else {
//         return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
//     }
// }

function uefaEuro2016(teams, scores) { 
    const [team1, team2] = teams
    const [score1, score2] = scores
    const winner = score1 > score2 ? team1 : team2
}