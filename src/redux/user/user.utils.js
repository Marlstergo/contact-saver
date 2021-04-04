import { getCurrentUser, firestore } from "../../fire-base/fire-base"

export const removeContact =  (contacts, contactItem) => {
    const newContactList = contacts.filter(contact => contact.name !== contactItem)
    // console.log(newContactList)
    // if (newContactList.length === 0) {
    //     return []
    // }
    // else{
    //     return[newContactList]
    // }
    const Update = async () =>{
        const userAuth = await getCurrentUser()
        const userRefrence = firestore.doc(`users/${userAuth.uid}`)
        await userRefrence.update({
            contacts: newContactList
        })
        
    }
    Update()
    // return contacts.filter(contact => contact.name !== contactItem)
    

    return newContactList
}