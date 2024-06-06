
// import * as cdk from '@aws-cdk/core';
// import { MyS3Bucket } from '../constructs/my-s3-bucket';

// export declare class MyStack extends cdk.Stack {
//   constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
//     super(scope, id, props);

//     new MyS3Bucket(this, 'MyFirstBucket', {
//       bucketName: 'my-unique-bucket-name',
//       versioned: true,
//     });

    
//   }
// }


import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { MyS3Bucket } from '../constructs/my-s3-bucket';

export class MyStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new MyS3Bucket(this, 'MyFirstBucket', {
      bucketName: 'my-unique-bucket-name',
      versioned: true,
    });
  }
}