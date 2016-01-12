import Ember from 'ember';

export default Ember.Controller.extend({


    // Make this equal firstLink
    newLink:Ember.computed.alias('model.firstObject.videoId'),
    currentSong:Ember.computed.alias('model.firstObject.title'),
    currentArtist:Ember.computed.alias('model.firstObject.artist'),

    songPos:0,
    
    songIds: function(){
       var arr = [];
       this.get('model').forEach(function(item){
         var id=item.get('videoId')//.forEach(function(id){
             //console.log(id)
           arr.pushObject(id); //some object that is represents each specific combination
         });
       //});
        //console.log(arr)
        return arr;
     }.property('model'),
    
    //newLink:this.get('someArray'),
    
    //listId:this.get('someArray'),

    actions: {
        save: function(link, name, singer) {
            console.log(link);
            // For testing.
            var urls = [
                link
            ];

            var rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
            var i = 0;
            for (i = 0; i < urls.length; ++i) {
                var r = urls[i].match(rx);
                console.log(r[1]);
                var newLink = r[1];
            }
            
            var room = this.get('room');
            var addSong = this.store.createRecord('song', {
                videoId:newLink,
                title:name,
                artist:singer
            });
            addSong.save();
           
            
            this.set('videoId', '');
            this.set('title', '');
            this.set('artist', '');
            
            return false;
        },
        
        ytPlaying: function() {
            Ember.debug('on playing from controller');
            //this.get('someArray');
            //Ember.debug(data);
            return false;
        },
        
        ytEnded: function() {
            Ember.debug('on ended from controller');
            var current = this.get('newLink');
            console.log("Current: " + current);
            
            var next = this.incrementProperty('songPos', 1);
            var nextId = this.get('songIds').objectAt(next);
            
            console.log("Next: " + nextId);
            this.set('newLink', nextId)
            
            return false;
        },
        // Click on song, plays it.
        getId:function(id, title, singer, index){
            console.log(id);
            console.log(index)
            //this.set('songPos', pos)
            this.set('newLink',id)
        }
    }
});

