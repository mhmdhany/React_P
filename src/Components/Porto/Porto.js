import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Box, Image, Overlay, OverlaySpan, PortoItem, PortoList, PortoSection, PortoTitle, Span } from './style'

function Porto() {

    const [images , setImages] = useState([])
    useEffect( () => {
        axios.get('js/data.json').then( res => { setImages(res.data.portfolio) })
    } , [])

    const PortioImages = images.map( (imageItem) => {
        return (
            <Box key={imageItem.id}>
            <Image src={imageItem.image} alt="" />
            <Overlay>
                <OverlaySpan>
                    Show Image
                </OverlaySpan>
            </Overlay>
        </Box>
        )
    })

    return (
        <PortoSection>
        <PortoTitle><Span>My</Span> Portfolio</PortoTitle>
        <PortoList>
            <PortoItem active>All</PortoItem>
            <PortoItem>HTML</PortoItem>
            <PortoItem>Photoshop</PortoItem>
            <PortoItem>Wordpress</PortoItem>
            <PortoItem>Mobile</PortoItem>
        </PortoList>
        
        <div className="box">
            {PortioImages} 
        </div>
        
    </PortoSection>
    )
}

export default Porto
