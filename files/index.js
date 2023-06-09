const first_container = document.getElementById("first_container");
const second_container = document.getElementById("second_container");
const btn = document.getElementById("btn");
const success = document.getElementById("success");

const lists = document.getElementsByClassName("list");

//Reset btn
btn.addEventListener("click", () => {
  location.reload();
});

//geting list item
for (list of lists) {
  list.addEventListener("dragstart", (e) => {
    let selected = e.target;

    //Second container drag event
    second_container.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    second_container.addEventListener("drop", (e) => {
      second_container.appendChild(selected); // Add drag item in second container
      selected = null;
      success.style.display = "block"; //Show success message
      setTimeout(() => {
        success.style.display = "none";
      }, 1000); //Hide success message
    });

    //First container drag event
    first_container.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    first_container.addEventListener("drop", (e) => {
      first_container.appendChild(selected); // Add drag item in first container
      selected = null;
      success.style.display = "block"; //Show success message

      setTimeout(() => {
        success.style.display = "none";
      }, 1000); //Hide success message
    });
  });
}
