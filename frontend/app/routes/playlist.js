import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.findAll('rooms/songs');
      },
    
    setupController: function(controller, model) {
        controller.set('model', model);

        /* or first item only
        controller.set('model',     model.get('firstObject'));
      }*/
    }
});
