import '../Styles/Slideshow.scss'
import { useState } from 'react'
import type { Project } from '../types'

interface SlideshowProps {
    currentDatas: Pick<Project, 'pictures'>
}

function Slideshow({ currentDatas }: SlideshowProps) {
    const images = currentDatas.pictures ?? []
    const [currentImage, setCurrentImage] = useState<number>(0)

    function prevImage() {
        setCurrentImage((prev) => (prev <= 0 ? images.length - 1 : prev - 1))
    }
    function nextImage() {
        setCurrentImage((prev) => (prev >= images.length - 1 ? 0 : prev + 1))
    }

    return (
        <div className="slideshow">
            {images.length > 1 ? (
                <div className="slideshow__switchcontent">
                    <button
                        className="slideshow__buttons slideshow__buttonPrev"
                        onClick={prevImage}
                    />
                    <img
                        className="slideshow__currentImage"
                        src={`/${images[currentImage]}`}
                        alt="Photos du projet courant du caroussel"
                    />
                    <button
                        className="slideshow__buttons slideshow__buttonNext"
                        onClick={nextImage}
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
