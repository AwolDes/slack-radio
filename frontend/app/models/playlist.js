import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  id: DS.attr('string'),
  songs: DS.attr('string'),
  users: DS.attr('string')
});
