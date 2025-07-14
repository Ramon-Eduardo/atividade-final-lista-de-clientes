import { useState } from 'react'
import '../styles/Form.css'
import Button from './button';

const ClientForm = ({ setTab, setClients }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [ps, setPs] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = {
            name, phone, ps
        }
        setClients((prevList) => [...prevList, formData])
        setName('')
        setPhone('')
        setPs('')
        setTab('list')
    }

    return (
        <div className="form">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <div className='formGroup'>
                        <label>Nome*</label>
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='formGroup'>
                        <label>Telefone*</label>
                        <input type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className='formGroup'>
                        <label>Observações</label>
                        <textarea name="Observações"
                            id="ps"
                            value={ps}
                            onChange={(e) => setPs(e.target.value)}
                        ></textarea>
                    </div>
                    <Button label="Cadastrar"/>
                </form>
            </div>
        </div>
    )
}



export default ClientForm;