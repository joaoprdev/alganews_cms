import styled from "styled-components"
import Button from "../Button/Button"

export interface ConfirmProps {
  title: string
  onConfirm: () => any
  onCancel: () => any
}

export default function Confirm (props: ConfirmProps) {
  return <ConfirmWrapper>
      <ConfirmTitle>{props.title}</ConfirmTitle>
      <ConfirmButtonDisplay>
        <Button variant="danger" label="Sair" onClick={props.onCancel}/>
        <Button variant="primary" label="Sim" onClick={props.onConfirm}/>
      </ConfirmButtonDisplay>
    </ConfirmWrapper>
}

const ConfirmWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  background-color: #F3F8FA;
  color: #274060;
  width: 229px;
`
const ConfirmTitle = styled.h2`
  font-size: 17px;
  font-weight: 700;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
`

const ConfirmButtonDisplay = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`
