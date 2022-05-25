import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { DeepPartial } from "@reduxjs/toolkit";
import merge from "lodash/merge";
import configureMockStore from "redux-mock-store";

import { makeStore, RootState } from "./store";

const store = makeStore();

export const initialState = store.getState();
export const mockStore = configureMockStore([thunk]);

type MockStore = ReturnType<typeof mockStore> & typeof store;

export const createMockStore = (state: DeepPartial<RootState> = {}) =>
  mockStore(merge({}, initialState, state)) as MockStore;
