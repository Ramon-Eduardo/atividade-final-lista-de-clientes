import { useState } from 'react'
import '../styles/Form.css'
import Button from './button';

// Define o componente ClientForm, responsável por cadastrar novos clientes
const ClientForm = ({ setTab, setClients }) => {

    // Estados locais para armazenar os dados do formulário
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [ps, setPs] = useState("");

    // Função que é executada ao enviar o formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o comportamento padrão de recarregar a página

        // Cria o objeto com os dados do cliente preenchidos no formulário
        let formData = { name, phone, ps };

        // Adiciona o novo cliente à lista existente
        setClients((prevList) => [...prevList, formData]);

        // Limpa os campos do formulário após o envio
        setName('');
        setPhone('');
        setPs('');

        // Alterna para a aba de listagem de clientes
        setTab('list');
    }

    // Retorna a estrutura visual do formulário
    function formatarTelefone(valor) {
        // Remove todos os caracteres que não são dígitos (ex: espaços, parênteses, traços)
        const limpo = valor.replace(/\D/g, '');

        // Se o número tiver 11 dígitos (ex: celular com DDD), formata como (99) 99999-9999
        if (limpo.length === 11) {
            return limpo.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
        }

        // Se o número tiver 10 dígitos (ex: telefone fixo com DDD), formata como (99) 9999-9999
        if (limpo.length === 10) {
            return limpo.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
        }

        // Se ainda não tiver os dígitos suficientes, retorna o valor como está (sem formatar)
        return valor;
    }
    return (
        <div className="form">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    {/* Campo de entrada para o nome */}
                    <div className='formGroup'>
                        <label>Nome*</label>
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* Campo de entrada para o telefone */}
                    <div className='formGroup'>
                        <label>Telefone*</label>
                        <input type="text"
                            value={phone}
                            onChange={(e) => setPhone(formatarTelefone(e.target.value))}
                        />
                    </div>
                    {/* Campo para observações adicionais */}
                    <div className='formGroup'>
                        <label>Observações</label>
                        <textarea name="Observações"
                            id="ps"
                            value={ps}
                            onChange={(e) => setPs(e.target.value)}
                        ></textarea>
                    </div>

                    {/* Botão para enviar o formulário */}
                    <Button label="Cadastrar" />
                </form>
            </div>
        </div>
    )
}

// Exporta o componente para ser usado em outras partes da aplicação
export default ClientForm;