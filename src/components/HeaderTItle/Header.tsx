import { Container } from '../Container';
import handsBooks from '../../assets/img/handbooks.png';
import backgroundImage from '../../assets/img/group-8.png';
import { Button } from '../Button';

export const Header = () => {
  return (
    <header 
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
      }}
      className='w-auto h-[500px]'
    >
      <Container>
        <div className='flex relative'>
          <div className='w-1/2 mt-28'>
            <h1 className='md:text-6xl text-3xl font-bold text-evergreen'>Encontre livros que <br/> seja a sua cara!</h1>
            <p className='text-gray-500 text-xl my-5'>Lorem Ipsum</p> 
            <Button variant='dark'>
              Pesquisar livros
            </Button>
          </div>
          <img 
            src={handsBooks} 
            alt="Image hands with books" 
            className='w-[500px] h-[500px] absolute -bottom-[95px] right-0'
          />
        </div>
      </Container>
    </header>
  )
}