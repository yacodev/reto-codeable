import styled from "@emotion/styled";

const Img = styled.div`
  display:flex;
  align-items:center;
  margin-left:10px;
  img{
    width:20px;
    height:20px;
  }
`

const Text = styled.div`
  display:flex;
  flex-direction:column;
  margin-left:10px;
  margin-top:8px;
  color:black;
  p{
    margin:0px;
  }
  .details--option{
    color:#676767;
  }
`

const ContainerButton = styled.div`
  display:flex;
  flex-direction:row;
  cursor:pointer;
`

function Button(props){

  return (
    <ContainerButton onClick={props.onClick}>
      <Img>
        <img src={props.icon} alt="icon" />
      </Img>
      <Text>
        <p>{props.text}</p>
        {props.details? (
          <p className="details--option">{props.details}{props.id}</p>
        ):(
          ""
        )}
      </Text>
    </ContainerButton>
  )
}


export {Button,Img,Text,ContainerButton}