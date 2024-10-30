import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import _, { orderBy } from 'lodash';
import {
  addPolicy,
  addVehicleOnFleet,
  getFleetsList,
  getMedicalPolicies,
  getPolicies,
  requestBidding,
  sharePolicy,
  updateAliasDoc,
  updatePlates,
} from '@/api/websersives';
import { downloadFile, getQueryStringIdPlatform } from '@/utils/generalFuncions';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { getInsuranceLogo, getPolicyIcon } from '@/utils/genericFunctions';

export interface policiesState {
  fetching?: boolean;
  error?: string;
  policiesValid?: Array<any>;
  policiesInvalid?: Array<any>;
  policiesRenewed?: Array<any>;
  active?: null | object;
  fleetCertificates?: Array<any>;
  policyImage?: null | string;
}

const initialState: policiesState = {
  fetching: true,
  error: '',
  policiesValid: [],
  policiesInvalid: [],
  policiesRenewed: [],
  active: null,
  fleetCertificates: [],
  policyImage: null,
};

export const policies = createSlice({
  name: 'policies',
  initialState,
  reducers: {
    setPolicyImage: (state, action: PayloadAction<policiesState>) => {
      state.policyImage = action.payload;
    },
    setResetPolicies: (state) => {
      state.policiesValid = [];
      state.policiesInvalid = [];
      state.policiesRenewed = [];
    },
  },
  extraReducers: (builder) => {
    builder
      //AddPolicyAction
      .addCase(fetchDoAddPolicyAction.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = '';
        state = { ...state, ...action.payload };
      })
      .addCase(fetchDoAddPolicyAction.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchDoAddPolicyAction.rejected, (state, action) => {
        state.fetching = false;
      })
      //fetch Active Policy
      .addCase(fetchActivePolicy.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = '';
        state = { ...state, ...action.payload };
      })
      .addCase(fetchActivePolicy.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchActivePolicy.rejected, (state, action) => {
        state.fetching = false;
      })
      //ChangePlates
      .addCase(fetchChangePlates.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = '';
        state = { ...state, ...action.payload };
      })
      .addCase(fetchChangePlates.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchChangePlates.rejected, (state, action) => {
        state.fetching = false;
      })
      // SharePolicy
      .addCase(fetchSharePolicy.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = '';
        state = { ...state, ...action.payload };
      })
      .addCase(fetchSharePolicy.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchSharePolicy.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.error.message;
      })

      // ChangeAliasPolicy
      .addCase(fetchChangeAliasPolicy.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = '';
        state = { ...state, ...action.payload };
      })
      .addCase(fetchChangeAliasPolicy.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchChangeAliasPolicy.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.error.message;
      })

      // FleetAddVehicleAction
      .addCase(fetchFleetAddVehicleAction.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = '';
        state = { ...state, ...action.payload };
      })
      .addCase(fetchFleetAddVehicleAction.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchFleetAddVehicleAction.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.error.message;
      })

      // FleetCertificatesAction
      .addCase(fetchFleetCertificatesAction.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = '';
        state.fleetCertificates = action.payload.fleetCertificates;
      })
      .addCase(fetchFleetCertificatesAction.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchFleetCertificatesAction.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.error.message;
      })

      // FleetRequestBiddingAction
      .addCase(fetchFleetRequestBiddingAction.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = '';
        state = { ...state, ...action.payload };
      })
      .addCase(fetchFleetRequestBiddingAction.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchFleetRequestBiddingAction.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.error.message;
      })

      // GetPoliciesAction
      .addCase(fetchGetPoliciesAction.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = '';
        if (action.payload.policiesInvalid) state.policiesInvalid = action.payload.policiesInvalid;
        if (action.payload.policiesValid) state.policiesValid = action.payload.policiesValid;
        if (action.payload.policiesRenewed) state.policiesRenewed = action.payload.policiesRenewed;
      })
      .addCase(fetchGetPoliciesAction.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchGetPoliciesAction.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.error.message;
      })

      // PoliciesDownloadFiles
      .addCase(fetchPoliciesDownloadFiles.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = '';
        state = { ...state, ...action.payload };
      })
      .addCase(fetchPoliciesDownloadFiles.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchPoliciesDownloadFiles.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.error.message;
      });
    //
  },
});

const sliceName = 'policies';

