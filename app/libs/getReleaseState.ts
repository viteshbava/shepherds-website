type State = 'pre-single' | 'single-released' | 'album-released';

export const getReleaseState = (): State => {
  // UPDATE STATE HERE
  const state: State = 'single-released';
  return state;
};
