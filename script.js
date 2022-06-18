
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

    const addNote = () => {
        const note = document.createElement("div");
        note.innerHTML = 
        `
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