const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            password.type = password.type === "password" ? "text" : "password";
            eyeIcon.classList.toggle("bx-show");
            eyeIcon.classList.toggle("bx-hide");
        });
    });
});      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault();
       forms.classList.toggle("show-signup");
    });
});
