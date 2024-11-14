import * as yup from 'yup';
import { parseDate } from './datesUtils';

const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email('please_enter_a_valid_email').required('email_is_required'),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required('password_is_required'), //msg_password
});

export const signupValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, ({ min }) => `Name must be at least ${min} characters`)
    .required('name_is_required'),
  lastName: yup.string().required('lastname_is_required'),
  email: yup.string().email('please_enter_a_valid_email').required('email_is_required'),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required('password_is_required'), //msg_password
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'passwords_must_match')
    .required('please_confirm_new_password'),
  birthdate: yup
    .string()
    .matches(dateRegex, 'date_must_be_in_the_format_MM/DD/YYYY')
    .test('is-date-valid', 'date_is_not_valid', (value) => {
      if (!value) {
        return false;
      }
      const [month, day, year] = value.split('/').map(Number);
      const inputDate = new Date(year, month - 1, day);
      const today = new Date();
      const date21YearsAgo = new Date(today.getFullYear() - 21, today.getMonth(), today.getDate());

      if (
        inputDate.getFullYear() !== year ||
        inputDate.getMonth() !== month - 1 ||
        inputDate.getDate() !== day ||
        !(inputDate <= date21YearsAgo)
      ) {
        return false;
      }
      return inputDate <= today;
    })
    .required('birth_date_is_required'),
  gender: yup.string().required('gender_is_required'),
  nationality: yup.string().required('nationality_is_required'),
});
export const recoverPasswordVaidationSchema = yup.object().shape({
  email: yup.string().email('please_enter_a_valid_email').required('email_is_required'),
});

export const addPolicyFormValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, ({ min }) => `Name must be at least ${min} characters`)
    .required('name_is_required'),
  lastName: yup.string().required('lastname_is_required'),
  email: yup.string().email('please_enter_a_valid_email').required('email_is_required'),
  phone: yup
    .string()
    .required('mobile_phone_is_required')
    .min(10, ({ min }) => `Phone must have ${min} characters`),
  phone_code: yup.string().required('select_a_phone_code'),
  rfc: yup.string().required('Select an option: natural person or legal entity'),
});

export const carFormValidationSchema = yup.object().shape({
  name: yup.string().required('name_is_required'),
  email: yup.string().email('please_enter_a_valid_email').required('email_is_required'),
  phone: yup
    .string()
    .required('mobile_phone_is_required')
    .min(10, ({ min }) => `Phone must have ${min} characters`),
  phone_code: yup.string().required('select_a_phone_code'),

  postalCode: yup.string().required('zip_code_is_required'),
  gender: yup.string().required('gender_is_required'),
  birthdate: yup
    .string()
    .matches(dateRegex, 'date_must_be_in_the_format_MM/DD/YYYY')
    .test('is-date-valid', 'date_is_not_valid', (value) => {
      if (!value) {
        return false;
      }
      const [month, day, year] = value.split('/').map(Number);
      const inputDate = new Date(year, month - 1, day);
      const today = new Date();
      const date21YearsAgo = new Date(today.getFullYear() - 21, today.getMonth(), today.getDate());

      if (
        inputDate.getFullYear() !== year ||
        inputDate.getMonth() !== month - 1 ||
        inputDate.getDate() !== day ||
        !(inputDate <= date21YearsAgo)
      ) {
        return false;
      }
      return inputDate <= today;
    })
    .required('birth_date_is_required'),
});

export const healthFormValidationSchema = yup.object().shape({
  insuranceType: yup.string().required('select_an_insurance_type'),
  alias: yup.string().required('alias_is_required'),
  gender: yup.string().required('gender_is_required'),
  birthdate: yup
    .string()
    .matches(dateRegex, 'date_must_be_in_the_format_MM/DD/YYYY')
    .test('is-date-valid', 'date_is_not_valid', (value) => {
      if (!value) {
        return false;
      }
      const [month, day, year] = value.split('/').map(Number);
      const inputDate = new Date(year, month - 1, day);
      const today = new Date();
      const date21YearsAgo = new Date(today.getFullYear() - 21, today.getMonth(), today.getDate());

      if (
        inputDate.getFullYear() !== year ||
        inputDate.getMonth() !== month - 1 ||
        inputDate.getDate() !== day ||
        !(inputDate <= date21YearsAgo)
      ) {
        return false;
      }
      return inputDate <= today;
    })
    .required('birth_date_is_required'),
  email: yup.string().email('please_enter_a_valid_email').required('email_is_required'),
  phone: yup
    .string()
    .required('mobile_phone_is_required')
    .min(10, ({ min }) => `Phone must have ${min} characters`),
  phone_code: yup.string().required('select_a_phone_code'),
});

