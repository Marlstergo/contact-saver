export const removeContact = (contacts, contactItem) => {
    const newContactList = contacts.filter(contact => contact.name !== contactItem)
    console.log(newContactList)
    if (newContactList.length === 0) {
        return []
    }
    else{
        return[newContactList]
    }
    // return [newContactList]
}