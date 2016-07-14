FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('layout', { main: 'home' });
  }
});

FlowRouter.route('/video', {
  action: function() {
    BlazeLayout.render('layout', { main: 'video' });
  }
});