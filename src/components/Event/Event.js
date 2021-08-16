import React from 'react'

function Event() {

    return (
        <form>
            <label for="event">Event: </label>
            <input placeholder="event name" value="event"></input>
            <label for="responsible">Responsible</label>
            <select name="responsible">
                <option>Иванов</option>
                <option>Петров</option>
                <option>Сидоров</option>
            </select>
        </form>
    )
}

export default Event;