import React from 'react'

const Options = ({ handleChange, isChecked }) => {
    return (
        <div className="toggle-container">
            <input
                type="checkbox"
                id="check"
                className="toggle"
                onChange={handleChange}
                checked={isChecked}
            />
            <label htmlFor="check" className="toggle-label">Dark Mode</label>
        </div>
    )
}

export default Options