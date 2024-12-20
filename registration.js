document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        const validateField = (field, errorField, errorMessage, condition = true) => {
            if (!condition) {
                isValid = false;
                errorField.textContent = errorMessage;
                errorField.style.display = "block";
            } else {
                errorField.style.display = "none";
            }
        };

        validateField(
            document.getElementById("name"),
            document.getElementById("nameError"),
            "Name is required.",
            document.getElementById("name").value.trim() !== ""
        );

        validateField(
            document.getElementById("userID"),
            document.getElementById("idError"),
            "ID is required.",
            document.getElementById("userID").value.trim() !== ""
        );

        const password = document.getElementById("password").value;
        validateField(
            document.getElementById("password"),
            document.getElementById("passwordError"),
            "Password must be at least 8 characters, contain an uppercase letter, and a special character.",
            /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password)
        );

        validateField(
            document.getElementById("confirmPassword"),
            document.getElementById("confirmPasswordError"),
            "Passwords do not match.",
            password === document.getElementById("confirmPassword").value
        );

        validateField(
            document.getElementById("email"),
            document.getElementById("emailError"),
            "Enter a valid email address.",
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById("email").value)
        );

        validateField(
            document.getElementById("age"),
            document.getElementById("ageError"),
            "Enter a valid age (18 or older).",
            /^\d+$/.test(document.getElementById("age").value) && parseInt(document.getElementById("age").value) >= 18
        );

        validateField(
            document.querySelector('input[name="gender"]:checked'),
            document.getElementById("genderError"),
            "Please select your gender."
        );

        validateField(
            document.getElementById("address"),
            document.getElementById("addressError"),
            "Address is required.",
            document.getElementById("address").value.trim() !== ""
        );

        validateField(
            document.getElementById("branch"),
            document.getElementById("branchError"),
            "Please select a branch.",
            document.getElementById("branch").value
        );

        validateField(
            document.querySelectorAll('input[name="skills"]:checked').length > 0,
            document.getElementById("skillsError"),
            "Select at least one technical skill."
        );

        validateField(
            document.getElementById("resume").files.length > 0,
            document.getElementById("resumeError"),
            "Please upload your resume."
        );

        validateField(
            document.getElementById("photo").files.length > 0,
            document.getElementById("photoError"),
            "Please upload your photo."
        );

        if (!isValid) event.preventDefault();
    });
});
