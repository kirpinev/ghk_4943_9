import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";

export const App = () => {
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const submit = () => {
    window.gtag("event", "4943_get_sub", {
      variant_name: "4943_9",
    });

    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive
          tag="h1"
          view="medium"
          font="system"
          weight="bold"
        >
          Альфа-Счёт
        </Typography.TitleResponsive>
        <Gap size={16} />
        <Typography.Text view="primary-large">
          Откройте бесплатно, вносите и снимайте деньги в любое время. За
          обслуживание платить не нужно.
        </Typography.Text>
        <Gap size={32} />
        <Typography.Text view="primary-large" weight="bold">
          21% годовых в первые 2 месяца
        </Typography.Text>
        <Gap size={16} />
        <Typography.Text view="primary-large">
          Дальше — 11%, если тратите от 20 000 руб. в месяц по любым картам.
          Если тратите меньше — 4%.
        </Typography.Text>
        <Gap size={16} />
        <Typography.Text view="primary-large">
          Начислим % в последний день месяца.
        </Typography.Text>
      </div>

      <Gap size={72} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" onClick={submit}>
          Открыть счёт
        </ButtonMobile>
      </div>
    </>
  );
};
