type State = 'pre-single' | 'single-released' | 'album-released';

export const getReleaseState = (): State => {
  // UPDATE STATE HERE!
  // const state: State = 'pre-single';
  const state: State = 'single-released';
  // const state: State = 'album-released';
  return state;
};
