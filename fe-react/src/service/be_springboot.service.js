import axios from 'axios';
import { is_production_profile } from './service.js';

function be_springboot_baseurl() {
    return is_production_profile ? '/be-springboot' : '';
}

async function callCiaoFromBeSpringboot() {
    return (await axios
        .get(be_springboot_baseurl() + "/ciao"))
        .data;
}

export { callCiaoFromBeSpringboot };