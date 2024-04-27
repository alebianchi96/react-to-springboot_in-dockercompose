import axios from 'axios';
import { is_production_profile } from './service.js';

function be_configuration_baseurl() {
    return is_production_profile ? '/be-configuration' : '';
}

async function callConfigFromBeConfiguration() {
    return (await axios
        .get(be_configuration_baseurl() + "/config"))
        .data;
}

export { callConfigFromBeConfiguration };