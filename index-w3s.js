let el, i;
let data = [
  { firstname: "Duban ", lastname: "Esparza ", nota: "5.0", materia: "Nuevas Tecnologias"   },
  { firstname: "Fernando", lastname: "Esparza", nota: "4.0", materia: "Programacion Web" },
  { firstname: "Jorge", lastname: "Barón", nota: "2.9", materia: "Calculo Multivariable" },
  { firstname: "Andrés", lastname: "Espinoza", nota: "4.5", materia: "Poo" },
  { firstname: "Rafael", lastname: "Pérez", nota: "3.0", materia: "Programacion Java" }
];
let panel = document.querySelector("#panel");


function clearForm() {
  document.querySelector("#fname").value = "";
  document.querySelector("#lname").value = "";
  document.querySelector("#not").value = "";
  document.querySelector("#mat").value = "";
}

function renderItem() {

  panel.textContent = "";
  data.forEach(x => {
    el = document.createElement("option");
    el.innerText = `${x.firstname} ${x.lastname} ${x.nota} ${x.materia}`;
    panel.append(el);
  });
}

function create() {
  let fn = document.querySelector("#fname").value;
  let ln = document.querySelector("#lname").value;
  let nt = document.querySelector("#not").value;
  let mt = document.querySelector("#mat").value;
  data = [...data, { firstname: fn, lastname: ln, nota: nt, materia: mt }];
  clearForm();
  console.log(data)
  renderItem();
}

function panelClick() {
  i = panel.selectedIndex;
  document.querySelector("#fname").value = data[i].firstname;
  document.querySelector("#lname").value = data[i].lastname;
  document.querySelector("#not").value = data[i].nota;
  document.querySelector("#mat").value = data[i].materia;
}

function update() {
  data[i].firstname = document.querySelector("#fname").value;
  data[i].lastname = document.querySelector("#lname").value;
  data[i].nota = document.querySelector("#not").value;
  data[i].materia = document.querySelector("#mat").value;
  renderItem();
}

function deleteItem() {
  data.splice(i, 1);
  renderItem();
}

 renderItem();