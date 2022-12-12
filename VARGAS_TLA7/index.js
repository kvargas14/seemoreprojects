console.log("JS is Ready");

function signup() {
  let first = document.getElementById("thefname").value;
  let lname = document.getElementById("thelname").value;
  let email = document.getElementById("theemail").value;
  let pass = document.getElementById("thepassword").value;
  if (first === "Kenneth" && lname === "Vargas" && pass == "sample123" && email == "sample@sampler.com") {
    window.location.href="index.html";
    return false;
  }else{
    alert("Your email and password does not match. Please try again.")
  }
}

function reSet() {
  let first = (document.getElementById("thefname").value = "");
  let lname = (document.getElementById("thelname").value = "");
  let email = (document.getElementById("theemail").value = "");
  let pass = (document.getElementById("thepassword").value = "");
}
