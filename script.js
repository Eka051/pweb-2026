// console.log('INI ADALAH JAVASCRIPT')

// let namaMahasiswa = "Gavin";
// console.log(namaMahasiswa)

// num1 = 20;
// num2 = 10;

// console.log(num1+num2)

// let logo = document.getElementById("text-icon")
// logo.textContent = "PWEB TI";
// logo.style.color = "yellow";

// let btnUbah = document.getElementById('btn-ubah');

// btnUbah.addEventListener("click", function() {
//     let welcome = document.querySelector('.header')
//     welcome.textContent = 'WELCOME';
// } )

// DOM DINAMIS
const container = document.querySelector("#container");
const card = document.createElement("div");
const card2 = document.createElement("div")

card.textContent = "Data Mahasiswa Fasilkom";
card2.textContent = "2026"
card.classList.add("card");
card2.classList.add("card");

container.appendChild(card);
container.appendChild(card2);

// Skill Input
// id form input text
const skillinput = document.querySelector("#skillinput")
const addSkill = document.querySelector("#addSkill")
const skilllist = document.querySelector("#skilllist")

// event menambahkan data skill
addSkill.addEventListener("click", () => {
    const skill = skillinput.value

    if (skill === ""){
        return
    }

    const li = document.createElement("li")

    li.textContent = skill

    skilllist.appendChild(li)

    skillinput.value = ""
})
