import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC2bCAXR1UjNjysVKlR2-C_bYeQJveQ0g4",
    authDomain: "takoo-f533d.firebaseapp.com",
    projectId: "takoo-f533d",
    storageBucket: "takoo-f533d.appspot.com",
    messagingSenderId: "234089679091",
    appId: "1:234089679091:web:91253bd2e6815a6dc5cf86",
    measurementId: "G-MVHC0CCRYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get storage instance
const storage = getStorage(app);

const listAllFiles = async (folderPath) => {
    const listRef = ref(storage, folderPath);
    const res = await listAll(listRef);
    const urls = await Promise.all(res.items.map(itemRef => getDownloadURL(itemRef)));
    return urls;
};

export { listAllFiles, storage };
