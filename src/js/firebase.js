import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { ref, get, update } from "firebase/database";

// firebase
const firebaseConfig = {
    databaseURL: "https://tominching-45c5c-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dayRef = ref(database, 'day');

export async function updateDb (hasStart, start) {
    update(dayRef,{
        hasStart,
        start
    })
}

export async function getDb () {
    const snapshot = await get(dayRef);
    return snapshot.exists() ? snapshot.val() : null;
}
   

 