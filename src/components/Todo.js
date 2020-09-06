import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
    <div className='content my-1'>
        <li className='text-dark'
            style={{
                textDecoration: completed ? 'line-through' : 'none',
                listStyleType: "none"
            }}>
            {text}
        </li>
        <button onClick={onClick} type='submit' className="btn btn-dark my-3">Done</button>
    </div>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo