#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkS3BucketStack } from '../lib/cdk-s3bucket-stack';

const app = new cdk.App();
new CdkS3BucketStack(app, 'CdkS3BucketStack');
