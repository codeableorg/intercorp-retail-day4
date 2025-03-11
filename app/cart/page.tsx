import { Button, Container, Section } from "@/components/ui";

import styles from "./page.module.css";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { fetchCart } from "@/lib/data";
import { cookies } from "next/headers";
import { ChangeButton } from "@/components/cart/change-button";
import { DeleteButton } from "@/components/cart/delete-button";

export default async function Page() {
  const cookiesStore = cookies();
  const sessionId = cookiesStore.get("cart_session_id")?.value;

  const cart = sessionId ? await fetchCart(sessionId) : { items: [], total: 0 };

  return (
    <Section>
      <Container>
        <div className={styles.cart}>
          <h1 className={styles.cart__title}>Carrito de compras</h1>
          <div className={styles.cart__container}>
            {cart?.items?.map(({ product, quantity, id }) => (
              <form key={product.id} className={styles.cart__item}>
                <input type="hidden" name="id" value={id} />
                <div className={styles["cart__item-image"]}>
                  <img
                    src={product.img_src}
                    alt={product.alt || product.title}
                    className={styles["cart__item-image-content"]}
                  />
                </div>
                <div className={styles["cart__item-details"]}>
                  <div className={styles["cart__item-header"]}>
                    <h2 className={styles["cart__item-title"]}>
                      {product.title}
                    </h2>
                    <DeleteButton id={id} />
                  </div>
                  <div className={styles["cart__item-footer"]}>
                    <p className={styles["cart__item-price"]}>
                      ${product.price}
                    </p>
                    <div className={styles["cart__item-quantity"]}>
                      <ChangeButton id={id} quantity={-1}>
                        <Minus />
                      </ChangeButton>
                      <span className={styles["cart__item-display"]}>
                        {quantity}
                      </span>

                      <ChangeButton id={id} quantity={1}>
                        <Plus />
                      </ChangeButton>
                    </div>
                  </div>
                </div>
              </form>
            ))}
            <div className={styles.cart__total}>
              <p>Total</p>
              <p>${(cart?.total || 0).toFixed(2)}</p>
            </div>
            <div className={styles.cart__action}>
              <Button
                size="lg"
                className={styles["cart__action-button"]}
                asChild
              >
                {cart?.items && cart.items.length > 0 ? (
                  <Link href="/checkout">Continuar Compra</Link>
                ) : (
                  <Link href="/">Ir a la tienda</Link>
                )}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
