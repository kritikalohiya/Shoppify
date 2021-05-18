import React from 'react';
// import ImageGallery from 'react-image-gallery';

export default function ProductImage({imgsrc}) {
    // console.log(imgsrc)
    
    // const [Image, setImage] = useState([]);
    // useEffect(() => {
    //     if(imgsrc && imgsrc.length > 0){
    //         let images = [];

    //     }

    // }, [])
    return (
        <div className="ProductImageDetail overflow-hidden">
            {/* <ImageGallery items={images} /> */}
            <img src={imgsrc} alt=''/>

        </div>
    )
}
