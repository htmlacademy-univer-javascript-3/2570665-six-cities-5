import { AuthorizationStatus } from '../../dataTypes/enums/authorization-status';
import { State } from '../../dataTypes/state';

type UserState = Pick<State, 'User'>;

export const getIsAuthorized = (state: UserState) => state['User'].authorizationStatus === AuthorizationStatus.Authorized;

export const getAuthorizationStatus = (state: UserState) => state['User'].authorizationStatus;

export const getUserInfo = (state: UserState) => state['User'].userInfo;
