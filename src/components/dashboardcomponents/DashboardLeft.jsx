import style from "./DashboardLeft.module.css";
import Header3 from "../../utilities/Header3";
import home_icon from "../../assets/icons/home_icon.svg";
import users_icon from "../../assets/icons/users_icon.svg";
import orders_icon from "../../assets/icons/orders_icon.svg";
import settings_icon from "../../assets/icons/settings_icon.svg";
import campaign_icon from "../../assets/icons/campaign_icon.svg";
import logout_icon from "../../assets/icons/logout_icon.svg";
import Paragraph from "../../utilities/Paragraph";

function DashboardLeft() {
  return (
    <div className={style.dashboardleft}>
      <Header3>Raichielle</Header3>
      <ul className={style.dashboard_nav_cont}>
        <li className={style.active_link}>
          <a href="#" className={style.dashboard_nav_btn}>
            <img src={home_icon} alt="home icon" />
            <Paragraph>Home</Paragraph>
          </a>
        </li>
        <li>
          <a href="#" className={style.dashboard_nav_btn}>
            <img src={users_icon} alt="uders icon" />
            <Paragraph>Users</Paragraph>
          </a>
        </li>
        <li>
          <a href="#" className={style.dashboard_nav_btn}>
            <img src={orders_icon} alt="orders icon" />
            <Paragraph>Orders</Paragraph>
          </a>
        </li>
        <li>
          <a href="#" className={style.dashboard_nav_btn}>
            <img src={settings_icon} alt="settings icon" />
            <Paragraph>Settings</Paragraph>
          </a>
        </li>
        <li>
          <a href="#" className={style.dashboard_nav_btn}>
            <img src={campaign_icon} alt="campaign icon" />
            <Paragraph>Email Campaign</Paragraph>
          </a>
        </li>
        <li>
          <a href="#" className={style.dashboard_nav_btn}>
            <img src={logout_icon} alt="logout icon" />
            <Paragraph>Log out</Paragraph>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default DashboardLeft;
