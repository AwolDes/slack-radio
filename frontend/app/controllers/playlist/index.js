import Ember from 'ember';

export default Ember.Controller.extend({
   /* playlist:this.get('model'),
    songs:playlist.get('songs'),
    youtubeId:songs.get([0]),*/
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
            
            return false;
        },
        
        ytEnded: function() {
            Ember.debug('on ended from controller');
            //Ember.debug(ytid);
            // here you could load another video by changing the youTubeId
            //this.set('youtubeId', 'dQw4w9WgXcQ');
            
            return false;
        }
    }
       
});
