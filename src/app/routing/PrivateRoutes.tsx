import { FC, lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import TopBarProgress from "react-topbar-progress-indicator";
import { DashboardWrapper } from "../pages/dashboard/DashboardWrapper";
import { MenuTestPage } from "../pages/MenuTestPage";
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";
import { WithChildren } from "../../_metronic/helpers";
import BuilderPageWrapper from "../pages/layout-builder/BuilderPageWrapper";
import HomeMain from "../pages/WaterTransport/Homepage/HomeMain";
import SidebarPage from "../pages/WaterTransport/Admin_Water/AdminDashboard";
import {ShipsPage} from "../pages/WaterTransport/Admin_Water/Ships";
import { EmployeePage } from "../pages/WaterTransport/Admin_Water/Employees";
import { UsersPage } from "../pages/WaterTransport/Admin_Water/ShipUsers";
import { RevenuePage } from "../pages/WaterTransport/Admin_Water/Revenue";
import { BusesPage } from "../pages/GroundTransport/Admin_Ground/Bus";
import { BusEmployeePage } from "../pages/GroundTransport/Admin_Ground/Busemployee";
import { BusRevenuePage } from "../pages/GroundTransport/Admin_Ground/BusRevenu";
import { PlansPage } from "../pages/AirTransport/Admin_Air/Plane";


const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import("../modules/profile/ProfilePage"));
  const WizardsPage = lazy(() => import("../modules/wizards/WizardsPage"));
  const AccountPage = lazy(() => import("../modules/accounts/AccountPage"));
  const WidgetsPage = lazy(() => import("../modules/widgets/WidgetsPage"));
  const ChatPage = lazy(() => import("../modules/apps/chat/ChatPage"));
  const UsersPage = lazy(
    () => import("../modules/apps/user-management/UsersPage")
  );

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />
        {/* Pages */}
        <Route path="dashboard" element={<DashboardWrapper />} />
        {/* <Route
          path="builder"
          element={
            <SuspensedView>
              <BuilderPageWrapper />
            </SuspensedView>
          }
        /> */}
        {/* <Route path="menu-test" element={<MenuTestPage />} /> */}
        {/* Lazy Modules */}
        {/* <Route
          path="crafted/pages/profile/*"
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        /> */}
        <Route path="/home" element={<HomeMain />} />
        <Route path="/AdminDashboard"element={<SidebarPage/>}></Route>
        <Route path="Water/Ships" element ={<ShipsPage/>}></Route>
        <Route path='Water/Employees' element={<EmployeePage/>}></Route>
        <Route path='Water/ShipUsers' element={<UsersPage/>}></Route>
        <Route path="Water/Revenue" element={<RevenuePage/>}></Route>
        <Route path="Ground/Bus" element={<BusesPage/>}></Route>
        <Route path="Ground/BusEmployee" element={<BusEmployeePage/>}></Route>
        <Route path="Ground/BusRevenue" element={<BusRevenuePage/>}></Route> 
        <Route path="Air/Plan" element={<PlansPage/>}></Route> 


        {/* <Route
          path="crafted/pages/wizards/*"
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        /> */}

        {/* <Route
          path="crafted/widgets/*"
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        /> */}
        {/* <Route
          path="crafted/account/*"
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        /> */}
        {/* <Route
          path="apps/chat/*"
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        /> */}
        {/* <Route
          path="apps/user-management/*"
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        /> */}
        {/* Page Not Found */}
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue("--bs-primary");
  TopBarProgress.config({
    barColors: {
      "0": baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export { PrivateRoutes };
