import Typography from "../Typograhy";
import style from "./index.module.css";
import icon from "../../../src/assets/svg/messageIcon.svg";
const Footer = () => {
  return (
    <section className={style.section}>
      <div>
        <div className={style.flex_container}>
          <div className={style.list}>
            <Typography
              fontWeight="500"
              size="16px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              color="#fff"
            >
              Quick links
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              Blog
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              Join our taem
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              About us
            </Typography>
          </div>
          <div className={style.list}>
            <Typography
              fontWeight="500"
              size="16px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              color="#fff"
            >
              Quick links
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              Blog
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              Join our taem
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              About us
            </Typography>
          </div>
          <div className={style.list}>
            <Typography
              fontWeight="500"
              size="16px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              color="#fff"
            >
              Quick links
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              Blog
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              Join our taem
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              About us
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              About us
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              About us
            </Typography>
          </div>
          <div className={style.newLetter}>
            <Typography
              fontWeight="500"
              size="16px"
              lineHeight="18px"
              marginHorizontal="20px"
              color="#fff"
            >
              Newsletter
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              Subscribe to timbo cloud newsletter below.
            </Typography>
            <div className={style.subscribe_form}>
              <input
                className={style.footer_input}
                placeholder="Email address"
              />
              <div className={style.subcribe_btn}>
                <img src={icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
