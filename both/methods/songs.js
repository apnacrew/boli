import Songs from '/imports/collections/songs';
import { check } from 'meteor/check';

Meteor.methods({
  'findSong'(id) {
    check(id, String);
    return Songs.findOne({ _id: id });
  },
});
