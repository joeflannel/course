document.addEventListener("DOMContentLoaded", function () {

    Webflow.push(function openLinkInNewTab() {

        //get the submit button and redirection url
        const formButton = document.getElementById("buttonForm")
        const formButtonUrl = formButton.getAttribute('url')

        formButton.addEventListener("click", event => {

            // Get all fields
            let formFields = document.querySelectorAll('.form-field')
            let isFieldsFilled = true

            // Check if required fields are filled
            formFields.forEach(field => {
                if (field.hasAttribute('required') && field.value.trim() === "") {
                    isFieldsFilled = false
                }
            })

            // Open URL only if all required fields are filled
            if (isFieldsFilled) {
                window.open(formButtonUrl, '_blank')
            }
        })
    })()
})