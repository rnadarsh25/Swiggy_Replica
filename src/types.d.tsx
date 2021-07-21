import * as actions from './redux/actions/types';
export interface Props {
  id: number;
  name: string;
  variety: string[];
  image: string;
  ratings: number;
  timeReach: string;
}

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export interface DataState {
  allData: Props[];
}

export interface GetDataSuccessPayload {
  data: Props[];
}

export interface GetDataErrorPayload {
  error: string;
}

export interface GetDataRequest {
  type: typeof actions.FETCH_DATA_SAGA;
}

export type GetDataSuccess = {
  type: typeof actions.GET_DATA;
  payload: GetDataSuccessPayload;
};

export type DataActions = GetDataSuccess;
