const form = document.getElementById("form");
const formButton = document.getElementById("form__button");
const user = document.getElementById("user");
const deleteBtn = document.getElementById("delete__btn");
const clearBtn = document.getElementById("clear__button");
const template = document.querySelector("template");

formButton.addEventListener("click", (e) => {
  e.preventDefault();
  reload();
  clearBtn.classList.remove("hidden");
});

// clear
clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  user.innerHTML = "";
  clearBtn.classList.add("hidden");
});

// search by name
form["form__input"].addEventListener("input", () => {
  const inputValue = form["form__input"].value.toLowerCase();
  const name = document.querySelectorAll(".user__name");

  name.forEach((item) => {
    if (item.lastElementChild.textContent.toLowerCase().includes(inputValue)) {
      item.parentElement.classList.remove("hidden");
    } else {
      item.parentElement.classList.add("hisdden");
    }
  });
});

const updateUI = (data) => {
  user.innerHTML = "";
  data.forEach((item) => {
    const { gender, name, picture, location, dob } = item;
    // const clone = template.content.cloneNode();
    // const image = clone.querySelector("#userImg");
    // const userGender = clone.querySelector("#userGender");
    // const userName = clone.querySelector("#userName");
    // const userLocation = clone.querySelector("#userLocation");
    // const userAge = clone.querySelector("#userAge");
    // image.src = picture.large;
    // userName.textContent = name;
    // userLocation.textContent = location;
    // userGender.textContent = gender;
    // userAge.textContent = dob;

    // user.appendChild(clone);

    user.innerHTML += `
    <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                id="userImg"
                class="user__img"
                alt="User photo"
                src=${picture.large}
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span id="userName">- ${name.title} ${name.first} ${name.last}</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span id="userAge">- ${dob.age} years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span id="userLocation">-${location.city}, ${location.country}</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span id="userGender">- ${gender}</span>
              </div>
            </li>
    `;
  });
};

document.addEventListener("click", (e) => {
  if (e.target.classList[0] == "user__delete--btn") {
    e.target.parentElement.remove();
  }

  if (!user.children.lenght) {
    clearBtn.classList.add("hidden");
  }
});
