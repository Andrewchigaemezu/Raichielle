import style from "./DashboardRight.module.css";
import Header5 from "../../utilities/Header5";
// import Paragraph from "../../utilities/Paragraph";
import SmallText from "../../utilities/SmallText";
function DashboardRight() {
  return (
    <div className={style.dashboardright}>
      <div className={style.dashboardright_order_cont}>
        <Header5>Recent Orders</Header5>
        <ul>
          <li>
            <SmallText>
              {" "}
              New Order: two pair of black pants, street wears
            </SmallText>
          </li>
          <li>
            <SmallText>
              {" "}
              New Order: two pair of black pants, street wears
            </SmallText>
          </li>
          <li>
            <SmallText>
              {" "}
              New Order: two pair of black pants, street wears
            </SmallText>
          </li>
          <li>
            <SmallText>
              {" "}
              New Order: two pair of black pants, street wears
            </SmallText>
          </li>
          <li>
            <SmallText>
              {" "}
              New Order: two pair of black pants, street wears
            </SmallText>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardRight;
