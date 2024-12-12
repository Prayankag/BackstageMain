variable "region" {
  description = "AWS region to deploy resources"
  type        = string
}

variable "cluster_name" {
  description = "Name of the ECS Cluster"
  type        = string
}

variable "task_family" {
  description = "ECS Task Definition Family"
  type        = string
}

variable "network_mode" {
  description = "Network mode for ECS Task"
  type        = string
}

variable "task_cpu" {
  description = "CPU for the ECS Task"
  type        = string
}

variable "task_memory" {
  description = "Memory for the ECS Task"
  type        = string
}

variable "container_name" {
  description = "Name of the container in ECS Task"
  type        = string
}

variable "container_image" {
  description = "Image for the container"
  type        = string
}

variable "container_cpu" {
  description = "CPU for the container"
  type        = number
}

variable "container_memory" {
  description = "Memory for the container"
  type        = number
}

variable "container_port" {
  description = "Port exposed by the container"
  type        = number
}

variable "host_port" {
  description = "Host port for the container"
  type        = number
}

variable "service_name" {
  description = "Name of the ECS Service"
  type        = string
}

variable "desired_count" {
  description = "Desired number of ECS tasks"
  type        = number
}

variable "subnet_ids" {
  description = "List of subnet IDs for ECS Service"
  type        = list(string)
}

variable "security_group_ids" {
  description = "List of security group IDs for ECS Service"
  type        = list(string)
}

variable "assign_public_ip" {
  description = "Assign public IP to ECS tasks"
  type        = bool
}
