
const initialNotes = [
    {
        title: "Robic zakupy",
        content: "Zakupy na dzisiejszy obiad",
        category: "Dom",
    },


    {
        title: "Pograć w kozykówke",
        content: "Pora odejśc od komputera",
        category: "Praca",
    },


    {
        title: "Iśc do biura podrózy",
        content: "Kupic bilety na Dominikane",
        category: "Podróże",
    },

]


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

    showMenuBtn.addEventListener("click", toggle);
    hideMenuBtn.addEventListener("click", toggle);
}




const noteCreator = () => {
    const titleField = document.getElementById("NoteTitle");
    const contentField = document.getElementById("NoteContent");
    const addBtn = document.getElementById("AddNoteBtn");
    const notesWrapper = document.getElementById("Notes");
    const categoryField = document.getElementById("NoteCategory");

    const addNote = (title, content, category) => {
        // <i class="bi bi-house-fill"></i>
        // <i class="bi bi-person-workspace"></i>
        // <i class="bi bi-globe2"></i>
        console.log(category, title, content);

        let iconClass = null;
        switch (category) {
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
                iconClass = null;
                break;
        }



        const note = document.createElement("div");
        note.classList.add("card");
        note.innerHTML =
            `
        <span> <i class="${iconClass}"></i> ${category}</span>
        <h3>${title}</h3>
        <p>${content}</p>

        `

        if (title.length > 2 && content.length > 5) {
            notesWrapper.appendChild(note);
        }
        else {
            alert("Nazwa bądź treść jest za krótka");
        }

        titleField.value = "";
        contentField.value = "";

    }

    addBtn.addEventListener("click", () => addNote(titleField.value, contentField.value, categoryField.value));


    initialNotes.forEach((note) => addNote(note.title, note.content, note.category));

}





const formToggler = () => {
    const formWrapper = document.getElementById("Form");
    const showFormBtn = document.getElementById("ShowForm");

    const toggleForm = () => formWrapper.classList.toggle("formOn");
    showFormBtn.addEventListener("click", toggleForm);
}




const weatherInfo = () => {
    const KEY = "e8e95d5ff4cd0eadd9759cbf6fac5e4a";

    navigator.geolocation.getCurrentPosition((location) => shovWeather(location));

    const shovWeather = async (loc) => {

        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${}&lon=${}&appid=${KEY}`;
        const result = await fetch(URL); // wyłap fetcha
        const weather = await (result).json(); //i poczekaj
        console.log(weather);

    }




    const modalWrapper = document.getElementById("Weather");
    const closeBtn = document.getElementById("closeModal");

    const closeModal = () => modalWrapper.classList.add("hideModal");
    closeBtn.addEventListener('click', closeModal);
}







//nasłuchiwanie w oknie przeglądarki
window.addEventListener("DOMContentLoaded", () => {
    menuToggler();
    noteCreator();
    formToggler();
    weatherInfo();
})


// //obiekt Math

// console.log(Math);
// const randomNum = Math.random()*10;
// const roundeNum = Math.floor(randomNum);
// console.log(Math.round(4.8));
// console.log(Math.randomNum);


// //oiekt Date

// const currentTime = new Date();
// console.log(currentTime);
