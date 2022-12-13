import * as liba from '@gpsgate/lib-a';
import { Construct } from 'constructs';

export class MyAppB extends Construct {
    constructor(scope: Construct, id: string) {
        super(scope, id)

        const libType = new liba.MyConstruct(this, 'AppB');
    }
}