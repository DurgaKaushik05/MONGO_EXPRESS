document.addEventListener("DOMContentLoaded", function () {
    const deleteButtons = document.querySelectorAll(".delete");

    deleteButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            const confirmDelete = confirm(
                "Are you sure you want to delete this chat?"
            );

            if (!confirmDelete) {
                event.preventDefault();
            }
        });
    });
});