// Firebase is provided by the application's dependency configuration.
// Suppress the editor diagnostic when its types are not available locally.
// @ts-expect-error: Firebase Auth may be unresolved until dependencies are installed.
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const auth = getAuth();
const user = auth.currentUser;

const userId = user?.uid;
const userName = user?.displayName || user?.email || "Anonymous";

export {
  userId,
  userName,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
