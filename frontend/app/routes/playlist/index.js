import Ember from 'ember';

export default Ember.Route.extend({
    
    
    
    /*model() {
        //return this.store.findAll('friend');
        
        return true;
    }*/
    
    actions: {
        play: function(link) {
                console.log(link);
            }
        }
    
    
});
