import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        submit: function() {
            
            var newRoom = this.store.createRecord('room', {
                name:this.get('playlist')
            });
            newRoom.save();
            
            var newPlaylist = this.store.createRecord('rooms/songs', {
                videoId:"oXdfGFIEZIc",
                title:"default video",
                artist:"a random clip"
            });
            console.log(newPlaylist);
            newPlaylist.save();
            
            this.transitionToRoute('playlist', this.get('playlist'));
        },
          
          
    }
});
