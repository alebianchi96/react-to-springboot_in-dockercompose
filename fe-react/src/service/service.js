function retrieve_profile() { return (process.env.REACT_APP_PROFILE ?? 'prod').trim(); }

function is_production_profile() { return "prod" === retrieve_profile(); }

export { is_production_profile };