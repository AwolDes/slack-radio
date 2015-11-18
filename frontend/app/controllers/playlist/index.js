import Ember from 'ember';

export default Ember.Controller.extend({

    firstLink:Ember.computed.alias('model.firstObject.videoId'),
    
    // Make this equal firstLink
    link:"",

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
            
            
            var addSong = this.store.createRecord('playlist/songs', {
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
            
            //Ember.debug(data);
            return false;
        },
        
        ytEnded: function() {
            Ember.debug('on ended from controller');
            //Ember.debug(ytid);
            
            var nextId = "";
            this.set('link', nextId)
            
            return false;
        },
        
        getId:function(id, title, singer){
            console.log(id);
            this.set('link','')
            this.set('link',id)
        }
    }
});
