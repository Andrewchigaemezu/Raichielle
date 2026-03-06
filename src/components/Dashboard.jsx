import style from "./Dashboard.module.css";
import DashboardCenter from "./dashboardcomponents/DashboardCenter";
import DashboardTop from "./dashboardcomponents/DashboardTop";
import DashboardRight from "./dashboardcomponents/DashboardRight";
import DashboardLeft from "./dashboardcomponents/DashboardLeft";
// import DashboardTop from "./dashboardcomponents/DashboardTop";

function Dashboard() {
  return (
    <section className={style.dashboard}>
      <DashboardLeft />
      <DashboardTop />

      <DashboardCenter />
      <DashboardRight />
    </section>
  );
}

export default Dashboard;
