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
import { RevenuePage } from "../pages/WaterTransport/Admin_Water/Revenue";
import { BusesPage } from "../pages/GroundTransport/Admin_Ground/Bus";
import { BusEmployeePage } from "../pages/GroundTransport/Admin_Ground/Busemployee";
import { BusRevenuePage } from "../pages/GroundTransport/Admin_Ground/BusRevenu";
import { PlansPage } from "../pages/AirTransport/Admin_Air/Aircraft";
import { FAQPage } from "../pages/WaterTransport/Admin_Water/FAQ";
import AdminDashboard_G from "../pages/GroundTransport/Admin_Ground/AdminDashboard_G";
import { FAQGroudPage } from "../pages/GroundTransport/Admin_Ground/FAQGround";
import { AircraftRevenuePage } from "../pages/AirTransport/Admin_Air/AirRevenue";
import { AircraftFAQPage} from "../pages/AirTransport/Admin_Air/AirFAQ";
import { BusUserPage } from "../pages/GroundTransport/Admin_Ground/busUser";
import { AirEmployeePage } from "../pages/AirTransport/Admin_Air/AirEmployee";
import { AirUserPage } from "../pages/AirTransport/Admin_Air/Airuser";

import { BusBookingPage } from "../pages/GroundTransport/Admin_Ground/busbookig";
import { ShipBookingPage } from "../pages/WaterTransport/Admin_Water/Shipbooking";
import { AirBookingPage } from "../pages/AirTransport/Admin_Air/Airbooking";
// import  {ShipUserPage} from "../pages/WaterTransport/Admin_Water/ShipUsers";


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
        <Route path="Water/Revenue" element={<RevenuePage/>}></Route>
        {/* <Route path="Water/Shipuser" element={<ShipUserPage/>}></Route> */}
        <Route  path="Water/booking" element={<ShipBookingPage/>}></Route>
        <Route path="Water/FAQ" element={<FAQPage/>}></Route>
        <Route path="Ground/AdminDashboard" element={<AdminDashboard_G/>}></Route>
        <Route path="Ground/Bus" element={<BusesPage/>}></Route>
        <Route path="Ground/BusEmployee" element={<BusEmployeePage/>}></Route>
        <Route path="Ground/BusRevenue" element={<BusRevenuePage/>}></Route> 
        <Route path="Ground/bususer" element={<BusUserPage/>}></Route>
        <Route path="Ground/busbooking" element={<BusBookingPage/>}></Route>
        <Route path="Ground/FAQ" element={<FAQGroudPage/>}></Route>
        <Route path="Air/Aircrafts" element={<PlansPage/>}></Route> 
        <Route path="Air/Revenue" element={<AircraftRevenuePage/>}></Route> 
        <Route path="Air/FAQ" element={<AircraftFAQPage/>}></Route>
        <Route path="Air/Employee" element={<AirEmployeePage/>}></Route>
        <Route path="Air/Users" element={<AirUserPage/>}></Route>
        {/* <Route path="Air/booking" element={<AirBookingPage/>}></Route> */}
       



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
