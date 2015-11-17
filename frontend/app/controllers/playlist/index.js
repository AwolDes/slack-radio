import Ember from 'ember';

export default Ember.Controller.extend({
     
    actions: {
        save: function(link, name, singer) {
            console.log(link);
            //var regex = "/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/g";
            
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
            //var newLink = link.search(REGEX);
            //console.log(newLink);
            
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
        }
    }
       
});
