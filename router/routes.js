Router.route('/', {
	name: 'root',
	data: function() {
		return [
			Benefits.find(),
			Figures.find(),
			Clients.find(),
			Members.find(),
			Tools.find(),
			Posts.find(),
			Quotes.find(),
			Contacts.find()
		]
	},
	waitOn: function () {
		return [
			Meteor.subscribe('benefits'),
			Meteor.subscribe('figures'),
			Meteor.subscribe('clients'),
			Meteor.subscribe('members'),
			Meteor.subscribe('tools'),
			Meteor.subscribe('posts'),
			Meteor.subscribe('quotes'),
			Meteor.subscribe('contacts')
		]
	},
	action: function () {
		if (this.ready())
			this.render('root');
		else
			this.render('loading');
	}
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/admin', {
	name: 'admin',
	data: function() {
		return [
			Posts.find(),
			Quotes.find(),
			Contacts.find()
		]
  },
  waitOn: function () {
    return [
			Meteor.subscribe('posts'),
			Meteor.subscribe('quotes'),
			Meteor.subscribe('contacts')
    ]
  },
  action: function () {
    if (this.ready())
      this.render('admin');
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/about', {
	name: 'about',
	data: function() {
		return [
			Values.find(),
	    Members.find(),
			Quotes.find(),
			Contacts.find()
		]
  },
  waitOn: function () {
    return [
			Meteor.subscribe('values'),
      Meteor.subscribe('members'),
			Meteor.subscribe('quotes'),
			Meteor.subscribe('contacts')
    ]
  },
  action: function () {
    if (this.ready())
      this.render('about');
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/portfolio', {
	name: 'portfolio',
	data: function() {
		return [
	    Tools.find(),
			Quotes.find(),
			Contacts.find()
		]
  },
  waitOn: function () {
    return [
      Meteor.subscribe('tools'),
			Meteor.subscribe('quotes'),
			Meteor.subscribe('contacts')
    ]
  },
  action: function () {
    if (this.ready())
      this.render('portfolio');
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/blog', {
	name: 'blog',
	data: function() {
		return [
	    Posts.find(),
			Quotes.find(),
			Contacts.find()
		]
  },
  waitOn: function () {
    return [
      Meteor.subscribe('posts'),
			Meteor.subscribe('quotes'),
			Meteor.subscribe('contacts')
    ]
  },
  action: function () {
    if (this.ready())
      this.render('blog');
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});
