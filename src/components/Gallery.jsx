import React, { useState } from 'react'
import data from '../records';
import { FaTimesCircle } from "react-icons/fa";

const Gallery = () =>
{

    const [modal, setModal] = useState( false )

    const [tempimgSrc, setTempImgSrc] = useState( '' )


    const getImage = ( imgSource ) =>
    {
        setTempImgSrc( imgSource );
        setModal( true )
    }

    return (

        <div className="grid place-items-center h-screen">

            <div className={modal ? "modal lightbox" : "modal"} style={{ dislay: 'flex', flexDirection: 'column' }}>

                <div> <img src={tempimgSrc} />
                    <FaTimesCircle className='text-6xl' onClick={() => setModal( false )} /> {/* /* lightbox close button */}
                </div>


                <div className='pt-5' style={{ display: 'flex', width: '50%', margin: '0 auto' }}>
                    {data.map( ( item, index ) =>
                    {
                        return (
                            <div key={index} className='pics' onClick={() => getImage( item.imgSrc )} id='thumbnail-img'>
                                <img src={item.imgSrc} alt='/' style={{ width: '50%' }} />
                            </div>
                        )
                    } )}
                </div>

            </div>

            <div className='gallery'>
                {data.map( ( item, index ) =>
                {
                    return (
                        <div key={index} className='pictures' onClick={() => getImage( item.imgSrc )}>
                            <img src={item.imgSrc} alt='/' style={{ Width: '100%' }} />
                            <span className='font-bold text-sm'>{item.project_code}</span>
                        </div>
                    )
                } )}
            </div>

        </div>

    )
}

export default Gallery