// Magic 8 ball 
let questionIn = document.getElementById("question")
let Span = document.getElementById("span")
// Event Listener
document.getElementById("M8B.png").addEventListener("click", Answer)

// Event Function
function Answer(){
   if (questionIn.value ==="") {
       Span.innerHTML = "Please ask a question."
   } else {
       let random = Math.random()
       if (random < 0.2){
           Span.innerHTML = "Without a Doubt."
       } else if (random < 0.4){
           Span.innerHTML = "As I see it, yes."
       } else if (random < 0.6) {
           Span.innerHTML = "Concentrate and ask again."
       }
   } 
}
