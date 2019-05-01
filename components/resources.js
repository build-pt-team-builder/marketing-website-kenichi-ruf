class ResourceTab {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;

    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab;

    // Check to see if this.tabData is equal to 'all'
    if(this.tabData == 'all'){
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll(".resource-card");
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(`.resource-card[data-tab=${this.tabData}]`);
    }

     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class.
    this.cards = Array.from(this.cards).map(card => new ResourceCard(card));

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', this.selectTab.bind(this));
  }

  selectTab(){

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll(".resource-tab");

    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(tab => tab.classList.remove("active-tab"))

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll(".resource-card");

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(card => card.setAttribute("style", 'display: none'));

    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add("active-tab");

    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(card => card.selectCard());
  }
}

class ResourceCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.setAttribute("style", 'display: flex');
  }

}

let tabs = document.querySelectorAll(".resource-tab").forEach(tab => new ResourceTab(tab));
