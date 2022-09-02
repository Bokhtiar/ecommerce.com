import axios from "axios"
import { useEffect, useState } from "react"

const AdminContact = () => {
    /**-------------contact list------------- */
    const [contacts, setContact] = useState([''])
    const allContact = async() => {
        await axios.get('/admin/contact').then((res) => {
            setContact(res.data.data)            
        }).catch((error) => {
            console.log(error);
        })
    }

    /**----------contact status ----------------- */
    const ContactStatus = async(id) => {
        await axios.get(`/admin/contact/status/${id}`).then((res)=>{
            allContact()
        }).catch((error)=> {
            console.log(error);
        })
    }
    /**-------------useEffect------------- */
    useEffect(()=>{
        allContact()
    },[])

    return (
        <section>
            <div className="card">
                <div className="card-header">
                    <h3>Contact List</h3>
                </div>
                <div className="card-body">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Message</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           contacts.map((contact, index) => 
                            <tr>
                                <th scope="row">{contact.name}</th>
                                <td>{contact.email}</td>
                                <td>{contact.subject}</td>
                                <td>{contact.message}</td>
                                <td>{contact.contactStatus === true ? <button onClick={(e)=>ContactStatus(contact._id)}>Active</button> : <button onClick={(e)=>ContactStatus(contact._id)}>InActive</button> }</td>
                            </tr>
                           )
                       }
                    </tbody>
                </table>
                </div>
            </div>
        </section>
    )
}

export default AdminContact