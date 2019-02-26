process.env.AWS_SDK_LOAD_CONFIG = true;
const aws = require('aws-sdk');
const awsConfigurator = require('amplify-provider-awscloudformation');

module.exports = (context) => {
  // eslint-disable-next-line no-shadow
  context.aws.configureWithCreds = context => awsConfigurator.configure.loadConfiguration(context, aws);
};


module.exports = aws;