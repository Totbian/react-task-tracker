import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert('Please enter a task');
            return;
        }
        onAdd({ text, day, reminder });

        setText('');
        setDay('');
        setReminder(false);
    }


    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor='text'>Task</label>
                <input type='text' id='text' name='text' placeholder='Task text' value={text} onChange={(e) => setText(e.target.value) }/>
            </div>
            <div className='form-control'>
                <label htmlFor='day'>Day & Time</label>
                <input type='text' id='day' name='day' placeholder='Day description' value={day} onChange={(e) => setDay(e.target.value) } />
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor='reminder'>Reminder</label>
                <input type='checkbox' checked={reminder} id='reminder' name='reminder' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked) }/>
            </div>
            <input type='submit' value='Save Task' className="btn btn-block"/>
        </form>

    )
}

export default AddTask
