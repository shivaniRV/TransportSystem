import { Navigate, Route, Routes } from 'react-router';
import { DefaultPage } from '@/pages/dashboards';
import { RequireAuth } from '@/auth/RequireAuth';
import { Demo7Layout } from '@/layouts/demo7';
import { ErrorsRouting } from '@/errors';
import { AuthPage } from '@/auth';
import { AuthenticationWelcomeMessagePage, AuthenticationAccountDeactivatedPage, AuthenticationGetStartedPage } from '@/pages/authentication';
import ProfileForm from '../pages/ProfileDetails/ProfileForm';
import ClosetScreen from '../pages/ClosetScreen/Closet'; 
import { ProfileProvider } from '../pages/profileContext';
import {HomePage} from '../pages/HomePage';
import CreateProfile from '../pages/Profile/createProfile';
import {Demo1DarkSidebarPage} from '../../src/pages/dashboards/demo1/dark-sidebar/Demo1DarkSidebarPage'
import Lookbook from '../pages/Lookbook';
 import ProfileGamerPage from "../../src/pages/public-profile/profiles/gamer/ProfileGamerPage";
 import ClosetStepper from "../pages/ClosetScreen/ClosetStepper"
 import ScoreOutfitScreen from '../pages/Scoring';
 import UploadedPictureScreen from '../pages/ScoringII'

