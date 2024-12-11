import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

type Profile = {};

interface AuthState {
	profile: Profile | null;
	pending: boolean;
}

const initialState: AuthState = {
	pending: false,
	profile: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		updateAuthState(state, { payload }: PayloadAction<AuthState>) {
			state.profile = payload.profile;
			state.pending = payload.pending;
		},
	},
});

export const { updateAuthState } = authSlice.actions;

export const getAuthState = createSelector(
	(state: RootState) => state.auth,
	authState => authState
);

export default authSlice.reducer;
