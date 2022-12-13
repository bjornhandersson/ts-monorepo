import * as cdk from 'aws-cdk-lib';
import {Construct} from 'constructs';

export class MyClass {

}

export class MyConstruct extends Construct {
    readonly vpc : cdk.aws_ec2.IVpc;
    constructor(scope: Construct, id: string){
        super(scope, id)

        this.vpc = cdk.aws_ec2.Vpc.fromLookup(this, 'VpcImport', {
            vpcId: '1234'
        })
    }
}