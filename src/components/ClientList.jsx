import '../styles/List.css'

export const ClientList = ({ clients, clean }) => {
    return (
        <div>
            {clients?.map(client => {
                return (
                    <div className="clientCard" key={client.name}>
                        <div className="clientRegister">
                            <strong>{client.name}</strong>
                            <p><strong>Telefone:</strong>{client.phone}</p>
                            <p><strong>Observações:</strong>{client.ps}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}