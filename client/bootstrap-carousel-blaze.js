if (Meteor.isClient) {

  Template.hello.helpers({
    counter: function () {
      return Images.find({}).count();
    },
    images : function () {
      return Images.find({});
    },
    hasImages : function () {
      return Images.find({}).count() > 0;
    }
  });

  Template.hello.events({
    'click #add': function () {
      Images.insert({
        url : "http://placehold.it/350x150",
        message : "http://placehold.it/350x150"
      });
    },
    'click #remove': function () {
      Images.remove(Images.findOne()._id);
    }
  });
}
