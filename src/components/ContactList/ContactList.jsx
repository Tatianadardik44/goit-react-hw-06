import { useSelector } from "react-redux"

import Contact from "../Contact/Contact"
import css from './ContactList.module.css'
import { selectContacts, selectNameFilter } from "../../redux/selectors"


const ContactList = () => {
    const contacts = useSelector(selectContacts)
    const filterName = useSelector(selectNameFilter)
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterName.toLowerCase()));
    return (
        <ul className={css.listUser}>
            {filteredContacts.map(contact => (
                <li key={contact.id}>
                    <Contact contact={contact } />  
               </li> 
            ))}
        </ul>
            )
}
export default ContactList
 