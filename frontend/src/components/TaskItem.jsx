import React from 'react'
import TextArea from 'react-textarea-autosize'

export function TaskItem(props) {
    const { isCompleted, description, onToggle, id, onEdit } = props;


    const handleEdit = (e) => {
        onEdit(id, e.target.value)
        setTextAreaHeight(`${e.target.scrollHeight}px`)
    }


    return (
        <li className="task-item">
            <input type="checkbox" className="checkbox" checked={isCompleted} onChange={() => onToggle(id)} />
            <TextArea className={isCompleted ? "item_description_completed" : "item_description"} onChange={handleEdit} value={description} />
        </li>
    )
}