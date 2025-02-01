
interface imagens {
    src: string;
    color: string;
    backgroundPositionY: string;
    backgroundSize: string;
    backgroundPositionX: string
  }

interface CarouselProps {
    imagem: imagens[];
    stopTrigger: boolean;
    indiceAtual: number;
    index: number;
    endIndex: number
  }


function CarouselMobile({ endIndex, imagem, stopTrigger, indiceAtual, index }: CarouselProps) {
    return (
        <div className='h-100 col-12 p-0 d-flex position-absolute top-0 left-0' style={{ transition: 'transform 0.5s ease-in-out', transform: `translateX(${indiceAtual == index ? 0 : indiceAtual == (index + 1) ? -100 : index == (endIndex - 1) && indiceAtual == 0 ? -100 : 100}%)`, zIndex: indiceAtual == index ? 2 : indiceAtual == (index + 1) ? 1 : index == (endIndex - 1) && indiceAtual == 0 ? 1 : 0 }}>
            <div className='h-100 col-6 p-0' style={{ backgroundImage: `url(${imagem[0].src})`, backgroundPositionX: imagem[0].backgroundPositionX, backgroundSize: imagem[0].backgroundSize, zIndex: 1, backgroundPositionY: imagem[0].backgroundPositionY }}>
            <div className={indiceAtual == index && stopTrigger == true ? 'box h-100 col-12 p-0 slide-out' : 'box h-100 col-12 p-0'} style={{ backgroundColor: imagem[0].color }}></div>
            </div>
            <div className='h-100 col-6 p-0' style={{ backgroundImage: `url(${imagem[1].src})`, backgroundPositionX: imagem[1].backgroundPositionX, backgroundSize: imagem[1].backgroundSize, zIndex: 0, backgroundPositionY: imagem[1].backgroundPositionY }}>
            <div className={indiceAtual == index && stopTrigger == true ? 'box h-100 col-12 p-0 slide-out' : 'box h-100 col-12 p-0'} style={{ backgroundColor: imagem[1].color }}></div>
            </div>
        </div>
    )
}

export default CarouselMobile