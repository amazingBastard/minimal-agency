function loadFixture(fixtures, collection) {
  var i;

  for (i = 0; i < fixtures.length; i+= 1) {
    //collection.remove({ });
    collection.insert(fixtures[i]);
  }
}

Meteor.startup(function () {
  // @TODO: loop this

  if (Projects.find().count() === 0) {
    loadFixture(Fixtures['projects'], Projects);
  }

  if (Benefits.find().count() === 0) {
    loadFixture(Fixtures['benefits'], Benefits);
  }

  if (Figures.find().count() === 0) {
    loadFixture(Fixtures['figures'], Figures);
  }

  if (Clients.find().count() === 0) {
    loadFixture(Fixtures['clients'], Clients);
  }

  if (Members.find().count() === 0) {
    loadFixture(Fixtures['members'], Members);
  }

  if (Tools.find().count() === 0) {
    loadFixture(Fixtures['tools'], Tools);
  }

  if (Posts.find().count() === 0) {
    loadFixture(Fixtures['posts'], Posts);
  }

  if (Services.find().count() === 0) {
    loadFixture(Fixtures['services'], Services);
  }

  if (Values.find().count() === 0) {
    loadFixture(Fixtures['values'], Values);
  }

  if (Processes.find().count() === 0) {
    loadFixture(Fixtures['processes'], Processes);
  }

  if (Contacts.find().count() === 0) {
    loadFixture(Fixtures['contacts'], Contacts);
  }

  if (Quotes.find().count() === 0) {
    loadFixture(Fixtures['quotes'], Quotes);
  }

});
