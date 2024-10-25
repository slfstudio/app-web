import { makeRequest } from '@/utils/makeRequest';
import { types } from './requestsConstants';
import { getQueryStringIdPlatform } from '@/utils/generalFuncions';

export const signIn = async (params: object) => await makeRequest(types.SIGNIN, params);

export const signInSocial = async (params: object) => await makeRequest(types.SIGNIN_SOCIAL_NETWORKING, params);

export const signUp = async (params: string) => await makeRequest(types.SINGUP, params);

export const updateUserProfile = async (params: object) => await makeRequest(types.UPDATE_USER_PROFILE, params);

export const updateUserAvatar = async (params: object) => await makeRequest(types.UPDATE_USER_AVATAR, params);

export const changePassword = async (params: object) => await makeRequest(types.CHANGE_PASSWORD, params);

export const passwordRecovery = async (params: object) => await makeRequest(types.PASSWORD_RECOVERY, params);

export const getUserProfile = async (params: object) => await makeRequest(types.GET_USER_PROFILE, params);

export const getUserNotifications = async (params: object) => await makeRequest(types.GET_USER_NOTIFICATIONS, params);

export const updateUserNotificacionStatus = async (params: object) =>
  await makeRequest(types.UPDATE_USER_NOTIFICATION_STATUS, params);

export const logOut = async (params: object) => await makeRequest(types.LOG_OUT, params);

/* Policies */
export const addPolicy = async (params: object) => await makeRequest(types.ADD_POLICY, params);

export const deletePolicy = async (params: object) => await makeRequest(types.DELETE_POLICY, params);

export const updateAliasDoc = async (params: object) => await makeRequest(types.UPDATE_ALIAS_DOC, params);

export const getPolicies = async (params: object) => await makeRequest(types.GET_POLICIES, params);

export const getMedicalPolicies = async (params: object) => await makeRequest(types.GET_MEDICAL_POLICIES, params);

export const getPolicy = async (params: object) => await makeRequest(types.GET_POLICY, params);

export const sharePolicy = async (params: object) => await makeRequest(types.SHARE_POLICY, params);

export const getInsuranceCompanies = async (params: object) => await makeRequest(types.GET_INSURANCE_COMPANIES, params);
export const getInsuranceLicitacionCompanies = async (params: object) =>
  await makeRequest(types.GET_INSURANCE_LICITACION_COMPANIES, params);

export const updatePlates = async (params: object) => await makeRequest(types.UPDATE_PLATES, params);

export const requestViewDataBill = async (params: object) => await makeRequest(types.REQUEST_VIEW_DATA_BILL, params);

export const requestBill = async (params: object) => await makeRequest(types.REQUEST_BILL, params);

/* Incidents */
export const addIncidentReport = async (params: object) => await makeRequest(types.ADD_INCIDENT_REPORT, params);

export const addIncidentReportClaim = async (params: object) =>
  await makeRequest(types.ADD_INCIDENT_REPORT_CLAIM, params);

export const followIncidentReport = async (params: object) => await makeRequest(types.FOLLOW_INCIDENT_REPORT, params);

export const getHospitals = async (params: object) => await makeRequest(types.GET_HOSPITALS, params);

/* Brands */
export const getBrands = async (params: object) => await makeRequest(types.GET_BRANDS, params);

export const getSubBrands = async (params: object) => await makeRequest(types.GET_SUB_BRANDS, params);

export const getVersionsBrands = async (params: object) => await makeRequest(types.GET_VERSIONS_BRANDS, params);

/* Make a quote */
export const getQuoteByCar = async (params: object) => await makeRequest(types.GET_QUOTE_BY_CAR, params);

export const contactUserQuote = async (params: object) => await makeRequest(types.CONTACT_USER_QUOTE, params);

export const sendQuote = async (params: object) => await makeRequest(types.SEND_QUOTE, params);

export const quotePreRelease = async (params: object) => await makeRequest(types.QUOTE_PRE_RELEASE, params);

export const quoteRelease = async (params: object) => await makeRequest(types.QUOTE_RELEASE, params);

export const quotePayment = async (params: object) => await makeRequest(types.QUOTE_PAYMENT, params);

export const quoteHome = async (params: object) => await makeRequest(types.QUOTE_HOME, params);

