import DS from 'ember-data';

export default DS.Model.extend({
    videoId: DS.attr('string'),
    title: DS.attr('string'),
    artist: DS.attr('string'),
    playlist: DS.belongsTo('room')
});


