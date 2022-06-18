
const menuToggler = () => {
    const menu = document.getElementById("Menu");
    const showMenuBtn = document.getElementById("ShowMenuBtn");
    const hideMenuBtn = document.getElementById("CloseMenuBtn");

    // const showMenu = () => {
    //     console.log("Kliknięto button");
    //     // menu.style.display = "block"
    //     // menu.style.transform = "translateX(0)";
    //     menu.classList.add("menuOn");
    // }

    // const hideMenu = () => {
    //     menu.classList.remove("menuOn");
    // }


    const toggle = () => menu.classList.toggle("menuOn")

    showMenuBtn.addEventListener("click",toggle);
    hideMenuBtn.addEventListener("click",toggle);
}




const noteCreator = () => {
    const titleField = document.getElementById("NoteTitle");
    const contentField = document.getElementById("NoteContent");
    const addBtn = document.getElementById("AddNoteBtn");
    const notesWrapper = document.getElementById("Notes");
    const categoryField = document.getElementById("NoteCategory");

    const addNote = () => {
        // <i class="bi bi-house-fill"></i>
        // <i class="bi bi-person-workspace"></i>
        // <i class="bi bi-globe2"></i>

        let iconClass = null;
        switch(categoryField.value) {
            case 'Podróże':
                iconClass = "bi bi-globe2";
                break;
            case 'Praca':
                iconClass = "bi bi-person-workspace";
                break;
            case 'Dom':
                iconClass = "bi bi-house-fill";
                break;
            default:
                iconClass= null;
                break;
        }



        const note = document.createElement("div");
        note.classList.add("card");
        note.innerHTML = 
        `
        <span> <i class="${iconClass}"></i> ${categoryField.value}</span>
        <h3>${titleField.value}</h3>
        <p>${contentField.value}</p>

        `

        if (titleField.value.length > 2 && contentField.value.length > 5){
            notesWrapper.appendChild(note);
        }
        else {
            alert("Nazwa bądź treść jest za krótka");
        }

        titleField.value = "";
        contentField.value = "";
       
    }

    addBtn.addEventListener("click", addNote);


} 



const formToggler = () =>
{
    const formWrapper = document.getElementById("Form");
    const showFormBtn = document.getElementById("ShowForm");

    const toggleForm = () => formWrapper.classList.toggle("formOn");
    showFormBtn.addEventListener("click", toggleForm);
}




//nasłuchiwanie w oknie przeglądarki
window.addEventListener("DOMContentLoaded", () => {
    menuToggler();
    noteCreator();
    formToggler();
})