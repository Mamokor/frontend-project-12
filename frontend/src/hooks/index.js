import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider.jsx';
import { SocketContext } from '../context/SocketProvaider.jsx';
import { FilterContext } from '../context/FilterProvaider.jsx';

export const useAuth = () => useContext(AuthContext);
export const useSocket = () => useContext(SocketContext);
export const useFilter = () => useContext(FilterContext);
