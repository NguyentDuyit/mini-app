import React, { useState } from 'react'
import MiniAppForm from './components/MiniAppForm'
import MiniAppList from './components/MiniAppList'

function MiniApp() {
    const [data, setData] = useState([])
    function handleSubmit(listItems) {
        setData((prevState) => {
            return [...prevState, listItems]
        })
    }
    return (
        <>
            <MiniAppForm handleSubmit={handleSubmit} />
            <MiniAppList data={data} />
        </>
    )
}

export default MiniApp