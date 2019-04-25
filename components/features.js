class Feature {
  constructor (featureElement) {
    this.featureElement = featureElement;
    this.featureTab = this.featureElement.querySelector(".feature-tab");
    this.featureDetail = this.featureElement.querySelector(".feature-details");
    this.featureTab.addEventListener('click', this.expand.bind(this));
  };

  expand() {
    this.featureDetail.setAttribute("style", "display: block");
  }
}

let features = document.querySelectorAll(".feature");
features.forEach(feature => new Feature(feature));
