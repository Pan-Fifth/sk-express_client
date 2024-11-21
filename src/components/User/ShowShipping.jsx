import React from 'react'


const statuses = [
    { label: 'PENDING', value: 'PENDING' },
    { label: 'Japan Warehouse', value: 'JP_WH' },
    { label: 'Out of Japan', value: 'OUT_OF_JP' },
    { label: 'Arrived in Thailand', value: 'ARRIVED_TH' },
    { label: 'Complete', value: 'COMPLETE' }
];

const ShowShipping = ({ currentStatus }) => {
    const currentIndex = statuses.findIndex(status => status.value === currentStatus);
    console.log(currentStatus)
    return (
        <ul className="timeline">
            {statuses.map((status, index) => (
                <li key={status.value}>
                    {index > 0 && <hr className={`bg-primary ${index <= currentIndex ? 'visible' : 'hidden'}`} />}

                    <div className={index <= currentIndex ? "timeline-start timeline-box text-green-500" : "timeline-start timeline-box"}>
                        {status.label}
                    </div>

                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={`h-5 w-5 ${index <= currentIndex ? 'text-green-500' : 'text-gray-400'}`}>
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>

                    {index < statuses.length - 1 && (
                        <hr className={`bg-primary ${index < currentIndex ? 'visible' : 'hidden'}`} />
                    )}
                </li>
            ))}
        </ul>

    )
}

export default ShowShipping