import { Container } from './style'

export default function BgDisable({ toggleModal, showModal }: { toggleModal:() => void, showModal: boolean }) {
  return (
    <Container onClick={toggleModal} showModal={ showModal }/>
  )
}
