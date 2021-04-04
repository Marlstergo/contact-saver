import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCfIcSf0Wa2QeLkAaC4o2Mhctb3elFi9gk",
    authDomain: "contact-saver-9823b.firebaseapp.com",
    projectId: "contact-saver-9823b",
    storageBucket: "contact-saver-9823b.appspot.com",
    messagingSenderId: "628166739275",
    appId: "1:628166739275:web:fc8cd3dd3b0e77997d14ce",
    measurementId: "G-4F4VV9GCHV"
};
export const addContact = async (userAuth, name, number, email, contactType) =>{
    if (!userAuth) return;

    const userRefrence = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRefrence.get();

        const createdAt = new Date();
        const user = snapShot.data()
        const userContacts = user.contacts
        console.log(user)
        
        try{
            userContacts.push({
                name,
                email,
                number,
                contactType,
                createdAt
            })
            await userRefrence.update({
                contacts: userContacts
            })

        } catch (error){
            console.log('error creating user', error.message)
        }
    return userRefrence;
}
export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const{displayName, email} = userAuth;
        const createdAt = new Date();
    
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                contacts: [],
                ...additionalData
            })
            console.log('success in firebase.js')
            
        } catch (error){
            console.log('error creating user', error.message)
        }
    }
    // userRef.update({
    //     add: 'added me'
    // })
    // console.log( userRef.get().data())

    
    return userRef;
}

// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>  {
//     const collecctionRef = firestore.collection(collectionKey)

//     const batch = firestore.batch()

//     objectsToAdd.forEach(obj =>{
//         const newDocRef = collecctionRef.doc();
//         batch.set(newDocRef, obj)
//     })

//     return await batch.commit()
// }

export const getCurrentUser = () =>{
    return new Promise((resolve, reject ) =>{
        const unsunscribe = auth.onAuthStateChanged(
            (userAuth) =>{
                unsunscribe()
                resolve(userAuth)                
            }, 
            reject
        )
    }) 
    
    }


// export const convertCollectionsSnapshotToMap = (collections) =>{

//     const transformedCollection = collections.docs.map(doc => {
//         const {title , items} = doc.data()

//     return {
//         routeName: encodeURI(title.toLowerCase()),
//         id: doc.id,
//         title,
//         items
//     }
//     }
//     )

//     return transformedCollection.reduce((accumulator, collection) =>{
//         accumulator[collection.title.toLowerCase()] = collection
//         return accumulator
//     },{})
    
// }
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () =>(auth.signInWithPopup(googleProvider));

export default firebase;