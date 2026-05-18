output "instance_ip" {
    description = "IP address of the server"
    value = aws_instance.moj_serwer.public_ip
}