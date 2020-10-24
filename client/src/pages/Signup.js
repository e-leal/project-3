import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../src/utils/mutations';

const [addUser, { error }] = useMutation(ADD_USER);