// Initialize function when window loads
window.onload = function() {

    // Get DOM elements
    let create = document.getElementById('create');
    let form = document.getElementById('myform');

    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let password = document.getElementById('password');
    let conPass = document.getElementById('con-pass');

    let fnameReq = document.getElementById('fname-req');
    let lnameReq = document.getElementById('lname-req');
    let emailReq = document.getElementById('email-req');
    let phoneReq = document.getElementById('phone-req');
    let passwordReq = document.getElementById('pass-req')
    let conPassReq = document.getElementById('cpass-req');

    // Regular expressions for validation
    let emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    let passwordRegex = /^(?=.*[A-Z]).{5,}$/;

    // Prevent form submission by default
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        console.log('Form submitted!'); 
    });

    // Format phone input
    phone.addEventListener('blur', function(event) {
        let val = event.target.value.replace(/\D/g, '');
    
        if (val.length === 10) {
            event.target.value = "(" + val.slice(0, 3) + ") " + val.slice(3, 6) + "-" + val.slice(6);
        } 
        else if (val.length === 11) {
            event.target.value = "+" + val.slice(0, 1) + " (" + val.slice(1, 4) + ") " + val.slice(4, 7) + "-" + val.slice(7);
        }
        else if (val.length === 12) {
            event.target.value = "+" + val.slice(0, 2) + " (" + val.slice(2, 5) + ") " + val.slice(5, 8) + "-" + val.slice(8);
        }
    });

    // Form validation on create button click
    create.addEventListener('click', function(event) {

        event.preventDefault();

        // Default validation status
        let isValid = true;

        // Check name inputs
        if (fname.value === '' || lname.value === '') {
            fnameReq.style.display = 'block';
            lnameReq.style.display = 'block';
        } else {
            fnameReq.style.display = 'none';
            lnameReq.style.display = 'none';
        }

        // Check email and phone inputs
        if (email.value === '' && phone.value === '') {
            emailReq.style.display = 'block';
            phoneReq.style.display = 'block';
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            emailReq.style.display = 'block';
        }
        else {
            emailReq.style.display = 'none';
            phoneReq.style.display = 'none';
        }

        // Check password inputs
        if (password.value !== conPass.value) {
            conPassReq.style.display = 'block';
            isValid = false;
        } else  {
                if (!passwordRegex.test(password.value)) {
                passwordReq.style.display = "block";
                isValid = false;
                } else {
                    passwordReq.style.display = "none";
                    conPassReq.style.display = "none";
                }
        }

        // Show success message if valid
        if (isValid) {
            alert('Success!');
        }
    });
}