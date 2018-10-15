import {companyWatcher} from './Company';
import {loginWatcher} from './Login';

export default function* rootWatchers(){
    yield[
        companyWatcher(),
        loginWatcher()
    ];
}