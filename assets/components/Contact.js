import React from 'react'

const Contact = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h2>Let me know what's on your mind</h2>
            <form className='d-flex flex-column'>
                <div className='row'>
                    <div className='col'>
                        <label>First Name</label>
                        <input type="text" />
                    </div>
                    <div className='col'>
                        <label>Last Name</label>
                        <input type="text" />
                    </div>
                </div>
                <div className='row'>

                    <div className='col'>
                        <label>Email Name</label>
                        <input type="text" />
                    </div>
                    <div className='col'>
                        <label>Leave us a message</label>
                        <textarea></textarea>
                    </div>
                </div>
                <button type="submit" className='align-self-center'>Submit</button>
            </form>
        </div>
    )
}

export default Contact