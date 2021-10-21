import { Container } from "./style";

const Button = ({ schema = true, children, type, ...rest }) => {
  return (
    <Container schema={schema} type={type} {...rest}>
      {children}
    </Container>
  );
};
export default Button;
