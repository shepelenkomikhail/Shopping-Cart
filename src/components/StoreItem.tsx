import { Button, Card } from "react-bootstrap";
import FormatCurrency from "../utilities/FormatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  return (
    //h-100 fills 100% of height
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{ objectFit: "cover", height: "200px" }}
      ></Card.Img>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseItemQuantity(id)}>
              Add to a cart
            </Button>
          ) : (
            <div className="d-flex justify-content-center align-items-center flex-column gap-2 w-100">
              <div className="d-flex justify-content-center align-items-center gap-2">
                <Button
                  className="align-items-center justify-content-center"
                  style={{ width: "2rem", height: "2rem" }}
                  onClick={() => decreaseItemQuantity(id)}
                >
                  -
                </Button>
                <span className="fs-3">{quantity}</span>
                <Button
                  className="align-items-center justify-content-center"
                  style={{ width: "2rem", height: "2rem" }}
                  onClick={() => increaseItemQuantity(id)}
                >
                  +
                </Button>
              </div>
              <div>
                <Button variant="danger" onClick={() => removeFromCart(id)}>
                  Remove
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
