export const SHOW_PROGRESS = 'SHOW_PROGRESS';
export const HIDE_PROGRESS = 'HIDE_PROGRESS';

export function showProgressAction() {
  return {
    type: SHOW_PROGRESS,
  };
}

export function hideProgressAction() {
  return {
    type: HIDE_PROGRESS,
  };
}
