type State = 'pre-single' | 'single-released' | 'album-released';

export const getReleaseState = (): State => {
  const state: State = 'pre-single';
  return state;
};
