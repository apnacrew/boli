import { Meteor } from 'meteor/meteor';
import Songs from '../../collections/songs';

Meteor.publish('charts', function () {
  return Songs.find({},
    {
      sort: { rank: 1 },
      fields: { name: 1, artist: 1 },
    });
});
