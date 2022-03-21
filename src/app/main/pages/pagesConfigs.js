import FaqPageConfig from './faq/FaqPageConfig';
import KnowledgeBasePageConfig from './knowledge-base/KnowledgeBaseConfig';
import maintenancePageConfig from './maintenance/maintenancePageConfig';
import PricingStyle1PageConfig from './pricing/style-1/PricingStyle1PageConfig';
import PricingStyle2PageConfig from './pricing/style-2/PricingStyle2PageConfig';
import PricingStyle3PageConfig from './pricing/style-3/PricingStyle3PageConfig';
import ProfilePageConfig from './profile/ProfilePageConfig';
import ClassicSearchPageConfig from './search/classic/ClassicSearchPageConfig';
import ModernSearchPageConfig from './search/modern/ModernSearchPageConfig';
import activitiesPageConfig from './activities/activitiesPageConfig';
import authenticationPagesConfig from './authentication/authenticationPagesConfig';
import comingSoonPagesConfig from './coming-soon/comingSoonPagesConfig';
import invoicePagesConfig from './invoice/invoicePagesConfig';
import errorPagesConfig from './error/errorPagesConfig';

const pagesConfigs = [
  ...authenticationPagesConfig,
  comingSoonPagesConfig,
  errorPagesConfig,
  maintenancePageConfig,
  invoicePagesConfig,
  activitiesPageConfig,
  PricingStyle1PageConfig,
  PricingStyle2PageConfig,
  PricingStyle3PageConfig,
  ProfilePageConfig,
  ClassicSearchPageConfig,
  ModernSearchPageConfig,
  FaqPageConfig,
  KnowledgeBasePageConfig,
];

export default pagesConfigs;
