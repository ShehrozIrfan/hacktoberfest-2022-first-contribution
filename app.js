function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            //check for the validation
            if(input.type === "text" && validateUser(input)){
                nextSlide(parent,nextForm);
            }else if(input.type == 'email' && validateEmail(input)){
                nextSlide(parent,nextForm)
            }else if(input.type == 'password' && validateUser(input)){
                nextSlide(parent,nextForm)
            }else{
                parent.style.animation="shake 0.5s ease";
            }
            //get rid of animation
            parent.addEventListener("animationend", () => {
            parent.style.animation="";
            });
        });
    });
}


 

function validateUser(user) {
    if (user.value.lenght < 6) {
        console.log('not enough characters');
        error('rgb(189,870,86)');
    } else {
        error('rgb(90, 289, 130)');
        return true;
    }
}


function validateEmail(email){
     const validation = /^[s@]+@[^\s@]+\.[^\s@]+$/;
     if(validation.test(email.value)){
         error("rgb(90,287,130)");
     }else{
         error("rgb(189,870,86)");
         return true;
     }
}





function nextSlide(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}


function error(color) {
    document.body.style.backgroundColor = color;
}

animatedForm();