import * as cdk from 'aws-cdk-lib';
import * as liba from '@gpsgate/lib-a';
import { Construct } from 'constructs';

export class MyAppB extends Construct {
    constructor(scope: Construct, id: string) {
        super(scope, id)

        // Uses CDK 2.45 which DO NOT have NODEJS_18_X
        const libType = new liba.MyConstruct(this, 'AppB');
        const func = new cdk.aws_lambda.Function(this, 'AppAFunction', {
            vpc: libType.vpc,
            runtime: cdk.aws_lambda.Runtime.NODEJS_16_X,
            handler: 'index.handler',
            code: cdk.aws_lambda.Code.fromInline(`
            exports.handler = async (event) => {
              console.log('event: ', event)
            };
          `)
        });
    }
}