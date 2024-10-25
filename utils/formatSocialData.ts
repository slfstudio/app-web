import { dateFormat, genderFormat, replaceActionImage } from './genericFunctions';
import _ from 'lodash';

const formatSocialData = (data: object) => {
  let userData;
  let imageProfile = '';
  if (data.picture) {
    imageProfile = replaceActionImage(data.picture);
  }

  if (data) {
    if (data.genders && data.birthdays) {
      let { year, month, day } = _.find(data.birthdays, 'date').date;
      let genero = data.genders[0].value;
      userData = {
        id: data.id,
        email: data.email,
        name: data.givenName,
        lastName: data.familyName,
        gender: genderFormat(genero),
        birthday: dateFormat(day, month, year),
        picture: imageProfile,
      };
    } else {
      userData = {
        id: data.id,
        email: data.email,
        name: data.givenName,
        lastName: data.familyName,
        picture: imageProfile,
        gender: 0, // se pone default cuando el usuario no compartió su género
        birthday: '01/01/1900', // se pone por default cuando el usuario no comparte su birthday
      };
    }
  } else {
    userData = {
      id: data.id,
      email: data.email,
      name: data.givenName,
      lastName: data.familyName,
      picture: imageProfile,
      gender: 0, // se pone default cuando el usuario no compartió su género
      birthday: '01/01/1900', // se pone por default cuando el usuario no comparte su birthday
    };
  }

  return userData;
};

export default formatSocialData;
