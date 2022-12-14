import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class CommonResources {
    readonly scope: Construct; 
    constructor(scope: Construct) {
        this.scope = scope;
    }

    getDefaultVpc() : cdk.aws_ec2.IVpc {
        return cdk.aws_ec2.Vpc.fromLookup(this.scope, 'VpcImport', {
            vpcId: '1234'
        })
    }
}