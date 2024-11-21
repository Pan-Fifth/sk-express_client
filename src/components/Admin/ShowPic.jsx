import React from 'react'

const ShowPic = ({image,orderno,closeModal}) => {
    return (
        <dialog id="pic_modal" className="modal" open>
            <div className="modal-box w-[1000px]">
                <h3 className="font-bold text-lg">Order no: <span className=' font-normal'>{orderno}</span></h3>
               <img className='m-auto hover:scale-150'   src={image}/>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn" onClick={closeModal}>Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default ShowPic