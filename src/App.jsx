import ClientForm from "./components/ClientForm";
import '../src/styles/Global.css'
import { useEffect, useState } from "react";
import { ClientList } from "./components/ClientList";
import Button from "./components/button";

export function App() {
    const [tab, setTab] = useState("register");
    const [clients, setClients] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('clients');
        if (saved) setClients(JSON.parse(saved));
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('clients', JSON.stringify(clients));
        }
    }, [clients, isLoaded]);
    return (
        <div className="appContainer">
            <div className="header">
                <h1>Registro de Clientes</h1>
                <div className="tab">
                    <Button className={tab == "register" && "activeTab"} onClickProp={() => setTab('register')} label="Registrar Clientes"/>
                    <Button className={tab == "list" && "activeTab"} onClickProp={() => setTab('list')} label="Lista de Clientes"/>
                </div>
            </div>
            {tab == "register" && <ClientForm clients={clients} setClients={setClients} setTab={setTab} />}
            {tab == "list" && <ClientList clients={clients} setClients={setClients} />}
        </div>
    )
}