export const homeFormValidationSchema = yup.object().shape({
  state_providence: yup.string().required('state_province_is_required'),
  city: yup.string().required('city_is_required'),
  suburb: yup.string().required('adress_line_1_is_required'),
  housingStatus: yup.string().required('select_housing_status'),
  content: yup.string().required('select_a_content_amount'),
  liability: yup.string().required('select_liability'),
  postalCode: yup.string().required('zip_code_is_required'),
});

export const homeInfoValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .required('mobile_phone_is_required')
    .min(10, ({ min }) => `Phone must have ${min} characters`),
  phone_code: yup.string().required('select_a_phone_code'),
  name: yup.string().required('name_is_required'),
  email: yup.string().email('please_enter_a_valid_email').required('email_is_required'),
});

export const quoteCarFormValidationSchema = yup.object().shape({
  year: yup.string().required('select_year'),
  brand: yup.string().required('select_a_brand'),
  model: yup.string().required('select_a_model'),
  version: yup.string().required('select_a_version'),
  coverage: yup.string().required('select_a_type_of_coverage'),
  payment_method: yup.string().required('select_a_payment_method'),
});

export const addBeneficiaryValidationSchema = yup.object().shape({
  beneficiary: yup.string().required('type_of_beneficiary_is_required'),
  gender: yup.string().required('gender_is_required'),
  birthdate: yup
    .string()
    .matches(dateRegex, 'date_must_be_in_the_format_MM/DD/YYYY')
    .test('is-date-valid', 'date_is_not_valid', (value) => {
      if (!value) {
        return false;
      }
      const [month, day, year] = value.split('/').map(Number);
      const inputDate = new Date(year, month - 1, day);
      const today = new Date();

      if (inputDate.getFullYear() !== year || inputDate.getMonth() !== month - 1 || inputDate.getDate() !== day) {
        return false;
      }
      return inputDate <= today;
    })
    .required('birth_date_is_required'),
});

export const travelAssistStepOneValidationSchema = yup.object().shape({
  birthdate: yup
    .string()
    .matches(dateRegex, 'date_must_be_in_the_format_MM/DD/YYYY')
    .test('is-date-valid', 'date_is_not_valid', (value) => {
      if (!value) {
        return false;
      }
      const [month, day, year] = value.split('/').map(Number);
      const inputDate = new Date(year, month - 1, day);
      const today = new Date();

      if (inputDate.getFullYear() !== year || inputDate.getMonth() !== month - 1 || inputDate.getDate() !== day) {
        return false;
      }
      return inputDate <= today;
    })
    .required('birth_date_is_required'),
  destination: yup.string().required('select_destination'),
  idPlanDetail: yup.string().required('select_travel_insurance_type'),
  start_date: yup
    .string()
    .matches(dateRegex, 'date_must_be_in_the_format_MM/DD/YYYY')
    .test('is-date-valid', 'date_must_be_in_the_future', (value) => {
      if (!value) {
        return false;
      }
      const [month, day, year] = value.split('/').map(Number);
      const inputDate = new Date(year, month - 1, day);
      const today = new Date();

      if (inputDate.getFullYear() !== year || inputDate.getMonth() !== month - 1 || inputDate.getDate() !== day) {
        return false;
      }
      return inputDate >= today;
    })
    .required('start_date_is_required'),
  end_date: yup
    .string()
    .matches(dateRegex, 'date_must_be_in_the_format_MM/DD/YYYY')
    .test('is-date-valid', 'end_date_must_be_after_the_start_date', (value) => {
      if (!value) {
        return false;
      }
      const [month, day, year] = value.split('/').map(Number);
      const inputDate = new Date(year, month - 1, day);
      const today = new Date();

      if (inputDate.getFullYear() !== year || inputDate.getMonth() !== month - 1 || inputDate.getDate() !== day) {
        return false;
      }
      return inputDate >= today;
    })
    .test('is-after-start-date', 'end_date_must_be_after_the_start_date', function (value) {
      const { start_date } = this.parent; // Accede a startDate
      const startDateObj = parseDate(start_date);
      const endDateObj = parseDate(value ?? '');

      return endDateObj > startDateObj; // Valida que endDate sea mayor que startDate
    })
    .required('end_date_is_required'),
  elegible_dependents: yup
    .number()
    .integer('dependents_over_must_be_an_integer')
    .typeError('dependents_over_must_be_a_number')
    .required('elegible_dependents_is_required'),
  dependents_over: yup
    .number()
    .integer('dependents_over_must_be_an_integer')
    .typeError('dependents_over_must_be_a_number')
    .required('please_select_an_option'),
});

