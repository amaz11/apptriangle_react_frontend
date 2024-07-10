import React from 'react'

const TableSkeleton = ({ col }) => {
    return (
        <>
            {Array(col).fill(null).map((_, index) => (
                <tr key={index} className="animate-pulse">
                    {Array(col).fill(null).map((_, tdindex) => <td key={tdindex} className="py-3 border text-center">
                        <div className={`bg-gray-300 mx-auto ${tdindex === 0 ? "rounded-full w-6" : "rounded w-32"}  h-6`}></div>
                    </td>)}
                </tr>
            ))}
        </>
    )
}

export default TableSkeleton


{ }