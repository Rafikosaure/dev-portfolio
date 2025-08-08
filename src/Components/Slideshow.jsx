import '../Styles/Slideshow.scss'
import { useState } from 'react'

function Slideshow({ currentDatas }) {
    const images = currentDatas.pictures
    let [currentImage, letCurrentImage] = useState(0)

    function PrevImage() {
        if (currentImage <= 0) {
            letCurrentImage((currentImage = images.length - 1))
        }
    }
    function NextImage() {
        if (currentImage >= images.length - 1) {
            letCurrentImage((currentImage = 0))
        }
    }

    return (
        <div className="slideshow">
            {images.length > 1 ? (
                <div className="slideshow__switchcontent">
                    <button
                        className="slideshow__buttons slideshow__buttonPrev"
                        onClick={() => {
                            letCurrentImage(currentImage - 1)
                            PrevImage()
                        }}
                    />
                    <img
                        className="slideshow__currentImage"
                        src={`/${images[currentImage]}`}
                        alt="Photos du projet courant du caroussel"
                    />
                    <button
                        className="slideshow__buttons slideshow__buttonNext"
                        onClick={() => {
                            letCurrentImage(currentImage + 1)
                            NextImage()
                        }}
                    />
                    <p className="slideshow__counter">{`${currentImage + 1}/${
                        images.length
                    }`}</p>
                </div>
            ) : (
                <div className="slideshow__switchcontent">
                    <img
                        className="slideshow__currentImage"
                        src={images[currentImage]}
                        alt="Photos du projet courant du caroussel"
                    />
                </div>
            )}
        </div>
    )
}

export default Slideshow
