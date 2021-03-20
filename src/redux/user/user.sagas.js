import { all, call, put, takeLatest} from 'redux-saga/effects'

import UserActionTypes from './user.types'
import { 
    signInSuccess, 
    checkUserSession, 
    signInFailure, 
    signOutUserSuccess, 
    signUpWithEmailSuccess, 
    signUpWithEmailFailure,
    loadContactsToState
    } from "./user.action";
import { createUserProfileDocument,
    googleProvider, 
    auth, 
    getCurrentUser, 
    addContact, 
    firestore
} from '../../fire-base/fire-base'


function* getSnapshotFromUserAuth (user, additionalData){
    try {
        console.log('i have fired')
        const userRef = yield call(createUserProfileDocument, user, additionalData)
        const userSnapshot = yield userRef.get();
        console.log(userSnapshot.id)
        console.log('this is inside the function')
        yield put(
            signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
            // yield put(loadContacts())
    } catch (error) {
        put(signInFailure(error))
    }
}

export function* signInwithEmail({payload: {email, password}}){
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
    

}


export function* signUpWithEmail({payload: {email, password, displayName } }){
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password)
        yield put(signUpWithEmailSuccess({user, additionalData: {displayName} }))
    } catch (error) {
        yield put(signUpWithEmailFailure(error))
    }
}
export function* signUpSuccess({ payload: { user, additionalData } }){
    try {
        yield getSnapshotFromUserAuth(user,additionalData)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signInWithGoogle() {
    try {
        console.log('signinwithgoogle started')
        const {user} = yield auth.signInWithPopup(googleProvider)
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* checkUserSessions() {
    try {
        const userAuth = yield getCurrentUser()
        yield getSnapshotFromUserAuth(userAuth)

        put(checkUserSession())
    } catch (error) {
        yield put(signInFailure(error))
    }
    
}
export function* updateContact({payload: {name, email, number, contactType } }) {
    try{
        const userAuth = yield getCurrentUser()
        yield addContact(userAuth, name, email, number, contactType)
        // yield put(loadContacts())
    } catch{
        console.log('error adding contact')
    }
}
export function* signUserOut(){
    try {
        yield auth.signOut()
        yield put(signOutUserSuccess())
    } catch (error) {
        yield put(signInFailure(error))
    }
}
export function* loadContacts(){
    try {
        const userAuth = yield getCurrentUser()
        const userRefrence = firestore.doc(`users/${userAuth.uid}`)
        const snapShot = yield userRefrence.get();
        const user = snapShot.data()
        const userContacts = user.contacts
        console.log(userContacts)
        yield put(loadContactsToState(userContacts))
    } catch (error) {
        console.log(error)
    }
}

export function* fetchContacts () {
    yield(takeLatest(UserActionTypes.FETCH_CONTACTS, loadContacts))
}

export function* onGoogleSigninStart (){ 
    yield (takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle))
}

export function* onSignInWithEmail (){
    yield (takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInwithEmail))
}
export function* onCheckUserSession (){
    yield (takeLatest(UserActionTypes.CHECK_USER_SESSION, checkUserSessions))
}
export function* onSignOutUser (){
    yield (takeLatest(UserActionTypes.SIGN_OUT_USER_START, signUserOut))
}
export function* onSignUpUser (){
    yield(takeLatest(UserActionTypes.SIGN_UP_WITH_EMAIL_START, signUpWithEmail))
}
export function* onSignUpSuccess (){
    yield takeLatest(UserActionTypes.SIGN_UP_WITH_EMAIL_SUCCESS, signUpSuccess)
}
export function* addContacts (){
    yield takeLatest(UserActionTypes.ADD_CONTACT, updateContact)
}

export function* userSagas(){
    yield all([
        call(onGoogleSigninStart), 
        call(onSignInWithEmail), 
        call(onCheckUserSession), 
        call(onSignOutUser),
        call(onSignUpUser),
        call(onSignUpSuccess),
        call(addContacts),
        call(fetchContacts)
    ])
}