import { Container } from "@/components/ui";

import styles from "./page.module.css";

export default async function Page({
  searchParams,
}: {
  searchParams: { order: string };
}) {
  const order = searchParams.order;

  return (
    <section className={styles["order-confirmation"]}>
      <Container>
        <h1 className={styles["order-confirmation__title"]}>
          ¡Muchas gracias por tu compra!
        </h1>
        <p className={styles["order-confirmation__heading"]}>
          Tu orden está en camino
        </p>
        <p className={styles["order-confirmation__description"]}>
          Llegaremos a la puerta de tu domicilio lo antes posible
        </p>
        <p className={styles["order-confirmation__tracking-label"]}>
          Código de seguimiento
        </p>
        <p className={styles["order-confirmation__tracking-code"]}>{order}</p>
      </Container>
    </section>
  );
}
