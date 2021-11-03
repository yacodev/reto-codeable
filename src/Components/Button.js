import styled from "@emotion/styled";

const Img = styled.div`
  display:flex;
  align-items:center;
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

const ContainerHeader = styled.div`
  display:flex;
  flex-direction:row;
`

function Button(props){

  return (
    <ContainerHeader onClick={props.onClick}>
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
    </ContainerHeader>
  )
}


export {Button,Img,Text,ContainerHeader}