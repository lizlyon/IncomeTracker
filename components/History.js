import styled from "styled-components"

export default function History({ data, deleteExpense }) {
    return (<List>
        {
            data.length > 0 ?
            (data.map((d, i) => (
                <Entry key={d} onClick={() => deleteExpense(d)}>
                    {d}
                </Entry>
            ))) : (
                <p>No expenses on record.</p>
            )
        }
        </List>
    )
}

const List = styled.ol`
    list-style: none;
    margin: 0;
    padding: 0;
`


const Entry = styled.li`
    padding: 10px;
    font-size: 1.2rem;
    &:not(:last-of-type) {
        border-bottom: 1px solid var(--rose);
    }
`