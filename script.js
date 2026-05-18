function showMessage(){
  alert("Thank you for visiting my portfolio!");
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function(event){

    event.preventDefault();

    alert("Message Sent Successfully!");
});
