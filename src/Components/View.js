import styled from "@emotion/styled";
import { Img, Text } from "./Button"

const ContainerView = styled.div`
  display:flex;
  flex-direction:row;
`

function View(props){

  return (
    <ContainerView onClick={props.onClick}>
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
    </ContainerView>
  )
}


export {View}