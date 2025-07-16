import '../styles/List.css'
import Button from './button'

// Define o componente ClientList que recebe como props:
// - clients: array com os dados dos clientes
// - clean: prop opcional planejada para limpar a lista futuramente)

export const ClientList = ({ clients, clean }) => {
    
    return (
        <div className='listCard'>
            {/* Itera sobre cada cliente da lista e exibe um cartão com suas informações */}
            {clients?.map(client => {
                return (
                    <div className="clientCard" key={client.name}>
                        <div className="clientRegister">
                            {/* Exibe o nome do cliente em destaque */}
                            <strong>{client.name}</strong>

                            {/* Exibe o número de telefone do cliente */}
                            <p><strong>Telefone:</strong>{client.phone}</p>

                            {/* Exibe as observações associadas ao cliente */}
                            <p><strong>Observações:</strong>{client.ps}</p>
                        </div>
                    </div>
                )
            })}
            <div className='eraseDiv'>
            <Button className={"eraseButton"}
                onClickProp={clean}
                label="Limpar Tudo" />
            </div>
        </div>

    )
}