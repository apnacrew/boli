import { Mongo } from 'meteor/mongo';
import { generateSong } from '../utils';

const Songs = new Mongo.Collection('songs')

// Fill collection with randomly generated song list
Songs.remove({})
const bulkOp = Songs.rawCollection().initializeUnorderedBulkOp();
for (let i = 2; i <= 20; i++) {
  bulkOp.insert({
    rank: i,
    ...generateSong(),
  })
}
bulkOp.execute();

export default Songs;
