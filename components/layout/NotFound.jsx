import React from 'react'
import Link from 'next/link'

const NotFound = () => {
    return (
        <div className='section container col-md-4 offset-md-4'>
            <div className='shadow-lg p-5  d-flex flex-column align-items-center'>
                <h1 id='title_404'>404!</h1>
                <i id='description_404'>Page Not Found. Go to <Link href='/'>Homepage</Link> </i>
            </div>
        </div>
    )
}

export default NotFound
