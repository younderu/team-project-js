let container = document.querySelector(".mainFooterLink");

container.addEventListener("click", () => {
    let mainContainer = document.querySelector(".footer__links");
    let existingElement = document.querySelector(".new-footer-links");

    if (!existingElement) {
        let newElement = document.createElement("ul");
        newElement.className = "footer__links new-footer-links"; 

        const names = ["Oleksandr Nykyforchyn", "Vlad Karanevych", "Andrey Danylyshyn"];
        names.forEach(name => {
            const nameElement = document.createElement("li");
            nameElement.className = "footer__link";
            nameElement.textContent = name;
            newElement.appendChild(nameElement);
        });

        mainContainer.appendChild(newElement);
    } else {
        mainContainer.removeChild(existingElement);
    }
});