const AppRoutingSetup = () => {
  return (
    <ProfileProvider> 
    <Routes>
      <Route element={<RequireAuth />}>
        <Route element={<Demo7Layout />}>
          <Route path="/" element={<HomePage/>}/>
         
          <Route path="/dark-sidebar" element={<Demo1DarkSidebarPage />} />
        

          {/* <Route path="/public-profile/profiles/gamer" element={<ProfileGamerPage />} /> */}
          
          {/* <Route path="/dark-sidebar" element={<Demo1DarkSidebarPage />} />
          <Route path="/public-profile/profiles/default" element={<ProfileDefaultPage />} />
          
          <Route path="/Wadrobe" element={<WardrobeScreen/>}></Route>
          <Route path="/createProfile" element={<CreateProfile />} />

          
          {
          // /* <Route path="/dark-sidebar" element={<Demo1DarkSidebarPage />} />
          // <Route path="/public-profile/profiles/default" element={<ProfileDefaultPage />} />
          /*
          <Route path="/public-profile/profiles/creator" element={<ProfileCreatorPage />} />
          <Route path="/public-profile/profiles/company" element={<ProfileCompanyPage />} />
          <Route path="/public-profile/profiles/nft" element={<ProfileNFTPage />} />
          <Route path="/public-profile/profiles/blogger" element={<ProfileBloggerPage />} />
          <Route path="/public-profile/profiles/crm" element={<ProfileCRMPage />} />
          <Route path="/public-profile/profiles/gamer" element={<ProfileGamerPage />} />
          <Route path="/public-profile/profiles/feeds" element={<ProfileFeedsPage />} />
          <Route path="/public-profile/profiles/plain" element={<ProfilePlainPage />} />
          <Route path="/public-profile/profiles/modal" element={<ProfileModalPage />} />
          <Route path="/public-profile/projects/3-columns" element={<ProjectColumn3Page />} />
          <Route path="/public-profile/projects/2-columns" element={<ProjectColumn2Page />} />
          <Route path="/public-profile/works" element={<ProfileWorksPage />} />
          <Route path="/public-profile/teams" element={<ProfileTeamsPage />} />
          <Route path="/public-profile/network" element={<ProfileNetworkPage />} />
          <Route path="/public-profile/activity" element={<ProfileActivityPage />} />
          <Route path="/public-profile/campaigns/card" element={<CampaignsCardPage />} />
          <Route path="/public-profile/campaigns/list" element={<CampaignsListPage />} />
          <Route path="/public-profile/empty" element={<ProfileEmptyPage />} />
          <Route path="/account/home/get-started" element={<AccountGetStartedPage />} />
          <Route path="/account/home/user-profile" element={<AccountUserProfilePage />} />
          <Route path="/account/home/company-profile" element={<AccountCompanyProfilePage />} />
          <Route path="/account/home/settings-sidebar" element={<AccountSettingsSidebarPage />} />
          <Route path="/account/home/settings-enterprise" element={<AccountSettingsEnterprisePage />} />
          <Route path="/account/home/settings-plain" element={<AccountSettingsPlainPage />} />
          <Route path="/account/home/settings-modal" element={<AccountSettingsModalPage />} />
          <Route path="/account/billing/basic" element={<AccountBasicPage />} />
          <Route path="/account/billing/enterprise" element={<AccountEnterprisePage />} />
          <Route path="/account/billing/plans" element={<AccountPlansPage />} />
          <Route path="/account/billing/history" element={<AccountHistoryPage />} />
          <Route path="/account/security/get-started" element={<AccountSecurityGetStartedPage />} />
          <Route path="/account/security/overview" element={<AccountOverviewPage />} />
          <Route path="/account/security/allowed-ip-addresses" element={<AccountAllowedIPAddressesPage />} />
          <Route path="/account/security/privacy-settings" element={<AccountPrivacySettingsPage />} />
          <Route path="/account/security/device-management" element={<AccountDeviceManagementPage />} />
          <Route path="/account/security/backup-and-recovery" element={<AccountBackupAndRecoveryPage />} />
          <Route path="/account/security/current-sessions" element={<AccountCurrentSessionsPage />} />
          <Route path="/account/security/security-log" element={<AccountSecurityLogPage />} />
          <Route path="/account/members/team-starter" element={<AccountTeamsStarterPage />} />
          <Route path="/account/members/teams" element={<AccountTeamsPage />} />
          <Route path="/account/members/team-info" element={<AccountTeamInfoPage />} />
          <Route path="/account/members/members-starter" element={<AccountMembersStarterPage />} />
          <Route path="/account/members/team-members" element={<AccountTeamMembersPage />} />
          <Route path="/account/members/import-members" element={<AccountImportMembersPage />} />
          <Route path="/account/members/roles" element={<AccountRolesPage />} />
          <Route path="/account/members/permissions-toggle" element={<AccountPermissionsTogglePage />} />
          <Route path="/account/members/permissions-check" element={<AccountPermissionsCheckPage />} />
          <Route path="/account/integrations" element={<AccountIntegrationsPage />} />
          <Route path="/account/notifications" element={<AccountNotificationsPage />} />
          <Route path="/account/api-keys" element={<AccountApiKeysPage />} />
          <Route path="/account/appearance" element={<AccountAppearancePage />} />
          <Route path="/account/invite-a-friend" element={<AccountInviteAFriendPage />} />
          <Route path="/account/activity" element={<AccountActivityPage />} />
          <Route path="/network/get-started" element={<NetworkGetStartedPage />} />
          <Route path="/network/user-cards/mini-cards" element={<NetworkMiniCardsPage />} />
          <Route path="/network/user-cards/team-crew" element={<NetworkUserCardsTeamCrewPage />} />
          <Route path="/network/user-cards/author" element={<NetworkAuthorPage />} />
          <Route path="/network/user-cards/nft" element={<NetworkNFTPage />} />
          <Route path="/network/user-cards/social" element={<NetworkSocialPage />} />
          <Route path="/network/user-table/team-crew" element={<NetworkUserTableTeamCrewPage />} />
          <Route path="/network/user-table/app-roster" element={<NetworkAppRosterPage />} />
          <Route path="/network/user-table/market-authors" element={<NetworkMarketAuthorsPage />} />
          <Route path="/network/user-table/saas-users" element={<NetworkSaasUsersPage />} />
          <Route path="/network/user-table/store-clients" element={<NetworkStoreClientsPage />} />
          <Route path="/network/user-table/visitors" element={<NetworkVisitorsPage />} />
          <Route path="/auth/welcome-message" element={<AuthenticationWelcomeMessagePage />} />
          <Route path="/auth/account-deactivated" element={<AuthenticationAccountDeactivatedPage />} />
          <Route path="/authentication/get-started" element={<AuthenticationGetStartedPage />} />  */}
          {/* <Route path="/ProfileDetails" element={<ProfileForm />} /> */}
         
          {/* <Route path="ClosetStepper" element={<ClosetStepper/>}></Route> */}
         
          {/* <Route path="createProfile" element={<createProfile/>}></Route> */}
         
          
        </Route>
      </Route>
      {/* Error and Auth Routes */}
      <Route path="error/*" element={<ErrorsRouting />} />
      <Route path="auth/*" element={<AuthPage />} />
      {/* Fallback for unmatched routes */}
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Routes>
    </ProfileProvider>
  );
};

export { AppRoutingSetup };
