import React from 'react'
import MiniAppItems from './MiniAppItems'

function MiniAppList({ data = [] }) {
    return (
        <>
            <div className="relative overflow-x-auto mt-10">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Email Address</th>
                            <th scope="col" className="px-6 py-3">Country</th>
                            <th scope="col" className="px-6 py-3">Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((value) => {
                            return (
                                <MiniAppItems key={value.key} value={value} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MiniAppList