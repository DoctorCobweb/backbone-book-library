// site/js/views/book.js

var app = app || {};

app.BookView = Backbone.View.extend({
  tagName: 'div',
  className: 'bookContainer',
  template: _.template( $( '#bookTemplate').html() ),

  events: {
    'click .delete': 'deleteBook'
  },

  deleteBook: function () {
    //delete model
    this.model.destroy();

    //delete view
    this.remove();
  },

  render: function () {
    //this.el is what we defined in tagName. Use $el to get access to jQuery html() function
    this.$el.html( this.template( this.model.toJSON() ));

    return this;
  }
});
