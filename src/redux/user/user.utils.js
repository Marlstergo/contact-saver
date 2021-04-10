import { getCurrentUser, firestore } from "../../fire-base/fire-base"

export const removeContact =  (contacts, contactItem) => {
    const newContactList = contacts.filter(contact => contact.name !== contactItem)
    
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

export const editContact = async (contacts, details) => {
    const newContactList = contacts.map(
        contact => {
            if (contact.name === details.contact){
                contact.name = details.editedcontactDetails.newName
                if (details.editedcontactDetails.newNumber === '' ){    
                    return contact
                }
                contact.number = details.editedcontactDetails.newNumber
            }

            return contact
        }
    )
    const Update = async () =>{
        const userAuth = await getCurrentUser()
        const userRefrence = firestore.doc(`users/${userAuth.uid}`)
        await userRefrence.update({
            contacts: newContactList

        })
        console.log('updated contacts')
        
    }
    Update()

    return newContactList
}