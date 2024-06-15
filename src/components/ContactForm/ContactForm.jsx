import { Field, Form, Formik } from "formik"
import { useId } from "react";
import css from "./ContactForm.module.css"
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const initialValues = {
    name: "",
   number: "",
    
}
const ContactForm = () => {
    const dispatch = useDispatch();
     const nameId = useId();
    const numberId = useId();
    const handleSubmit = (values, actions) => {
     dispatch(addContact(values.name, values.number)) 
        actions.resetForm();
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={css.form}>
                <div className={css.formBox}>
                    <label htmlFor={nameId}>Name</label>
                    <Field type="text" name="name" id={nameId} className={css.inputForm }></Field>
                </div>
                 <div className={css.formBox}>
                    <label htmlFor={numberId}>Number</label>
                    <Field type="text" name="number" id={numberId} className={css.inputForm }></Field>
                </div>
                <button type="submit" className={css.btn}>Add contact</button>
            </Form>
        </Formik>
    )
}
export default ContactForm