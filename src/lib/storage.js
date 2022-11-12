export function setHighScore(score){
    console.log(localStorage.getItem("highest"))
    if(localStorage.getItem("highest")=== null) localStorage.setItem("highest", score)
    if(localStorage.getItem("highest") > score) localStorage.setItem("highest", score)
    
}