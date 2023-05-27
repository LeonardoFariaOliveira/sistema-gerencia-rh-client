import { Container } from './style'

interface Props {
  toggleModal:() => void;
  showModal: boolean;
}

export default function BgDisable({ toggleModal, showModal }: Props) {
  return (
    <Container onClick={() => {
      toggleModal() 
      window.location.reload()
    }} showModal={ showModal }/>
  )
}
