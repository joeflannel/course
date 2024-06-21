document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("openModalBtn")
    const closeModalBtn = document.getElementById("closeModalBtn")
    const closeModalCross = document.getElementById("closeModalCross")
    const modal = document.getElementById("myModal")

    // Function to toggle display-none class
    function toggleModal() {
        modal.classList.toggle("display-none")
    }

    // Open modal when clicking on the open button
    openModalBtn.addEventListener("click", toggleModal)

    // Close modal when clicking on the close button inside the modal
    closeModalBtn.addEventListener("click", toggleModal)

    // Close modal when clicking on the close cross inside the modal
    closeModalCross.addEventListener("click", toggleModal)

})