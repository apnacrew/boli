import Songs from '/imports/collections/songs';
import { check } from 'meteor/check';

Meteor.methods({
  'findSong'(id) {
    check(id, String);
    const song = Songs.findOne({ _id: id });
    if (!song) throw new Meteor.Error(404, 'Song not found');
    return song;
  },
});
