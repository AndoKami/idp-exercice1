import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDgObKNfnEeBVZZQZLYAmPQ3GjXJHYYAJc",
    authDomain: "idp-exrcise.firebaseapp.com",
    projectId: "idp-exrcise",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
