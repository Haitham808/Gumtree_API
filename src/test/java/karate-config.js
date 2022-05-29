function fn() {
  var env = karate.env; // get java system property 'karate.env'
  karate.configure('ssl', true)
  karate.configure('connectTimeout', 60000);
  karate.configure('readTimeout', 120000);

  //DEFAULT ENVIRONMENT

  if (!env) {
    env = 'local'; //env can be anything: dev, qa, staging, etc.
  }



  karate.log('Selected environment is: ', env);

  var config = {
  // Any other config common to all environments
  //X_App_BUILD:'dev',
  };

  if(env == 'local') {
    config.host='http://localhost:7071/api'
   }

  else if(env == 'dev'){

      config.baseURL = 'https://ecg-api.gumtree.com.au/api/'
  }
  return config;
}

