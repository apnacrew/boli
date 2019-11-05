import { Meteor } from 'meteor/meteor';
import Songs from '../../collections/songs';

Meteor.publish('songList', function () {
  return Songs.find({},
    {
      sort: { rank: 1 },
      fields: { name: 1, artist: 1, rank: 1 },
    });
});
