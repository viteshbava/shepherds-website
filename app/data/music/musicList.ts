import { MusicData } from '@/app/types';
import heresy from '@/app/data/music/heresy';
import helios from '@/app/data/music/helios';
import selftitled from '@/app/data/music/selftitled';
import { getReleaseState } from '@/app/libs/getReleaseState';

// This array controls the order of music releases.  Note that it may be reversed on the UI depending on context.
// Remove an album from this array to hide it

const releaseState = getReleaseState();

const musicList: MusicData[] =
  releaseState === 'album-released' ? [selftitled, helios, heresy] : [selftitled, helios];

export default musicList;
