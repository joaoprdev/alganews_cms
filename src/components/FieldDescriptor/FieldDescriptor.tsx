import * as FD from './FieldDescriptor.styles'

export interface FieldDescriptorProps {
  label: string
  value: React.ReactNode
}

export default function FieldDescriptor ({label, value} : FieldDescriptorProps) {
  
  return <FD.Wrapper>
    <FD.Label>{label}</FD.Label> 
    <FD.Value>{value}</FD.Value> 
  </FD.Wrapper>
  
}