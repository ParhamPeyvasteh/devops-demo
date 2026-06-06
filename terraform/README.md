# Terraform — AWS EKS Cluster

This directory contains Infrastructure as Code to provision a production-grade
Kubernetes cluster on AWS EKS.

## What it creates:
- VPC with public subnets and internet gateway
- EKS cluster (Kubernetes 1.28)
- Managed node group (2-4 t3.medium nodes with auto-scaling)
- All necessary IAM roles and policies

## Usage (requires AWS account):
```bash
terraform init
terraform plan
terraform apply