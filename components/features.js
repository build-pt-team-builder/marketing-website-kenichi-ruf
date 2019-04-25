new FeatureTab(tabElement) {
  this.tabElement = tabElement;
  this.tabName = tabElement.querySelector(".feature-name");
}

new FeatureDetail {

}

let tabs = document.querySelectorAll(".feature-tab");
tabs.forEach((tab, i) => tab.setAttribute("data-tab", `${i}`));
tabs.forEach(tab => new FeatureTab(tab));
