ocument.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        //Add Varibles from index.html (hint: Use document.get function)

        if (name && email && message) {
            alert(`Form submitted successfully!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        } else {
            alert('Please fill all the fields');
        }
    });
});
//Add additional fields
