import { MusicData } from '@/app/types';
import heresy from '@/app/data/music/heresy';
import helios from '@/app/data/music/helios';
import selftitled from '@/app/data/music/selftitled';

// This array controls the order of music releases.  Note that it may be reversed on the UI depending on context.
const musicList: MusicData[] = [selftitled, helios, heresy];

export default musicList;
