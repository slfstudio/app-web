import * as lodash from 'lodash';

export const manageException = (response: any) => {
  // primera forma donde viene el error con status y message
  if (lodash.get(response, 'data.status')) {
    const { data } = response;
    if (data.status === 'error') {
      if (lodash.get(data, 'data.message', null)) {
        throw data.data.message;
      } else if (lodash.get(data, 'message')) {
        throw data.message;
      }
    }
  }
};

// para exceptiones de htttp desde AxiosAPI
export const manageExceptionHTTP = (response: any) => {
  if (lodash.get(response, 'status')) {
    let res = '';
    switch (response.status) {
      case 404:
        res = 'Solicitud a recurso no disponible';
        break;
      case 500:
        res = 'Error interno del servidor';
        break;
      default:
        res = 'Error desconocido';
        break;
    }
    throw res;
  }
};
