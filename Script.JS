// Magic 8 ball 
let questionIn = document.getElementById("question")
let Span = document.getElementById("span")
// Event Listener
document.getElementById("M8B.png").addEventListener("click", Answer)

// Event Function
function Answer(){
   if (questionIn.value ==="") {
       Span.innerHTML = "Please ask a question."
   } else if (questionIn.value === "Does a magic 8 ball actually work?") {
       Span.innerHTML = "How dare you doubt me!"
   } else if (questionIn.value === "Is JavaScript awesome?"){
       Span.innerHTML = "Of course!"
   } else if (questionIn.value === "Is Michael an absolute stud?") {
       Span.innerHTML = "Evidence points to yes."
   } else {
       let random = Math.random()
       if (random < 0.2){
           Span.innerHTML = "Without a Doubt."
       } else if (random < 0.4){
           Span.innerHTML = "As I see it, yes."
       } else if (random < 0.6) {
           Span.innerHTML = "Concentrate and ask again."
       } else if (random < 0.8) {
           Span.innerHTML = "Don't count on it. "
       } else {
           Span.innerHTML = "Outlook not so good"
       }
   } 
}
