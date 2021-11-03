import styled from "@emotion/styled";

const Img = styled.div`
  img{
    width:30px;
    height:30px;
  }
`

const Text = styled.div`
  color:white;
  display:flex;
  align-items:center;
  margin-left:10px;
`

const ContainerHeader = styled.div`
  background-color:#1976D2;
  display:flex;
  flex-direction:row;
  justify-content:center;
`

function Header(props){
  return (
    <ContainerHeader>
      <Img>
        <img src={props.icon} alt="icon" />
      </Img>
      <Text>
        {props.text}
      </Text>
    </ContainerHeader>
  )
}

export {Header}