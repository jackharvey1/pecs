terraform {
    backend "s3" {
        bucket = "jackharvey-terraform-state"
        key    = "pecs"
        region = "eu-west-2"
    }
}

provider "aws" {
    region  = "eu-west-2"
    profile = "personal"
}

data "aws_route53_zone" "hosted_zone" {
    name = "${var.domain}."
}

data "template_file" "bucket_policy" {
    template = "${file("templates/bucket-policy.tpl")}"

    vars {
        bucket_arn = "${aws_s3_bucket.bucket.arn}"
    }
}

resource "aws_s3_bucket_policy" "bucket_policy" {
    bucket = "${aws_s3_bucket.bucket.id}"
    policy = "${data.template_file.bucket_policy.rendered}"
}

resource "aws_s3_bucket" "bucket" {
    bucket = "pecs.jackharvey.io"
    acl    = "public-read"

    website {
        index_document = "index.html"
    }
}

resource "aws_route53_record" "pecs" {
    zone_id = "${data.aws_route53_zone.hosted_zone.zone_id}"
    name    = "pecs.${var.domain}"
    type    = "A"

    alias {
        name                   = "${aws_s3_bucket.bucket.website_domain}"
        zone_id                = "${aws_s3_bucket.bucket.hosted_zone_id}"
        evaluate_target_health = false
    }
}
