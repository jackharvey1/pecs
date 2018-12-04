{
    "Id": "Policy1543967402064",
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Stmt1543967400601",
            "Action": [
                "s3:GetObject"
            ],
            "Effect": "Allow",
            "Resource": [
                "${bucket_arn}",
                "${bucket_arn}/*"
            ],
            "Principal": "*"
        }
    ]
}
