interface imagens {
    src: string;
    color: string;
    backgroundPositionY: string;
    backgroundSize: string;
    backgroundPositionX: string
  }

interface CarouselProps {
    imagem: imagens;
    stopTrigger: boolean;
    indiceAtual: number;
    index: number;
    endIndex: number
  }


function Carousel({ endIndex, imagem, stopTrigger, indiceAtual, index }: CarouselProps) {
    return (
        <div key={index} className='h-100 col-12 p-0 d-flex position-absolute top-0 left-0' style={{ transition: 'transform 0.5s ease-in-out', transform: `translateX(${indiceAtual == index ? 0 : indiceAtual == (index + 1) ? -100 : index == (endIndex - 1) && indiceAtual == 0 ? -100 : 100}%)`, zIndex: indiceAtual == index ? 2 : indiceAtual == (index + 1) ? 1 : index == (endIndex - 1) && indiceAtual == 0 ? 1 : 0 }}>
            <div className='h-100 col-12 p-0' style={{ backgroundImage: `url(${imagem.src})`, backgroundPositionX: imagem.backgroundPositionX, backgroundSize: imagem.backgroundSize, zIndex: 1, backgroundPositionY: imagem.backgroundPositionY}}>
                <div className={indiceAtual == index && stopTrigger == true ? 'box h-100 col-12 p-0 slide-out' : 'box h-100 col-12 p-0'} style={{ backgroundColor: imagem.color }}></div>
            </div>
        </div>
    )
}

export default Carousel