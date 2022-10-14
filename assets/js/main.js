// handle show hide nav mobile
const menuIcon = document.querySelector(".menu-icon");
const nav__mobile = document.querySelector(".nav__mobile");
const closeNav = document.querySelector(".close-nav");
menuIcon.onclick = () => {
  Object.assign(nav__mobile.style, {
    transform: "translateX(0)",
  });
};

closeNav.onclick = () => {
  Object.assign(nav__mobile.style, {
    transform: "translateX(-110%)",
  });
};

// body onload call render func

let listData = data.slice(0, 6);
document.querySelector("body").onload = () => {
  render(listData);
  renderWeb(ranksWeb);
};

// render ui
const exam__list = document.querySelector(".exam__list");
function render(listData) {
  exam__list.innerHTML = listData
    .map(
      (item) => `
  <div>
  <div class="max-h-[242px] mb-6 overflow-hidden rounded-2xl">
    <img
      class="w-full img__exam"
      src="${item.image}"
      alt=""
    />
  </div>
  <h4
    class="lg:text-[16px] text-[14px] font-semibold text-[#1F2A37] leading-6 mb-8 h-[48px]"
  >
    ${item.title}
  </h4>
  <p class="mb-2 lg:text-[14px] text-[12px] text-[#A1A1AA]">
    ${item.timeday}
  </p>
  <p class="mb-8 lg:text-[14px] text-[12px] text-[#A1A1AA]">
    Số người tham gia:
    <span class="p-1 bg-[#1D98BF] text-white ml-1 rounded">${item.users}</span>
  </p>

  <button
    class="w-full border border-[#F26F21] text-[#F26F21] lg:test-[18px] text-[16px] py-2 rounded hover:bg-[#F26F21] hover:text-white anidelay"
  >
    Đăng ký
  </button>
</div>
  `
    )
    .join("");
}

// search
const searchIpt = document.querySelector(".search-ipt");
searchIpt.onkeyup = function (e) {
  const arrSearch = [];
  const textIpt = e.target.value;

  for (let i = 0; i < listData.length; i++) {
    const testText = listData[i].title.toLowerCase();

    if (testText.indexOf(textIpt.toLowerCase()) > -1) {
      arrSearch.push(listData[i]);
    }
  }

  render(arrSearch);
};

// render rank web
const ranks__lists = document.querySelector(".ranks__lists");
function renderWeb(ranksWeb) {
  ranks__lists.innerHTML = ranksWeb
    .map(
      (item) => `
    <div >
            <div class="w-[60px] h-[60px] mx-auto mb-3">
              <img
                class="w-full h-full rounded-[50%]"
                src="${item.image}"
                alt="${item.fullname}"
              />
            </div>
            <h4 class="text-center mb-2">${item.fullname}</h4>
            <div class="flex justify-center items-center mb-3">
              <img src="./assets/imgs/Vector.png" alt="" />
              <p class="md:text-[14px] text-[12px] text-[#A1A1AA] ml-2">
                Poin: <span>${item.poin}</span>
              </p>
            </div>
            <div class="skills flex flex-wrap justify-center">
              <p
                class="md:text-[14px] text-[12px] bg-[#1D98BF] rounded px-3 py-[2px] mr-3 mb-2 text-white"
              >
                Javascript
              </p>
              <p
                class="md:text-[14px] text-[12px] bg-[#1D98BF] rounded px-3 py-[2px] mr-3 mb-2 text-white"
              >
                HTML/CSS
              </p>
              <p
                class="md:text-[14px] text-[12px] bg-[#1D98BF] rounded px-3 py-[2px] mr-3 mb-2 text-white"
              >
                ReactJS
              </p>
              <p
                class="md:text-[14px] text-[12px] bg-[#1D98BF] rounded px-3 py-[2px] mr-3 mb-2 text-white"
              >
                NodeJs
              </p>
            </div>
          </div>
  `
    )
    .join("");
}

const goToTop = document.querySelector(".goToTop");

const handleScrooll = () => {
  if (window.scrollY >= 680) {
    goToTop.style.display = "flex";
  } else {
    goToTop.style.display = "none";
  }
};

goToTop.onclick = () => {
  window.location.href = "#";
};

window.addEventListener("scroll", handleScrooll);

// end GotoTop
