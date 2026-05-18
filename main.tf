provider "aws" {
    region = var.aws_region
}

terraform {
  backend "s3" {
    bucket = "terraform-stan-wizytowka-kolek"
    key = "wizytowka/terraform.tfstate"
    region = "eu-central-1"
  }
}

data "aws_ami" "ubuntu" {
    most_recent = true
    owners = ["099720109477"]
    filter {
        name = "name"
        values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
    }
    filter {
        name = "virtualization-type"
        values = ["hvm"]
    }
}

resource "aws_instance" "moj_serwer" {
    ami = data.aws_ami.ubuntu.id
    instance_type = var.ec2_instance_type
    vpc_security_group_ids = [aws_security_group.zapora_wizytowki.id]
    key_name = var.key_name
    user_data = <<-EOF
                #!/bin/bash
                apt update
                apt install docker.io -y
                systemctl start docker
                systemctl enable docker
                EOF
    tags = {
        Name        = "Serwer-Wizytowka-Produkcja"
        Zarzadzanie = "Terraform-GitOps"
    }                
}

resource "aws_security_group" "zapora_wizytowki" {
    name = "zapora_wizytowki"
    description = "Otwiera porty dla WWW i SSH"

    ingress {
        from_port = 80
        to_port = 80
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
    ingress {
        from_port = 22
        to_port = 22
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
    egress {
        from_port = 0
        to_port = 0
        protocol = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }

}
