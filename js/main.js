// ! Window Scroll
// ! =============================================
window.onscroll = () => {

  // sticky navbar & backtotop button
  var navbar = document.getElementById("navbar"); //get navbar
  var fixed = navbar.offsetTop; //get top offset of navbar
  if (window.pageYOffset > fixed) {
    navbar.classList.add("fixed")
  } else {
    navbar.classList.remove("fixed");
  }

};



// for sending email

function sendmail() {
  // e.preventDefault();
  $("#submit-btn").attr("disabled", true);

  var name = $("#contact-name").val();
  var email = $("#contact-email").val();
  var number = $("#contact-number").val();
  var message = $("#contact-message").val();
  var body = "<b>Name</b> : " + name + "<br> <b>Email</b> : " + email + "<br> <b>Contact</b>: " + number + "<br> <b>Message</b>: " + message;


  Email.send({
    Host: "smtp.gmail.com",
    Username: "",     //host username/email
    Password: "",     //password of host/email is pending
    To: 'indiahelpinghands07@gmail.com',   //receiver email address
    From: email,
    Subject: name + " wants to send you a message",
    Body: body
  }).then(
    message => {
      if (message == "OK") {
        alert("We got your message. We will reach out to you very soon.");
        $("#submit-btn").attr("disabled", false);
        $("#contact-form").trigger("reset");
      } else {
        alert(message);
      }
    }
  );

}