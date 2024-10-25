export const types = {
  /* Seguridad */
  SIGNIN: '/bts_ws_login.aspx',
  SIGNIN_SOCIAL_NETWORKING: '/bts_ws_login_social_network.aspx',
  SINGUP: '/bts_ws_customer_ins.aspx',
  UPDATE_USER_PROFILE: '/bts_ws_upd_data_customers.aspx',
  UPDATE_USER_AVATAR: '/bts_ws_upd_profile_photo.aspx',
  CHANGE_PASSWORD: '/bts_ws_upd_customer_pass.aspx',
  PASSWORD_RECOVERY: '/bts_ws_recover_password.aspx',
  GET_USER_PROFILE: '/bts_ws_user_perfil.aspx',
  GET_USER_NOTIFICATIONS: '/bts_ws_get_notifications.aspx',
  UPDATE_USER_NOTIFICATION_STATUS: '/bts_ws_upd_notification.aspx',
  LOG_OUT: '/bts_ws_log_out.aspx',

  /* Pólizas */
  ADD_POLICY: '/fer_save_data_policy.aspx',
  DELETE_POLICY: '/bts_ws_fer_del_policy.aspx',
  UPDATE_ALIAS_DOC: '/bts_ws_crm_upd_alias_doc.aspx',
  GET_POLICIES: '/bts_ws_polizas.aspx',
  GET_MEDICAL_POLICIES: '/bts_ws_gm_V2.aspx',
  GET_POLICY: '/bts_ws_info_police.aspx',
  SHARE_POLICY: '/bts_ws_share_policy.aspx',
  GET_INSURANCE_COMPANIES: '/fer_ws_aseguradoras.aspx',
  GET_INSURANCE_LICITACION_COMPANIES: '/bts_ws_aseguradoras_licitacion.aspx',
  UPDATE_PLATES: '/bts_ws_upd_placas_ver_app.aspx',
  REQUEST_VIEW_DATA_BILL: '/bts_ws_crm_view_data_bill.aspx',
  REQUEST_BILL: '/bts_ws_request_bill.aspx',

  /* Siniestro */
  ADD_INCIDENT_REPORT: '/bts_ws_incident_report.aspx',
  ADD_INCIDENT_REPORT_CLAIM: '/bts_ws_inciden_report_claim.aspx',
  FOLLOW_INCIDENT_REPORT: '/bts_ws_resp_sinister.aspx',
  GET_HOSPITALS: '/bts_ws_get_data_hospitals.aspx',

  /* Marcas */
  GET_BRANDS: '/bts_ws_marcas.aspx',
  GET_SUB_BRANDS: '/bts_ws_marcas_submarcas.aspx',
  GET_VERSIONS_BRANDS: '/bts_ws_marcas_versiones.aspx',

  /* Comparación de auto (cotizador) */
  GET_QUOTE_BY_CAR: '/bts_ws_marcas_versiones_carrocerias_V2.aspx',
  CONTACT_USER_QUOTE: '/bts_ws_callme.aspx',
  SEND_QUOTE: '/bts_ws_send_quote.aspx',
  QUOTE_PRE_RELEASE: '/bts_ws_preRelease.aspx',
  QUOTE_RELEASE: '/bts_ws_release.aspx',
  QUOTE_PAYMENT: '/bts_ws_payment_V2.aspx',
  QUOTE_HOME: '/bts_ws_home_insurance.aspx',
  HEALTH_QUIZ: '/bts_ws_health_quiz_1.aspx',
  QUOTE_OTHER_INSURANCE: '/bts_ws_other_insurance.aspx',

  /* Hoy no circula*/
  GET_NOT_IN_USE_TODAY: '/bts_ws_get_hnc.aspx',
  UPDATE_NOT_IN_USE_TODAY: '/bts_ws_upd_stat_hnc.aspx',
  UPDATE_HOLOGRAM: '/bts_ws_upd_holograma.aspx',

  /* Promociones */
  GET_PROMOTIONS: '/bts_ws_promotions_V2.aspx',

  /* Historial */
  TRACKING_PAYMENTS: '/bts_ws_rpt_info_payment.aspx',
  TRACKING_INCIDENTS: '/bts_ws_rpt_info_sinister.aspx',
  TRACKING_ENDORSEMENTS: '/bts_ws_rpt_info_endorsement.aspx',

  /* Tu centro de tranquilidad */
  GET_TRANQUILITY_CENTER_RESOURCES: '/bts_ws_center_tranquility.aspx',

  ADD_VEHICLE_ON_FLEET: '/bts_ws_crm_reg_request.aspx',
  GET_FLEETS_LIST: '/bts_ws_get_flotilla.aspx',
  GET_FLEETS_LISTV2: '/bts_ws_get_incisos.aspx',

  REQUEST_BIDDING: '/bts_ws_solicitar_licitacion.aspx',

  /* Additional Services */
  GET_ZIP_CODE: '/bts_ws_get_zip_code_data.aspx',

  GET_CENTER_TRANQUILITY: '/bts_ws_center_tranquility.aspx',

  QUOTE_PERSONAL_ACCIDENTS: '/bts_ws_quote_salud.aspx',
  QUOTE_BUSINESS_DAMAGE: '/bts_ws_quote_danios_empresarial.aspx',

  /*Endpoint de conciliación*/
  MESSAGE_CONCILIATION: '/bts_ws_get_img_pay.aspx',
  GET_MICRO_ASURED: '/bts_ws_get_micro_asured.aspx',

  QUOTE_HEALTH: '/bts_ws_quote_GMM_V2.aspx',

  /** EndPoint para consultar  Recibo  y factura ***/
  GENERATE_RECEIPT_INVOICE: '/bts_ws_send_notify_receipt_invoice.aspx',

  QUALITY_SERVICE: '/bts_ws_resp_sinister.aspx',

  ADD_INCIDENT_REPORT_IMAGES: '/bts_ws_save_sinister_image.aspx',

  /** EndPoint para enviar respuesta del modal del push notification ***/
  POST_ACTION_PUSH: '/bts_ws_resp_sinister.aspx',
  SHARED_POLICY: '/bts_ws_get_shared_policies.aspx',
  STOP_SHARED_POLICY: '/bts_ws_stop_shared.aspx',
  DELETE_ACCOUNT_PERMANENTLY: '/bts_ws_upd_customer_status_app.aspx',
  /** Area code */
  AREA_CODE: '/bts_ws_get_lada_countries.aspx',

  GET_COUNTRIES: '/bts_ws_rb_get_countries.aspx',
  GET_LANGUAGES: '/bts_ws_rb_get_languages.aspx',
  GET_RATE: '/bts_ws_rb_get_rate.aspx',
  SHOW_COUTE: '/bts_ws_rb_show_cuote_x_plain.aspx',
  PRINT_COUTE: '/bts_ws_rb_print_quote.aspx',

  QUOTE_TRAVEL: '/bts_ws_quote_travel.aspx',
};
