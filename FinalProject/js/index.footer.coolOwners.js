let container = document.querySelector(".mainFooterLink");

container.addEventListener("click", () => {
    let mainContainer = document.querySelector(".footer__links");
    if (!container.classList.contains("clicked")) {
        let newElement = document.createElement("ul");
        newElement.className = "footer__links";
        
        const nameElement1 = document.createElement("li");
        nameElement1.className = "footer__link";
        nameElement1.textContent = "Oleksandr Nykyforchyn";
        newElement.appendChild(nameElement1);
        
        const nameElement2 = document.createElement("li");
        nameElement2.className = "footer__link";
        nameElement2.textContent = "Vlad Karanevych";
        newElement.appendChild(nameElement2);
        
        const nameElement3 = document.createElement("li");
        nameElement3.className = "footer__link";
        nameElement3.textContent = "Andrey Danylyshyn";
        newElement.appendChild(nameElement3);
        
        mainContainer.appendChild(newElement);
        container.classList.add("clicked");

        
        container.removeEventListener("click", handleClick);
    } 
});
