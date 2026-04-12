/**
 * Map Firebase / Firestore / Storage errors to safe user-facing strings
 * (no internal codes, project ids, or rule details in the UI).
 */
export function friendlyFirebaseMessage(err) {
  const code = err && (err.code || err.name);
  const map = {
    'auth/email-already-in-use': 'That email is already registered.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/weak-password': 'Please choose a stronger password.',
    'auth/wrong-password': 'Incorrect email or password.',
    'auth/user-not-found': 'Incorrect email or password.',
    'auth/invalid-credential': 'Incorrect email or password.',
    'auth/too-many-requests': 'Too many attempts. Please wait a few minutes and try again.',
    'auth/network-request-failed': 'Network error. Check your connection and try again.',
    'auth/popup-closed-by-user': 'Sign-in was cancelled.',
    'auth/requires-recent-login': 'For your security, sign in again and retry.',
    'permission-denied': 'You do not have permission to do that.',
    'unauthenticated': 'Please sign in to continue.',
    'failed-precondition': 'This action is not available right now.',
    'unavailable': 'The service is temporarily unavailable. Please try again.',
    'deadline-exceeded': 'The request took too long. Please try again.',
    'resource-exhausted': 'Too many requests. Please try again later.',
    'storage/unauthorized': 'You do not have permission to upload this file.',
    'storage/canceled': 'Upload was cancelled.',
    'storage/retry-limit-exceeded': 'Upload failed after several attempts. Please try again.',
    'storage/invalid-checksum': 'Upload failed. Please try again.',
    'storage/quota-exceeded': 'Storage limit reached. Please try again later.'
  };
  if (code && map[code]) return map[code];
  if (typeof err?.message === 'string' && /network|offline|fetch/i.test(err.message)) {
    return 'Network error. Check your connection and try again.';
  }
  return 'Something went wrong. Please try again.';
}
