import Ember from 'ember';

export default Ember.Route.extend({
    
    
    
    /*model() {
        //return this.store.findAll('friend');
        
        return true;
    }*/
    
    actions: {
        contract: function() {
                console.log("clicked");
                var id = this.get('videoID');
                this.this.set('videoID', '');
                console.log(id);
            }
        }
    
    
});
