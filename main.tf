provider "aws"{
    region = "eu-central-1"
}

resource "aws_instance" "moj_serwer" {
    ami = "ami-0e872aee57663ae2d"
    instance_type = "t3.micro"
    vpc_security_group_ids = [aws_security_group.zapora_wizytowki.id]
    key_name = "klucz-wizytowki"
    user_data = <<-EOF
                #!/bin/bash
                apt update
                apt install docker.io -y
                systemctl start docker
                systemctl enable docker
                EOF
                
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
