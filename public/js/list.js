
// Send add POST request
const addItemHandler = async (event) => {
    event.preventDefault();
    const itemName = document.querySelector("#itemname").value.trim();
    const itemCost = parseFloat(document.querySelector("#itemcost").value.trim());
    const listId = parseInt(document.querySelector("#listItems h1").id);

    const response = await fetch("/api/items/add", {
        method: "POST",
        body: JSON.stringify({ itemName, itemCost, listId }),
        headers: { 'Content-Type': 'Application/json'}
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
};

// Send DELETE request
const deleteItemHandler = async (event) => {
    const response = await fetch("/api/items/delete", {
        method: "DELETE",
        body: JSON.stringify({ id: event.target.id }),
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.reload();
    }
};

// MODAL STUFF
document.addEventListener("DOMContentLoaded", () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add("is-active");
    }

    function closeModal($el) {
        $el.classList.remove("is-active");
    }

    document
    .querySelector("#additem-form")
    .addEventListener("submit", addItemHandler);

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll(".js-modal-trigger") || []).forEach(
        ($trigger) => {
            const modal = $trigger.dataset.target;
            const $target = document.getElementById(modal);

            $trigger.addEventListener("click", () => {
                openModal($target);
            });
        }
    );

    // Add a click event on various child elements to close the parent modal
    (
        document.querySelectorAll(".modal-background, .modal-close") || []
    ).forEach(($close) => {
        const $target = $close.closest(".modal");

        $close.addEventListener("click", () => {
            closeModal($target);
        });
    });
});

// Find all trash 
const trashCan = document.querySelectorAll("i");
for (let i = 0; i < trashCan.length; i++) {
    trashCan[i].addEventListener("click", deleteItemHandler);
}



