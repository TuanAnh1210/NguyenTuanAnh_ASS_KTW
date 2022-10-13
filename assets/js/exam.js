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

// handle active exams
const itemsBranch = document.querySelectorAll(".branch");
const itemsBranch_mb = document.querySelectorAll(".branch_mobile");

itemsBranch.forEach((element) => {
  element.onclick = function () {
    const temp = document.querySelector(".branch.active");
    temp.classList.remove("active");
    this.classList.add("active");
    renderExams(this);
  };
});

itemsBranch_mb.forEach((element) => {
  element.onclick = function () {
    const temp = document.querySelector(".branch_mobile.active");
    temp.classList.remove("active");
    this.classList.add("active");
    renderExams(this);
  };
});

// body onload
document.querySelector("body").onload = () => {
  renderExams(document.querySelector(".branch.active"));
};

// render exams
const test__present = document.querySelector(".test__present");
const test__future = document.querySelector(".test__future");
const test__past = document.querySelector(".test__past");
let countSecond = 16;
let countMinutes = 48;
let countHours = 14;
let countDays = 18;
function renderExams(examItem) {
  // const temp = document.querySelector(".branch.active");
  const temp = examItem;
  if (temp.innerText == "Thiết kế web") {
    const listRender = examlist.filter((item) => item.branch == "Thiết kế web");
    let arrsPre = [];
    let arrsFut = [];
    let arrsPas = [];
    listRender.forEach((ele) => {
      if (ele.state == "present") {
        arrsPre.push(ele);
      } else if (ele.state == "future") {
        arrsFut.push(ele);
      } else if (ele.state == "past") {
        arrsPas.push(ele);
      }
    });
    test__present.innerHTML = arrsPre
      .map(
        (ele) => `
    <div>
    <div class="max-h-[242px] mb-6 overflow-hidden rounded-2xl">
      <img
        class="w-full img__exam"
        src="${ele.image}"
        alt="${ele.state}"
      />
    </div>
    <h4
      class="lg:text-[16px] text-[14px] font-semibold text-[#1F2A37] leading-6 mb-8 h-[48px]"
    >
      ${ele.title}
    </h4>
    <div class="flex mb-4">
      <p class="lg:text-[14px] text-[12px] text-[#A1A1AA]">
        Thời gian:
      </p>
      <div class="flex justify-between flex-1 ml-2">
        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold days"
            >11</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Days</span>
        </p>

        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold hours"
            >${countHours}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Hours</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >${countMinutes}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Minutes</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >${countSecond}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Seconds</span>
        </p>
      </div>
    </div>
    <p class="mb-8 lg:text-[14px] text-[12px] text-[#A1A1AA]">
      Số người tham gia:
      <span class="p-1 bg-[#1D98BF] text-white ml-1 rounded"
        >${ele.users}</span
      >
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

    test__future.innerHTML = arrsFut
      .map(
        (ele) => `
    <div>
    <div class="max-h-[242px] mb-6 overflow-hidden rounded-2xl">
      <img
        class="w-full img__exam"
        src="${ele.image}"
        alt="${ele.state}"
      />
    </div>
    <h4
      class="lg:text-[16px] text-[14px] font-semibold text-[#1F2A37] leading-6 mb-8 h-[48px]"
    >
      ${ele.title}
    </h4>
    <div class="flex mb-4">
      <p class="lg:text-[14px] text-[12px] text-[#A1A1AA]">
        Thời gian:
      </p>
      <div class="flex justify-between flex-1 ml-2">
        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold days"
            >${countDays}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Days</span>
        </p>

        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >${countHours}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Hours</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >${countMinutes}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Minutes</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >${countSecond}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Seconds</span>
        </p>
      </div>
    </div>
    <p class="mb-8 lg:text-[14px] text-[12px] text-[#A1A1AA]">
      Số người tham gia:
      <span class="p-1 bg-[#1D98BF] text-white ml-1 rounded"
        >${ele.users}</span
      >
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

    test__past.innerHTML = arrsPas
      .map(
        (ele) => `
    <div>
    <div class="max-h-[242px] mb-6 overflow-hidden rounded-2xl">
      <img
        class="w-full img__exam"
        src="${ele.image}"
        alt="${ele.state}"
      />
    </div>
    <h4
      class="lg:text-[16px] text-[14px] font-semibold text-[#1F2A37] leading-6 mb-8 h-[48px]"
    >
      ${ele.title}
    </h4>
    <div class="flex mb-4">
      <p class="lg:text-[14px] text-[12px] text-[#A1A1AA]">
        Thời gian:
      </p>
      <div class="flex justify-between flex-1 ml-2">
        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold days"
            >00</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Days</span>
        </p>

        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >00</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Hours</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >00</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Minutes</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >00</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Seconds</span>
        </p>
      </div>
    </div>
    <p class="mb-8 lg:text-[14px] text-[12px] text-[#A1A1AA]">
      Số người tham gia:
      <span class="p-1 bg-[#1D98BF] text-white ml-1 rounded"
        >${ele.users}</span
      >
    </p>

    <button
    disabled
      class="w-full border border-[#A1A1AA] bg-[#A1A1AA] text-white lg:test-[18px] text-[16px] py-2 rounded   "
    >
    Hết thời gian
    </button>
  </div>
    `
      )
      .join("");
  } else if (temp.innerText == "TKDH") {
    const listRender = examlist.filter((item) => item.branch == "TKDH");
    let arrsPre = [];
    let arrsFut = [];
    let arrsPas = [];
    listRender.forEach((ele) => {
      if (ele.state == "present") {
        arrsPre.push(ele);
      } else if (ele.state == "future") {
        arrsFut.push(ele);
      } else if (ele.state == "past") {
        arrsPas.push(ele);
      }
    });
    test__present.innerHTML = arrsPre
      .map(
        (ele) => `
    <div>
    <div class="max-h-[242px] mb-6 overflow-hidden rounded-2xl">
      <img
        class="w-full img__exam"
        src="${ele.image}"
        alt="${ele.state}"
      />
    </div>
    <h4
      class="lg:text-[16px] text-[14px] font-semibold text-[#1F2A37] leading-6 mb-8 h-[48px]"
    >
      ${ele.title}
    </h4>
    <div class="flex mb-4">
      <p class="lg:text-[14px] text-[12px] text-[#A1A1AA]">
        Thời gian:
      </p>
      <div class="flex justify-between flex-1 ml-2">
        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold days"
            >20</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Days</span>
        </p>

        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >${countHours}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Hours</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >${countMinutes}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Minutes</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >${countSecond}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Seconds</span>
        </p>
      </div>
    </div>
    <p class="mb-8 lg:text-[14px] text-[12px] text-[#A1A1AA]">
      Số người tham gia:
      <span class="p-1 bg-[#1D98BF] text-white ml-1 rounded"
        >${ele.users}</span
      >
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

    test__future.innerHTML = arrsFut
      .map(
        (ele) => `
    <div>
    <div class="max-h-[242px] mb-6 overflow-hidden rounded-2xl">
      <img
        class="w-full img__exam"
        src="${ele.image}"
        alt="${ele.state}"
      />
    </div>
    <h4
      class="lg:text-[16px] text-[14px] font-semibold text-[#1F2A37] leading-6 mb-8 h-[48px]"
    >
      ${ele.title}
    </h4>
    <div class="flex mb-4">
      <p class="lg:text-[14px] text-[12px] text-[#A1A1AA]">
        Thời gian:
      </p>
      <div class="flex justify-between flex-1 ml-2">
        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold days"
            >32</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Days</span>
        </p>

        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >22</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Hours</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >${countMinutes}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Minutes</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >${countSecond}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Seconds</span>
        </p>
      </div>
    </div>
    <p class="mb-8 lg:text-[14px] text-[12px] text-[#A1A1AA]">
      Số người tham gia:
      <span class="p-1 bg-[#1D98BF] text-white ml-1 rounded"
        >${ele.users}</span
      >
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

    test__past.innerHTML = arrsPas
      .map(
        (ele) => `
    <div>
    <div class="max-h-[242px] mb-6 overflow-hidden rounded-2xl">
      <img
        class="w-full img__exam"
        src="${ele.image}"
        alt="${ele.state}"
      />
    </div>
    <h4
      class="lg:text-[16px] text-[14px] font-semibold text-[#1F2A37] leading-6 mb-8 h-[48px]"
    >
      ${ele.title}
    </h4>
    <div class="flex mb-4">
      <p class="lg:text-[14px] text-[12px] text-[#A1A1AA]">
        Thời gian:
      </p>
      <div class="flex justify-between flex-1 ml-2">
        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold days"
            >00</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Days</span>
        </p>

        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >00</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Hours</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >00</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Minutes</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >00</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Seconds</span>
        </p>
      </div>
    </div>
    <p class="mb-8 lg:text-[14px] text-[12px] text-[#A1A1AA]">
      Số người tham gia:
      <span class="p-1 bg-[#1D98BF] text-white ml-1 rounded"
        >${ele.users}</span
      >
    </p>

    <button
    disabled
      class="w-full border border-[#A1A1AA] bg-[#A1A1AA] text-white lg:test-[18px] text-[16px] py-2 rounded   "
    >
    Hết thời gian
    </button>
  </div>
    `
      )
      .join("");
  } else if (temp.innerText == "UDPM") {
    const listRender = examlist.filter((item) => item.branch == "UDPM");
    let arrsPre = [];
    let arrsFut = [];
    let arrsPas = [];
    listRender.forEach((ele) => {
      if (ele.state == "present") {
        arrsPre.push(ele);
      } else if (ele.state == "future") {
        arrsFut.push(ele);
      } else if (ele.state == "past") {
        arrsPas.push(ele);
      }
    });
    test__present.innerHTML = arrsPre
      .map(
        (ele) => `
    <div>
    <div class="max-h-[242px] mb-6 overflow-hidden rounded-2xl">
      <img
        class="w-full img__exam"
        src="${ele.image}"
        alt="${ele.state}"
      />
    </div>
    <h4
      class="lg:text-[16px] text-[14px] font-semibold text-[#1F2A37] leading-6 mb-8 h-[48px]"
    >
      ${ele.title}
    </h4>
    <div class="flex mb-4">
      <p class="lg:text-[14px] text-[12px] text-[#A1A1AA]">
        Thời gian:
      </p>
      <div class="flex justify-between flex-1 ml-2">
        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold days"
            >7</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Days</span>
        </p>

        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >20</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Hours</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >${countMinutes}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Minutes</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >${countSecond}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Seconds</span>
        </p>
      </div>
    </div>
    <p class="mb-8 lg:text-[14px] text-[12px] text-[#A1A1AA]">
      Số người tham gia:
      <span class="p-1 bg-[#1D98BF] text-white ml-1 rounded"
        >${ele.users}</span
      >
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

    test__future.innerHTML = arrsFut
      .map(
        (ele) => `
    <div>
    <div class="max-h-[242px] mb-6 overflow-hidden rounded-2xl">
      <img
        class="w-full img__exam"
        src="${ele.image}"
        alt="${ele.state}"
      />
    </div>
    <h4
      class="lg:text-[16px] text-[14px] font-semibold text-[#1F2A37] leading-6 mb-8 h-[48px]"
    >
      ${ele.title}
    </h4>
    <div class="flex mb-4">
      <p class="lg:text-[14px] text-[12px] text-[#A1A1AA]">
        Thời gian:
      </p>
      <div class="flex justify-between flex-1 ml-2">
        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold days"
            >6</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Days</span>
        </p>

        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >${countHours}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Hours</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >${countMinutes}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Minutes</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >${countSecond}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Seconds</span>
        </p>
      </div>
    </div>
    <p class="mb-8 lg:text-[14px] text-[12px] text-[#A1A1AA]">
      Số người tham gia:
      <span class="p-1 bg-[#1D98BF] text-white ml-1 rounded"
        >${ele.users}</span
      >
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

    test__past.innerHTML = arrsPas
      .map(
        (ele) => `
    <div>
    <div class="max-h-[242px] mb-6 overflow-hidden rounded-2xl">
      <img
        class="w-full img__exam"
        src="${ele.image}"
        alt="${ele.state}"
      />
    </div>
    <h4
      class="lg:text-[16px] text-[14px] font-semibold text-[#1F2A37] leading-6 mb-8 h-[48px]"
    >
      ${ele.title}
    </h4>
    <div class="flex mb-4">
      <p class="lg:text-[14px] text-[12px] text-[#A1A1AA]">
        Thời gian:
      </p>
      <div class="flex justify-between flex-1 ml-2">
        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold days"
            >00</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Days</span>
        </p>

        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >00</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Hours</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >00</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Minutes</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >00</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Seconds</span>
        </p>
      </div>
    </div>
    <p class="mb-8 lg:text-[14px] text-[12px] text-[#A1A1AA]">
      Số người tham gia:
      <span class="p-1 bg-[#1D98BF] text-white ml-1 rounded"
        >${ele.users}</span
      >
    </p>

    <button
    disabled
      class="w-full border border-[#A1A1AA] bg-[#A1A1AA] text-white lg:test-[18px] text-[16px] py-2 rounded   "
    >
    Hết thời gian
    </button>
  </div>
    `
      )
      .join("");
  } else if (temp.innerText == "Marketing") {
    const listRender = examlist.filter((item) => item.branch == "Marketing");
    let arrsPre = [];
    let arrsFut = [];
    let arrsPas = [];
    listRender.forEach((ele) => {
      if (ele.state == "present") {
        arrsPre.push(ele);
      } else if (ele.state == "future") {
        arrsFut.push(ele);
      } else if (ele.state == "past") {
        arrsPas.push(ele);
      }
    });
    test__present.innerHTML = arrsPre
      .map(
        (ele) => `
    <div>
    <div class="max-h-[242px] mb-6 overflow-hidden rounded-2xl">
      <img
        class="w-full img__exam"
        src="${ele.image}"
        alt="${ele.state}"
      />
    </div>
    <h4
      class="lg:text-[16px] text-[14px] font-semibold text-[#1F2A37] leading-6 mb-8 h-[48px]"
    >
      ${ele.title}
    </h4>
    <div class="flex mb-4">
      <p class="lg:text-[14px] text-[12px] text-[#A1A1AA]">
        Thời gian:
      </p>
      <div class="flex justify-between flex-1 ml-2">
        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold days"
            >4</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Days</span>
        </p>

        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >15</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Hours</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >${countMinutes}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Minutes</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >${countSecond}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Seconds</span>
        </p>
      </div>
    </div>
    <p class="mb-8 lg:text-[14px] text-[12px] text-[#A1A1AA]">
      Số người tham gia:
      <span class="p-1 bg-[#1D98BF] text-white ml-1 rounded"
        >${ele.users}</span
      >
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

    test__future.innerHTML = arrsFut
      .map(
        (ele) => `
    <div>
    <div class="max-h-[242px] mb-6 overflow-hidden rounded-2xl">
      <img
        class="w-full img__exam"
        src="${ele.image}"
        alt="${ele.state}"
      />
    </div>
    <h4
      class="lg:text-[16px] text-[14px] font-semibold text-[#1F2A37] leading-6 mb-8 h-[48px]"
    >
      ${ele.title}
    </h4>
    <div class="flex mb-4">
      <p class="lg:text-[14px] text-[12px] text-[#A1A1AA]">
        Thời gian:
      </p>
      <div class="flex justify-between flex-1 ml-2">
        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold days"
            >${countDays}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Days</span>
        </p>

        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >${countHours}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Hours</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >${countMinutes}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Minutes</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >${countSecond}</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Seconds</span>
        </p>
      </div>
    </div>
    <p class="mb-8 lg:text-[14px] text-[12px] text-[#A1A1AA]">
      Số người tham gia:
      <span class="p-1 bg-[#1D98BF] text-white ml-1 rounded"
        >${ele.users}</span
      >
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

    test__past.innerHTML = arrsPas
      .map(
        (ele) => `
    <div>
    <div class="max-h-[242px] mb-6 overflow-hidden rounded-2xl">
      <img
        class="w-full img__exam"
        src="${ele.image}"
        alt="${ele.state}"
      />
    </div>
    <h4
      class="lg:text-[16px] text-[14px] font-semibold text-[#1F2A37] leading-6 mb-8 h-[48px]"
    >
      ${ele.title}
    </h4>
    <div class="flex mb-4">
      <p class="lg:text-[14px] text-[12px] text-[#A1A1AA]">
        Thời gian:
      </p>
      <div class="flex justify-between flex-1 ml-2">
        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold days"
            >00</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Days</span>
        </p>

        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >00</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Hours</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >00</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Minutes</span>
        </p>
        <span>:</span>

        <p class="flex flex-col items-center">
          <span
            class="text-[#1D98BF] lg:text-[18px] text-[14px] font-semibold"
            >00</span
          >
          <span class="text-[12px] text-[#A1A1AA]">Seconds</span>
        </p>
      </div>
    </div>
    <p class="mb-8 lg:text-[14px] text-[12px] text-[#A1A1AA]">
      Số người tham gia:
      <span class="p-1 bg-[#1D98BF] text-white ml-1 rounded"
        >${ele.users}</span
      >
    </p>

    <button
    disabled
      class="w-full border border-[#A1A1AA] bg-[#A1A1AA] text-white lg:test-[18px] text-[16px] py-2 rounded   "
    >
    Hết thời gian
    </button>
  </div>
    `
      )
      .join("");
  }
}

setInterval(() => {
  if (countSecond <= 0) {
    countSecond = 60;
    if (countMinutes <= 0) {
      countMinutes = 61;
      if (countHours <= 0) {
        countHours = 61;
        countDays--;
      }
      countHours--;
    }
    countMinutes--;
  }
  countSecond--;
  renderExams(document.querySelector(".branch.active"));
}, 1000);
