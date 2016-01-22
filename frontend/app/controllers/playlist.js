import Ember from 'ember';

export default Ember.Controller.extend({

//Grab the first video from the array in forebase
    newLink:Ember.computed.alias('model.firstObject.videoId'),
    currentSong:Ember.computed.alias('model.firstObject.title'),
    currentArtist:Ember.computed.alias('model.firstObject.artist'),
// Declare sonPos variable
    songPos:0,
    // Create an array of all video IDs to use later
    songIds: function(){
       var arr = [];
       this.get('model').forEach(function(item){
         var id=item.get('videoId')
           arr.pushObject(id);
         });
        //console.log(arr)
        return arr;
     }.property('model'),
    
    // What happens when buttons are clicked etc.
    actions: {
        // Take parsmeters, seen in playlist.hbs
        save: function(link, name, singer) {
            console.log(link);
            // For testing.
            var urls = [
                link
            ];
            // Magic, never touch.
            // Regular expression for finding the youtube video ID from a youtube URL
            var rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
            var i = 0;
            for (i = 0; i < urls.length; ++i) {
                var r = urls[i].match(rx);
                console.log(r[1]);
                var newLink = r[1];
            }
            
            // Add a new song, notice how iit is formed from the playlist model.
            var addSong = this.store.createRecord('song', {
                videoId:newLink,
                title:name,
                artist:singer,
                //room:playlist
            });
            // SAVE it to firebase
            addSong.save();
           
            // Reset form values in playlist.hbs
            this.set('videoId', '');
            this.set('title', '');
            this.set('artist', '');
            
            return false;
        },
        // More magic
        // Used with an ember component that loads the youtube video.
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