export const travelAssistStepTwoValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, ({ min }) => `Name must be at least ${min} characters`)
    .required('name_is_required'),
  lastName: yup.string().required('lastname_is_required'),
  email: yup.string().email('please_enter_a_valid_email').required('email_is_required'),
  phone: yup
    .string()
    .required('mobile_phone_is_required')
    .min(10, ({ min }) => `Phone must have ${min} characters`),
  phone_code: yup.string().required('select_a_phone_code'),
  residence_country: yup.string().required('select_country_of_residence'),
});

export const travelAssistStepThreeValidationSchema = yup.object().shape({
  maximum_coverage: yup.string().required('select_maximum_coverage'),
  deductible: yup.string().required('select_deductible'),
  trip_cancellation: yup.string().required('please_select_an_option'),
  play_sports: yup.string().required('please_select_an_option'),
  medical_conditions: yup.string().required('please_select_if_you_have_any_pre'),
  pet_assistance: yup.string().required('select_if_pet_assistance_is_needed'),
  vip_legal_assistance: yup.string().required('please_select_an_option'),
  accidental_death: yup.string().required('please_select_an_option'),
});

// major health schemas:
export const majorHealthStepOneValidationSchema = yup.object().shape({
  //assigned_consultant: yup.string().required('select_assigned_consultant'),
  effectiveDate: yup.string().required('select_estimated_effective_date'),
  countryId: yup.string().required('select_country_of_residence'),
  languageId: yup.string().required('please_select_an_option'),
  firstName: yup
    .string()
    .min(2, ({ min }) => `Name must be at least ${min} characters`)
    .required('name_is_required'),
  lastName: yup.string().min(2, ({ min }) => `Last name must be at least ${min} characters`).required('lastname_is_required')
  ,
  email: yup.string().email('please_enter_a_valid_email').required('email_is_required'),
  birthdate: yup
    .string()
    .matches(dateRegex, 'date_must_be_in_the_format_MM/DD/YYYY')
    .test('is-date-valid', 'date_is_not_valid', (value) => {
      if (!value) {
        return false;
      }
      const [month, day, year] = value.split('/').map(Number);
      const inputDate = new Date(year, month - 1, day);
      const today = new Date();
      const date21YearsAgo = new Date(today.getFullYear() - 21, today.getMonth(), today.getDate());

      if (
        inputDate.getFullYear() !== year ||
        inputDate.getMonth() !== month - 1 ||
        inputDate.getDate() !== day ||
        !(inputDate <= date21YearsAgo)
      ) {
        return false;
      }
      return inputDate <= today;
    })
    .required('birth_date_is_required'),
  genderId: yup.string().required('sex_at_birth_is_required'),
  isSmoker: yup.string().required('please_select_an_option'),
  add_dependants: yup.string().required('please_select_an_option'),
  add_spouse: yup.string(),
  birthdate_spouse: yup
    .string()
    .matches(dateRegex, 'date_must_be_in_the_format_MM/DD/YYYY')
    .test('is-date-valid', 'date_is_not_valid', (value) => {
      if (!value) {
        return true; // Allow empty value when add_spouse is not "1"
      }
      const [month, day, year] = value.split('/').map(Number);
      const inputDate = new Date(year, month - 1, day);
      const today = new Date();

      if (inputDate.getFullYear() !== year || inputDate.getMonth() !== month - 1 || inputDate.getDate() !== day) {
        return false;
      }
      return inputDate <= today;
    })
    .when('add_spouse', {
      is: '1',
      then: (schema) => schema.required('birth_date_is_required'),
    }),
  isSmoker_spouse: yup.string().when('add_spouse', {
    is: '1',
    then: (schema) => schema.required('please_select_an_option'),
  }),
  genderId_spouse: yup.string().when('add_spouse', {
    is: '1',
    then: (schema) => schema.required('sex_at_birth_is_required'),
  }),
});

export const profileValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .required('mobile_phone_is_required')
    .min(10, ({ min }) => `Phone must have ${min} characters`),
  postalCode: yup.string().required('zip_code_is_required'),
  state_providence: yup.string().required('state_province_is_required'),
  city: yup.string().required('city_is_required'),
  suburb: yup.string().required('adress_line_1_is_required'),
  phone_code: yup.string().required('select_a_phone_code'),
});

export const changePasswordValidationSchema = yup.object().shape({
  currentPassword: yup.string().required('current_password_is_required'),
  newPassword: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .notOneOf([yup.ref('currentPassword')], 'new_password_must_be_different')
    .required('new_password_is_required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'passwords_must_match')
    .required('please_confirm_new_password'),
});