export const quotePersonalAccidents = async (params: object) =>
  await makeRequest(types.QUOTE_PERSONAL_ACCIDENTS, params);

export const quoteBusinessDamage = async (params: object) => await makeRequest(types.QUOTE_BUSINESS_DAMAGE, params);

export const quoteOtherInsurance = async (params: object) => await makeRequest(types.QUOTE_OTHER_INSURANCE, params);

/* No traffic */
export const getNotInUseToday = async (params: object) => await makeRequest(types.GET_NOT_IN_USE_TODAY, params);

export const updateNotInUseToday = async (params: object) => await makeRequest(types.UPDATE_NOT_IN_USE_TODAY, params);

export const updateHologram = async (params: object) => await makeRequest(types.UPDATE_HOLOGRAM, params);

/* Promotion Mandar appid=fn()& expatriados*/
export const getPromotions = async (params?: string) =>
  await makeRequest(types.GET_PROMOTIONS, (params = `APP_ID=${getQueryStringIdPlatform()}`));

/* Tracking */
export const trackingPayments = async (params: object) => await makeRequest(types.TRACKING_PAYMENTS, params);

export const trackingIncidents = async (params: object) => await makeRequest(types.TRACKING_INCIDENTS, params);

export const trackingEndorsements = async (params: object) => await makeRequest(types.TRACKING_ENDORSEMENTS, params);

/* Tranqulity Center Resources */
export const getTranquilityCenterResources = async (params: string) =>
  await makeRequest(types.GET_TRANQUILITY_CENTER_RESOURCES, (params = ''));

export const healthQuiz = async (params: object) => await makeRequest(types.HEALTH_QUIZ, params);

export const addVehicleOnFleet = async (params: object) => await makeRequest(types.ADD_VEHICLE_ON_FLEET, params);

export const getFleetsList = async (params: object) => await makeRequest(types.GET_FLEETS_LISTV2, params);

export const requestBidding = async (params: object) => await makeRequest(types.REQUEST_BIDDING, params);

export const getZipCode = async (params: string) => await makeRequest(types.GET_ZIP_CODE, params);

export const getCenterTranquility = async (params: object) => await makeRequest(types.GET_CENTER_TRANQUILITY, params);
/*Endpont de Conciliacion */
export const postConciliation = async (params: object) => await makeRequest(types.MESSAGE_CONCILIATION, params);

export const getMicroAsured = async (params: object) => await makeRequest(types.GET_MICRO_ASURED, params);

export const quoteHealth = async (params: string) => await makeRequest(types.QUOTE_HEALTH, params);

/** EndPoint para consultar  Recibo  y factura ***/
export const generateReceiptInvoice = async (params: object) =>
  await makeRequest(types.GENERATE_RECEIPT_INVOICE, params);

export const qualityService = async (params: object, post: boolean) =>
  await makeRequest(types.QUALITY_SERVICE, params, post);

export const addIncidentReportImages = async (params: object) =>
  await makeRequest(types.ADD_INCIDENT_REPORT_IMAGES, params);

export const postResponsePush = async (params: object) => await makeRequest(types.POST_ACTION_PUSH, params);

export const sharedPolicy = async (params: object) => await makeRequest(types.SHARED_POLICY, params);

export const stopSharedPolicy = async (params: object) => await makeRequest(types.STOP_SHARED_POLICY, params);

export const deleteAccountPermanentlyAPI = async (params: object) =>
  await makeRequest(types.DELETE_ACCOUNT_PERMANENTLY, params);

export const getAreaCode = async () => await makeRequest(types.AREA_CODE, `APP_ID=${getQueryStringIdPlatform()}`);

export const getCountries = async () => await makeRequest(types.GET_COUNTRIES, `APP_ID=${getQueryStringIdPlatform()}`);

export const getLanguages = async () => await makeRequest(types.GET_LANGUAGES, `APP_ID=${getQueryStringIdPlatform()}`);

export const getRate = async (params: object | string) => await makeRequest(types.GET_RATE, params);

export const showCoute = async (params: object | string) => await makeRequest(types.SHOW_COUTE, params);

export const printCoute = async (params: string) => await makeRequest(types.PRINT_COUTE, params);
export const quoteTravel = async (params: string) => await makeRequest(types.QUOTE_TRAVEL, params);
