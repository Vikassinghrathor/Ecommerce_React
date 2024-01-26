import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const CartButton = () => {
  return (
    <div>
        <Badge  as={Button}>
          Cart
        </Badge>
    </div>
  );
}

export default CartButton;