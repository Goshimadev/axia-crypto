console.log("hi");

particlesJS.load("particle-js", "/particlesjs-config.json", function () {
  console.log("callback - particles.js config loaded");
});

const tabs = document.querySelectorAll(".tab");

function tabify(tab) {
  const tabList = tab.querySelector(".tab__list");
  console.log("hello there");

  if (tabList) {
    const tabItems = [...tabList.children];
    const tabContent = tab.querySelector(".tab__content");
    const tabContentItems = [...tabContent.children];
    let tabIndex = 0;

    tabIndex = tabItems.findIndex((item, index) => {
      return [...item.classList].indexOf("is--active") > -1;
    });

    tabIndex > -1 ? (tabIndex = tabIndex) : (tabIndex = 0);

    function setTab(index) {
      tabItems.forEach((x, index) => x.classList.remove("is--active"));
      tabContentItems.forEach((x, index) => x.classList.remove("is--active"));

      tabItems[index].classList.add("is--active");
      tabContentItems[index].classList.add("is--active");
    }

    tabItems.forEach((x, index) => x.addEventListener("click", () => setTab(index)));
    setTab(tabIndex);
    tab.querySelectorAll(".tab").forEach((tabContent) => tabify(tabContent));
  }
}

tabs.forEach(tabify);
