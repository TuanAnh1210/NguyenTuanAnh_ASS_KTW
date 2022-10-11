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
