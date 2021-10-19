import { Container } from "./style";

const Button = ({schema = true, children, ...rest}) =>{
    return(
        <Container schema={schema} type='button' {...rest}>
            {children}
        </Container>
    )
}
export default Button;