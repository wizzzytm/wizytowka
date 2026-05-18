variable "aws_region" {
  description = "Region serwera"
  type = string
  default = "eu-central-1"
}

variable "ec2_instance_type" {
    description = "Typ instancji EC2"
    type = string
    default = "t3.micro"
}

variable "key_name" {
    description = "Nazwa klucza SSH"
    type = string
    default = "klucz-wizytowki"
}
