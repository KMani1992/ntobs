import {companyWatcher} from './Company';
import {loginWatcher} from './Login';
import {pcontrolWatcher} from './PControl';
import {operatorWatcher} from './Operator';
import {productWatcher} from './Product';
import {salesWatcher} from './Sales';
import {salesReportWatcher} from './SalesReport';

export default function* rootWatchers(){
    yield[
        companyWatcher(),
        loginWatcher(),
        pcontrolWatcher(),
        operatorWatcher(),
        productWatcher(),
        salesWatcher(),
        salesReportWatcher(),
    ];
}