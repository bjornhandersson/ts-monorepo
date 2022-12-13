import * as liba from '@gpsgate/lib-a';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import fs from 'fs-extra'

export class MyAppA extends Construct {
    constructor(scope: Construct, id: string) {
        super(scope, id)

        fs.copy('a', 'b');

        const libType = new liba.MyConstruct(this, 'AppB');
        const func = new cdk.aws_lambda.Function(this, 'AppAFunction', {
            vpc: libType.vpc,
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