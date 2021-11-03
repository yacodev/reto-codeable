import { Img, Text, ContainerHeader  } from "./Button"
function View(props){

  return (
    <ContainerHeader onClick={props.onClick}>
      <Img>
        <img src={props.icon} alt="icon" />
      </Img>
      <Text>
        <p>{props.text}
          {props.value? (
            props.value
            ):(
            ""
          )}
        </p>
      </Text>
    </ContainerHeader>
  )
}


export default View