// do Request
export const fetchDoAddPolicyAction = createAsyncThunk(
  `${sliceName}/fetchDoAddPolicyAction`,
  async ({}, { rejectWithValue, getState }) => {
    try {
      let userId = getState().userReducer.loggedIn ? getState().userReducer.profile.id : 0;

      const { name, lastName, secondLastName, phone, email, image } = getState().catalogsGenericReducer.PolicyAddStep1;
      const { alias, policyNumber, insuranceName, insurance, insurancePhone, dateOfIssue, expireOn } =
        getState().catalogsGenericReducer.PolicyAddStep2;

      const dateOfIssueFormat = dateOfIssue;
      const expireOnFormat = expireOn;

      const imageBase64 = image ? image : '';

      let params = `cus_id|${userId}&alias|${alias}&no_poliza|${policyNumber}&aseguradora|${insuranceName}&id_aseguradora|${insurance}`;
      params += `&telefono_aseguradora|${insurancePhone}&vigencia_inicial|${dateOfIssueFormat}&vigencia_final|${expireOnFormat}`;
      params += `&contratante_nombre|${name}&contratante_apaterno|${lastName}&contratante_amaterno|${secondLastName}`;
      params += `&contratante_telefono|${phone}&contratante_correo|${email}&imagen|['${imageBase64}']`;
      params += `&APP_ID|${getQueryStringIdPlatform()}`;

      await AsyncStorage.setItem(policyNumber + 'phone', insurancePhone);

      console.log(insurancePhone);
      return await addPolicy({ params: params });
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
//
export const fetchActivePolicy = createAsyncThunk(
  `${sliceName}/fetchActivePolicy`,
  async ({ id, type, policy }, { rejectWithValue, getState }) => {
    try {
      const { vigencia_final, documentos } = policy;
      let contratante = null;
      const aseguradora_id = policy.aseguradora_id !== undefined ? policy.aseguradora_id : policy.id_aseguradora;
      const id = policy.id !== undefined ? policy.id : policy.id_document;
      const logoAseguradora = getInsuranceLogo(aseguradora_id);

      let vigencia_short = vigencia_final.slice(0, 10);
      let vigencia = null;
      if (type !== 1) {
        const vigenciaYear = vigencia_short.substring(vigencia_short.length - 4);
        const vigenciaDay = vigencia_short.substring(0, 2);
        const vigenciaMonth = vigencia_short
          .substring(vigenciaDay.length, vigencia_short.length - vigenciaYear.length)
          .replace(/-/gi, '');
        vigencia = new Date(`${vigenciaYear}-${vigenciaMonth}-${vigenciaDay}`);
        contratante = policy.contratante;
      } else {
        vigencia = new Date(vigencia_short);
        const { det } = policy;
        const { nombreTitular } = det;
        contratante = nombreTitular ? nombreTitular : 'N/A';
      }
      const policyImageDoc = documentos ? documentos.find((doc) => doc.tipo === 'P') : null;
      let policyImageUrl = null;

      if (policyImageDoc) {
        const { url } = policyImageDoc;
        const urlSplit = url.split('/');
        const lastUrlElement = urlSplit[urlSplit.length - 1];
        policyImageUrl = lastUrlElement
          ? urlSplit[0].includes('http') || urlSplit[0].includes('https')
            ? url
            : null
          : null;
        //policyImageUrl = lastUrlElement ? [{url}] : null;
      }
      const policyIcon = getPolicyIcon(type);

      policy = {
        ...policy,
        id,
        contratante,
        policyType: type,
        policyIcon,
        vigencia_final_formatted: vigencia,
      };

      return {
        id,
        ...policy,
        logoAseguradora,
        policyImageUrl,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchChangePlates = createAsyncThunk(
  `${sliceName}/fetchChangePlates`,
  async ({ data }, { rejectWithValue, getState }) => {
    try {
      const response = await updatePlates({ params: data });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const fetchSharePolicy = createAsyncThunk(
  `${sliceName}/fetchSharePolicy`,
  async ({ data }, { rejectWithValue, getState }) => {
    try {
      const response = await sharePolicy({ params: data });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const fetchChangeAliasPolicy = createAsyncThunk(
  `${sliceName}/fetchChangeAliasPolicy`,
  async ({ data }, { rejectWithValue, getState }) => {
    try {
      const response = await updateAliasDoc({ params: data });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const fetchFleetAddVehicleAction = createAsyncThunk(
  `${sliceName}/fetchFleetAddVehicleAction`,
  async ({ data }, { rejectWithValue, getState }) => {
    try {
      let userId = getState().userReducer.loggedIn ? getState().userReducer.profile.id : 0;
      await addVehicleOnFleet({
        params: `cus_id=${data.cus_id}&modelo=${data.year}&id_marca=${data.brand}&id_sub_marca=${data.subBrand}&description=&no_serie=${data.serieNumber}&no_motor=${data.motorNumber}&placas=${data.plateNumber}&conductor=${data.driverName}&alias=${data.certificateAlias}&marca=${data.brandText}&sub_marca=${data.subBrandText}&id_aseguradora=&id_empresa=&document=&id_document=${data.id_document}&id_document_type=&comments=&id_estatus=1&id_accion=1`,
      });
      return {};
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const fetchFleetCertificatesAction = createAsyncThunk(
  `${sliceName}/fetchFleetCertificatesAction`,
  async ({ id_kronos, type }, { rejectWithValue, getState }) => {
    try {
      if (getState().catalogsGenericReducer.isConnected === true) {
        let params = { params: `id=${id_kronos}` };
        const response = await getFleetsList(params);
        let object = response.data.data;

        return { fleetCertificates: object.incisos };
      } else {
        if (type === 1) {
          let dataTemp = await AsyncStorage.getItem('@policiesValid');
          dataTemp = JSON.parse(dataTemp);

          let fleets = _.find(dataTemp, { type: 7 });

          let certificates = _.find(fleets.subSections, { policyId: id_kronos });

          return { fleetCertificates: certificates.data };
        }
      }
      return {};
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchFleetRequestBiddingAction = createAsyncThunk(
  `${sliceName}/fetchFleetRequestBiddingAction`,
  async ({ id, insurancesIDs }, { rejectWithValue, getState }) => {
    try {
      let params = { params: `id_document=${id}&id_aseguradoras={id_aseguradora:[${insurancesIDs}]}` };
      const response = await requestBidding(params);
      return {};
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchGetPoliciesAction = createAsyncThunk(
  `${sliceName}/fetchGetPoliciesAction`,
  async ({ type, checkBackgroundData }, { rejectWithValue, getState, dispatch }) => {
    try {
      let data = [];
      let medicalResponse = null;
      const { id } = getState().userReducer.profile;
      let params = { params: `id=${id}&vigentes=${type}&APP_ID=${getQueryStringIdPlatform()}` };
      medicalResponse = await getMedicalPolicies(params);

      if (getState().catalogsGenericReducer.isConnected === true) {
        let params1 = { params: `id=${id}&vigentes=${type}&APP_ID=${getQueryStringIdPlatform()}` };
        const mixResponse = await getPolicies(params1);

        let subSectionsArray = [];
        if (checkBackgroundData === true) {
          // Obtener Incisos por Flotilla
          subSectionsArray = await Promise.all(
            mixResponse.data.data['Flotilla'].map((item) => {
              return new Promise((resolve) => {
                dispatch(fetchFleetCertificatesAction({ id_kronos: item.id_kronos })).then((res) => {
                  Promise.all(
                    getState().policiesReducer.fleetCertificates.map((item1, index) => {
                      return item1;
                    }),
                  ).then((res1) => {
                    resolve({ policyId: item.id_kronos, data: res1 });
                  });
                });
              });
            }),
          );
        }

        data = [
          {
            description: 'Gastos Médicos',
            policies: _.get(medicalResponse, 'data.data')
              ? _.filter(medicalResponse.data.data, { id_document_type: 1 })
              : [],
            type: 1,
            isCustom: false,
          },
          {
            description: 'Gastos Médicos Grupales',
            policies: _.get(medicalResponse, 'data.data')
              ? _.filter(medicalResponse.data.data, { id_document_type: 2 })
              : [],
            type: 1.5,
            isCustom: false,
          },
          {
            description: 'Autos',
            policies: _.get(mixResponse, 'data.data') ? mixResponse.data.data['Auto'] : [],
            type: 2,
            isCustom: false,
          },
          {
            description: 'Autos Custom',
            policies: _.get(mixResponse, 'data.data') ? mixResponse.data.data['Auto_Fer'] : [],
            type: 3,
            isCustom: true,
          },
          {
            description: 'Salud',
            policies: _.get(mixResponse, 'data.data') ? mixResponse.data.data['Salud'] : [],
            type: 4,
            isCustom: false,
          },
          {
            description: 'Vida',
            policies: _.get(mixResponse, 'data.data') ? mixResponse.data.data['Vida'] : [],
            type: 5,
            isCustom: false,
          },
          {
            description: 'Daños',
            policies: _.get(mixResponse, 'data.data') ? mixResponse.data.data['Daños'] : [],
            type: 6,
            isCustom: false,
          },
          {
            description: 'Flotillas',
            policies: _.get(mixResponse, 'data.data') ? mixResponse.data.data['Flotilla'] : [],
            subSections: subSectionsArray,
            type: 7,
            isCustom: false,
          },
          {
            description: 'Accidentes personales',
            policies: _.get(mixResponse, 'data.data') ? mixResponse.data.data['Accidentes'] : [],
            type: 8,
            isCustom: false,
          },
        ];

        data = orderBy(data, ['type'], ['asc']);
      } else {
        if (type === 0) {
          let dataTemp = await AsyncStorage.getItem('@policiesInvalid');
          if (dataTemp) {
            data = JSON.parse(dataTemp);
          }
        } else if (type === 1) {
          let dataTemp = await AsyncStorage.getItem('@policiesValid');
          console.log(dataTemp);
          if (dataTemp) {
            data = JSON.parse(dataTemp);
          }
        } else if (type === 2) {
          let dataTemp = await AsyncStorage.getItem('@policiesRenewed');
          if (dataTemp) {
            data = JSON.parse(dataTemp);
          }
        }
      }

      if (type === 0) {
        return { policiesInvalid: data };
      } else if (type === 1) {
        return { policiesValid: data };
      } else if (type === 2) {
        return { policiesRenewed: data };
      }

      return {};
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchPoliciesDownloadFiles = createAsyncThunk(
  `${sliceName}/fetchPoliciesDownloadFiles`,
  async ({ type }, { rejectWithValue, getState, dispatch }) => {
    try {
      let data = null;

      if (type === 0) {
        data = getState().policiesReducer.policiesInvalid;
        await AsyncStorage.setItem('@policiesInvalid', JSON.stringify(data));
        console.log('saved: @policiesInvalid');
      } else if (type === 1) {
        data = getState().policiesReducer.policiesValid;

        await AsyncStorage.setItem('@policiesValid', JSON.stringify(data));
      } else if (type === 2) {
        data = getState().policiesReducer.policiesRenewed;
        await AsyncStorage.setItem('@policiesRenewed', JSON.stringify(data));
        console.log('saved: @policiesRenewed');
      }

      let listFiles = [];

      for (let item of data) {
        for (let subItem of item.policies) {
          if (item.type === 1) {
            //gastos medicos
            if (subItem) {
              if (subItem.existe === true) {
                listFiles.push({
                  type: item.type,
                  policyId: subItem.id_document,
                  file: subItem.url_caratula,
                });
              }
            }
          } else if (item.type === 1.5) {
            console.log({
              type: item.type,
              policyId: subItem.id_document,
              file: subItem.url_caratula,
            });

            if (subItem.existe === true) {
              listFiles.push({
                type: item.type,
                policyId: subItem.id_document,
                file: subItem.url_caratula,
              });
            }

            if (subItem) {
              for (let objectSub of subItem.det) {
                if (objectSub) {
                  console.log(objectSub);
                  if (objectSub.existe === true) {
                    listFiles.push({
                      type: item.type,
                      policyId: parseInt(objectSub.no_poliza_det),
                      file: objectSub.url_certificado,
                    });
                  }
                }
              }
            }
          } else if (item.type === 2) {
            let fileObject = _.find(subItem.documentos, { tipo: 'P' });

            if (fileObject) {
              if (fileObject.existe === true) {
                listFiles.push({
                  type: item.type,
                  policyId: parseInt(subItem.id_kronos),
                  file: fileObject.url,
                });
              }
            }
          } else if (item.type === 3) {
            let fileObject = _.find(subItem.documentos, { tipo: 'P' });

            if (fileObject) {
              if (fileObject.existe === true) {
                listFiles.push({
                  type: item.type,
                  policyId: parseInt(subItem.id_kronos),
                  file: fileObject.url,
                });
              }
            }
          } else if (item.type === 5) {
            let fileObject = _.find(subItem.documentos, { tipo: 'P' });

            if (fileObject) {
              if (fileObject.existe === true) {
                listFiles.push({
                  type: item.type,
                  policyId: parseInt(subItem.id_kronos),
                  file: fileObject.url,
                });
              }
            }
          } else if (item.type === 7) {
            let fileObject = _.find(subItem.documentos, { tipo: 'P' });

            if (fileObject) {
              if (fileObject.existe === true) {
                listFiles.push({
                  type: item.type,
                  policyId: parseInt(subItem.id_kronos),
                  file: fileObject.url,
                });
              }
            }

            for (let object of item.subSections) {
              for (let objectSub of object.data) {
                if (objectSub) {
                  if (objectSub.existe === true) {
                    listFiles.push({
                      type: item.type,
                      policyId: parseInt(objectSub.id_poliza_det),
                      file: objectSub.url,
                    });
                  }
                }
              }
            }
          } else {
            console.log(item.type);
          }
        }
      }

      for (let listItem of listFiles) {
        downloadFile(listItem.policyId, listItem.file).then((res) => {});
      }

      return {};
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
// Action creators are generated for each case reducer function
export const { setPolicyImage, setResetPolicies } = policies.actions;

export default policies.reducer;
