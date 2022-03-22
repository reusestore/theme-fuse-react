import FaqPageConfig from './faq/FaqPageConfig';
import KnowledgeBasePageConfig from './knowledge-base/KnowledgeBaseConfig';
import maintenancePageConfig from './maintenance/maintenancePageConfig';
import ProfilePageConfig from './profile/ProfilePageConfig';
import ClassicSearchPageConfig from './search/classic/ClassicSearchPageConfig';
import ModernSearchPageConfig from './search/modern/ModernSearchPageConfig';
import activitiesPageConfig from './activities/activitiesPageConfig';
import authenticationPagesConfig from './authentication/authenticationPagesConfig';
import comingSoonPagesConfig from './coming-soon/comingSoonPagesConfig';
import invoicePagesConfig from './invoice/invoicePagesConfig';
import errorPagesConfig from './error/errorPagesConfig';
import pricingPagesConfig from './pricing/pricingPagesConfig';

const pagesConfigs = [
  ...authenticationPagesConfig,
  comingSoonPagesConfig,
  errorPagesConfig,
  maintenancePageConfig,
  invoicePagesConfig,
  activitiesPageConfig,
  pricingPagesConfig,
  ProfilePageConfig,
  ClassicSearchPageConfig,
  ModernSearchPageConfig,
  FaqPageConfig,
  KnowledgeBasePageConfig,
];

export default pagesConfigs;
