import { Typography } from "@alfalab/core-components/typography";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import rocket from "../assets/rocket.png";
import { thxSt } from "./style.css";
import { appSt } from "../style.css.ts";

export const ThxLayout = () => {
  const submit = () => {
    window.gtag("event", "5264_get_real_sub", {
      variant_name: "5264_9",
    });
  };

  return (
    <>
      <div className={thxSt.container}>
        <img
          alt="Картинка ракеты"
          src={rocket}
          width={150}
          className={thxSt.rocket}
        />
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="large"
          defaultMargins
          weight="bold"
        >
          Ещё чуть-чуть
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium">
          И мы запустим сервис! Добавляем последние штрихи, чтобы всё работало
          идеально.
        </Typography.Text>
      </div>

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          href="https://online.alfabank.ru/"
          onClick={submit}
        >
          Спасибо, понятно!
        </ButtonMobile>
      </div>
    </>
  );
};
