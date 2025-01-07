import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../dataTypes/enums/authorization-status';
import { AuthInfo } from '../../dataTypes/authorization-info';


type UserInitialState = {
  authorizationStatus: AuthorizationStatus;
  userInfo: AuthInfo | null;
};

const initialState: UserInitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setAuthorizationStatus: (
      state,
      action: PayloadAction<AuthorizationStatus>,
    ) => {
      state.authorizationStatus = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<AuthInfo>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setAuthorizationStatus, setUserInfo } = userSlice.actions;
