import Ember from 'ember';

export default Ember.Controller.extend({
     
    actions: {
        save: function(link, name, singer) {
            console.log(link);
            var addSong = this.store.createRecord('song', {
                videoId:link,
                title:name,
                artist:singer
            });
            addSong.save();
            
            return false;
        }
    }
       
});
