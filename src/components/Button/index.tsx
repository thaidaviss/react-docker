import { ButtonProps as AntBtnProps } from 'antd/lib/button';
import { ButtonStyle } from './styles';

interface IProps extends AntBtnProps {
  type?: 'primary' | 'outline' | 'shadow' | any;
  border?: 'rounder';
}
function Button({ ...props }: IProps) {
  return <ButtonStyle {...props} />;
}

export default Button;
