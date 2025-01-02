function processForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var birthday_day = document.getElementById("birthday_day").value;
    var birthday_month = document.getElementById("birthday_month").value;
    var birthday_year = document.getElementById("birthday_year").value;

    console.log(name);
    console.log(email);
    console.log(birthday_day);
    console.log(birthday_month);
    console.log(birthday_year);

}
let detailsForm = document.getElementById("details-form");
detailsForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    // handle submit
    processForm();
  });
  