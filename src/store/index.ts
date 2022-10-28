

import configureStore from '../configure-store';
import { loadState } from '../services/persist.service';

const initialState = loadState();
export const store = configureStore(initialState); 
