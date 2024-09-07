import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAJyA0WzqWpo5JC7cn7keI5XL1EWyKIvBs",
    authDomain: "portfolio-77dbd.firebaseapp.com",
    projectId: "portfolio-77dbd",
    storageBucket: "portfolio-77dbd.appspot.com",
    messagingSenderId: "128096349667",
    appId: "1:128096349667:web:b0d0304db08a8fa6dc44d6"
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
