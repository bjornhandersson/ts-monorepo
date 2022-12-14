import * as ggs_common from '@gpsgate/shared';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class MyAppA extends Construct {
    constructor(scope: Construct, id: string) {
        super(scope, id)

        // Uses CDK 2.53 which have NODEJS_18_X
        var exports = new ggs_common.CommonResources(scope);
        const vpc = exports.getDefaultVpc();

        const func = new cdk.aws_lambda.Function(this, 'AppAFunction', {
            vpc: vpc,
            runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
            handler: 'index.handler',
            code: cdk.aws_lambda.Code.fromInline(`
            exports.handler = async (event) => {
              console.log('event: ', event)
            };
          `)
        });
    }
}