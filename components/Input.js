import {useState} from "react"
import styled from "styled-components"

export default function Input({ addExpense }) {
    const [value, setValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        addExpense(value);
        setValue("");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <label htmlFor="new-expense">Add an Expense</label>
            <input id="new-expense" value={value} onChange={(e) => setValue(e.target.value)}/>
        </Form>
    )
}

const Form = styled.form`
    font-size: 1.4rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    label {
        font-size: 1rem;
        padding: 5px;
    }
    input {
        background: transparent;
        font-size: inherit;
        padding: 10px;
        border: 3px solid var(--burnt);
        border-radius: 5px;
    }
`