import { createBrowserHistory } from 'history';
import { basename } from './config';

// A singleton history object for easy API navigation
const history = createBrowserHistory({basename: basename});
export default history;
