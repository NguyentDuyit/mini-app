import React from 'react'

function MiniAppItems({ value }) {
    return (
        <>
            <tr className="bg-white border-b  ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{value.name}</th>
                <td className="px-6 py-4">{value.email}</td>
                <td className="px-6 py-4">{value.country}</td>
                <td className="px-6 py-4">{value.gender}</td>
            </tr>
        </>
    )
}

export default MiniAppItems