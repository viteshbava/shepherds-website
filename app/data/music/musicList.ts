import { MusicData } from '@/app/types';
import heresy from '@/app/data/music/heresy';
import helios from '@/app/data/music/helios';
import selftitled from '@/app/data/music/selftitled';

// This array controls the order of music releases.  Note that it may be reversed on the UI depending on context.
// Remove an album from this array to hide it
const musicList: MusicData[] = [selftitled, helios];
// const musicList: MusicData[] = [selftitled, helios, heresy];

export default musicList;
