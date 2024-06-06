import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface MyS3BucketProps extends s3.BucketProps {}

export class MyS3Bucket extends Construct {
  constructor(scope: Construct, id: string, props: MyS3BucketProps) {
    super(scope, id);

    new s3.Bucket(this, id, props);
  }
}
