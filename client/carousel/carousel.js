Template.carousel.onCreated(function () {
  this.initCarousel = () => {
    // Initialize the carousel
    if(this.carousel) {
      this.carousel.carousel({
        interval : this.data.interval || 2000
      });
    }
  };
});

Template.carousel.onRendered(function () {
  // Reference our carsole so we can access it elsewhere
  this.carousel = this.$(this.data.id);
});

Template.carousel.helpers({
  // Check to see if the image is the first index
  getInitCarousel (index) {
    return Template.instance().initCarousel;
  }
});

Template.carousel.helpers({
  // Check to see if the image is the first index
  isActive (index) {
    return index === 0 ? "active" : "";
  }
});

Template.slide.onRendered(function () {
  // Re-init the carousel on render of the child
  this.data.initCarousel();
});

Template.slide.onDestroyed(function () {
  // Re-init the carousel on render of the child
  this.data.initCarousel();
});

Template.slide.helpers({
  // Check to see if the image is the first index
  isActive (index) {
    return index === 0 ? "active" : "";
  }
});
