import ClientForm from "./components/ClientForm";
import '../src/styles/Global.css'
import { useEffect, useState } from "react";
import { ClientList } from "./components/ClientList";
import Button from "./components/button";

// Componente principal da aplicação
export function App() {
    // Define a aba atual: "register" (cadastro) ou "list" (listagem)
    const [tab, setTab] = useState("register");

    // Lista de clientes cadastrados
    const [clients, setClients] = useState([]);

    // Indica se os dados já foram carregados do localStorage
    const [isLoaded, setIsLoaded] = useState(false);

    // Efeito que roda uma vez ao montar o componente: recupera os dados salvos
    useEffect(() => {
        const saved = localStorage.getItem('clients'); // busca clientes salvos
        if (saved) setClients(JSON.parse(saved));      // atualiza o estado se houver dados
        setIsLoaded(true);                             // marca que o carregamento inicial foi feito
    }, []);

    // Efeito que salva os dados no localStorage quando mudam (após o carregamento inicial)
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('clients', JSON.stringify(clients)); // salva os clientes
        }
    }, [clients, isLoaded]);

    // Renderiza a interface principal da aplicação
    const handleClean = () => {
        setClients([])
    }
    return (
        <div className="appContainer">
            <div className="header">
                <h1>Registro de Clientes</h1>

                {/* Navegação entre as abas: cadastro e lista */}
                <div className="tab">
                    <Button
                        className={tab == "register" && "activeTab"} // aplica classe visual se ativo
                        onClickProp={() => setTab('register')}       // muda aba para 'register'
                        label="Registrar Clientes"                   // texto do botão
                    />
                    <Button
                        className={tab == "list" && "activeTab"}     // aplica classe se aba ativa for 'list'
                        onClickProp={() => setTab('list')}           // muda aba para 'list'
                        label="Lista de Clientes"                    // texto do botão
                    />
                </div>
            </div>

            {/* Renderiza o formulário de cadastro se a aba ativa for 'register' */}
            {tab == "register" && (
                <ClientForm
                    clients={clients}           // passa lista de clientes
                    setClients={setClients}     // função para adicionar clientes
                    setTab={setTab}             // permite mudar a aba após cadastro
                />
            )}

            {/* Renderiza a lista de clientes se a aba ativa for 'list' */}
            {tab == "list" && (
                <ClientList
                    clean={handleClean}
                    clients={clients}           // passa lista de clientes
                    setClients={setClients}     // permite excluir ou editar clientes
                />
            )}
        </div>
    )
}