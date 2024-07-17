import { HistoryContainer, HistoryList, TaskStatus } from "./History.style";

export default function History() {
    return (
        <HistoryContainer>
            
            <h1>Meu histórico</h1>
            <HistoryList>
            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Duração</th>
                        <th>Início</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tarefa</td>
                        <td>10 min</td>
                        <td>Há 2 meses</td>
                        <td><TaskStatus statusColor="green">Concluída</TaskStatus></td>                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>10 min</td>
                        <td>Há 2 meses</td>
                        <td><TaskStatus statusColor="green">Concluída</TaskStatus></td>                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>10 min</td>
                        <td>Há 2 meses</td>
                        <td><TaskStatus statusColor="green">Concluída</TaskStatus></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>10 min</td>
                        <td>Há 2 meses</td>
                        <td><TaskStatus statusColor="yellow">Em Andamento</TaskStatus></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>10 min</td>
                        <td>Há 2 meses</td>
                        <td><TaskStatus statusColor="yellow">Em Andamento</TaskStatus></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>10 min</td>
                        <td>Há 2 meses</td>
                        <td><TaskStatus statusColor="red">Interrompida</TaskStatus></td>
                    </tr>
                </tbody>
            </table>
            </HistoryList>
        </HistoryContainer>
    )
}