import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        getPlayList: function(playlist){
            console.log("Go here " + playlist);
            this.transitionToRoute('/playlist/'+playlist)
        }
    }
});
