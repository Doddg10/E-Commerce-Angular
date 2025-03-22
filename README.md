# CI/CD Pipeline with GitHub Actions, Docker, and Kubernetes

This project implements a complete CI/CD pipeline for a web application using open-source tools. It automates building, testing, containerization, and deployment to a Kubernetes cluster.

## Features

- **CI with GitHub Actions**: Automates building and testing.
- **Containerization**: Uses Docker for builds and runs.
- **Artifact Storage**: Stores build artifacts in GitHub Packages.
- **Testing**: Unit tests, E2E tests with Cypress, and performance/security tests.
- **Deployment**: Deploys to a Kubernetes cluster on EC2 with blue/green deployments.
- **Secrets Management**: Uses GitHub Secrets for storing credentials.
- **Monitoring**: Implements performance and metrics monitoring.
- **Infrastructure as Code (IaC)**: Automates pipeline setup with Ansible/Puppet.

## Technologies Used

- **CI/CD**: GitHub Actions
- **Containerization**: Docker
- **Kubernetes Deployment**: EC2 (via SSH)
- **Testing**: ESLint, Karma, Jasmine, Cypress
- **Artifact Storage**: GitHub Packages
- **Secrets Management**: GitHub Secrets
- **Automation**: Ansible/Puppet

## 1. Setting Up the CI/CD Pipeline

### 1.1 Forking the Repository

The first step is to fork an open-source Angular project and integrate CI/CD.

### 1.2 Setting Up CI with GitHub Actions

- **Define GitHub Actions Workflow**: Create a `.github/workflows/ci.yml` file.
- **Install Dependencies**: Use `npm ci` for caching optimization.
- **Lint & Format Code**: Run ESLint and Prettier.
- **Run Unit Tests**: Execute Karma & Jasmine tests in headless Chrome.
- **Build Application**: Use `ng build` to generate production-ready files.
- **Upload Artifacts**: Store build outputs in GitHub Packages.

## 2. Containerization with Docker

- **Create Dockerfile**: Define a lightweight image using Alpine or slim base images.
- **Optimize Image**: Minimize layers and use multi-stage builds.
- **Push Image**: Use GitHub Actions to push the image to Docker Hub.

## 3. Running E2E Tests with Cypress

- **Run Cypress in Headless Mode**: Automate browser tests in GitHub Actions.
- **Store Cypress Test Results**: Upload logs and reports as build artifacts.

## 4. Deploying to Kubernetes

- **Use SSH to Connect to EC2**: Deploy Kubernetes manifests remotely.
- **Configure Kubernetes Manifests**: Define `Deployment`, `Service`, and `Ingress`.
- **Blue/Green Deployment**: Roll out updates with zero downtime.

## 5. Performance & Security Testing

- **Run Lighthouse Audits**: Check web performance and accessibility.
- **Security Scanning**: Use tools like Trivy for container vulnerability scanning.

## 6. Infrastructure as Code (IaC)

- **Automate Setup with Ansible/Puppet**: Provision infrastructure and configure dependencies.

## 7. Monitoring & Logging

- **Enable Performance Monitoring**: Use Prometheus and Grafana.
- **Centralized Logging**: Collect logs using Fluentd/Elasticsearch.

## 8. Secrets Management

- **Store Credentials Securely**: Use GitHub Secrets for DockerHub and EC2 credentials.

## Conclusion

This project demonstrates a fully automated CI/CD pipeline for a web application using open-source tools. 


## How to Run

1. **Fork the Repository**: Click the 'Fork' button at the top of this page.
2. **Clone the Repo**: 
   ```bash
   git clone https://github.com/yourusername/repo-name.git
   cd repo-name
3. **Set Up GitHub Secrets**: 
   - Go to your GitHub repository's settings.
   - Under the "Secrets and variables" section, select "Actions".
   - Add the following secrets:
     - `DOCKERHUB_USERNAME`: Your DockerHub username.
     - `DOCKERHUB_TOKEN`: Your DockerHub password or personal access token.
     - `EC2_HOST`: The private key for EC2 access.
     - `EC2_USER`: The user to access the EC2 instance.
     - `KUBERNETES_KUBECONFIG`: Kubernetes config file or base64-encoded kubeconfig (depending on your setup).
     - `SSH_KEY`: The SSH key you set for your EC2 instance to run with.

   **Alternatively**, if you want to automate this process and insert the secrets into your GitHub repository immediately, you can use the provided Ansible script. Here's how:

   - Ensure you have the [GitHub CLI](https://cli.github.com/) installed and authenticated with your GitHub account.
     ```bash
     gh auth login
     ```
   - Run the following Ansible playbook locally to insert the secrets into your GitHub repository automatically:
     ```bash
     ansible-playbook -i inventory git-repo-playbook.yaml 
     ```
   - You'll insert values for them in the playbook and it will automatically insert them into your repository as GitHub secrets.

4. **Set Up AWS EC2 Instance (if using EC2)**:
   - Ensure your EC2 instance has access to Docker and Kubernetes.
   - Configure the instance with a public IP for SSH access and ensure proper security group settings. allow inboud for 
     ![Image](https://github.com/user-attachments/assets/c13b5566-a7ea-4dd2-aece-ab6cd452fb1b)


     The Ansible script does the following:
     1. **Install Dependencies**: It updates the system package manager (`apt`) and installs `curl`.
     2. **Install K3s**: It fetches and installs K3s using the official installation script from Rancher, ensuring that it’s set up with the appropriate configuration for your EC2 instance.
     3. **Start K3s**: The script enables and starts the K3s service.
     4. **Wait for Kubernetes to Be Ready**: It ensures that the K3s Kubernetes service is ready by checking the status of the nodes.
     5. **Configure Kubeconfig**: The script creates a symlink to the K3s configuration file, sets the appropriate ownership, and ensures that the kubeconfig file uses the EC2 instance's public IP for accessing the Kubernetes cluster.

     **To run the playbook**:
     1. Make sure you have Ansible installed on your local machine.
     2. Ensure you can SSH into the EC2 instance.
     3. Run the Ansible playbook:
        ```bash
        ansible-playbook -i inventory k3s-playbook.yaml --private-key angular-key.pem
        ```

     This will automate the entire Kubernetes installation process on your EC2 instance, making it ready for use in your CI/CD pipeline.

5. **Run the CI Pipeline**:
   - Once you push any changes to your repository, GitHub Actions will automatically trigger the CI pipeline.
   - The pipeline will:
     - Run linting and unit tests.
     - Build the Docker image.
     - Push the Docker image to DockerHub.
     - Deploy the application to Kubernetes on Ubuntu EC2.
     - Run Cypress E2E tests.


6. **Access the Application**:
   - After the deployment, access your application using the EC2 Public IP and the NodePort from the deployment http://13.60.99.107:32320/

7. **Monitor and Debug**:
   - Check the GitHub Actions logs for each step of the CI/CD process.
   - For more details on performance and security testing, refer to the relevant reports generated in the pipeline.

8. **Enable Email Notifications for CI/CD Build Failure and Success**:
   - GitHub provides built-in email notifications for CI/CD build success or failure. To enable email notifications for your workflow status, follow these steps:
   
     1. **Navigate to Your GitHub Repository Settings**:
        - Go to the **Settings** tab of your repository.
   
     2. **Go to Notifications Settings**:
        - Under the **Notifications** section in the left sidebar, click on **Watching**.
   
     3. **Set Up Email Notifications**:
        - Make sure you are **Watching** the repository. This setting will ensure you get notifications for all activities, including workflow runs.
   
     4. **Configure Workflow Notifications**:
        - GitHub will automatically send email notifications for workflow status changes, such as when a build succeeds or fails. You can configure these notifications at a more granular level by adjusting the "Actions" notification settings:
          - Go to your profile settings by clicking your profile picture in the top-right corner of GitHub.
          - Click on **Settings** > **Notifications**.
          - Under **Actions**, select **Email** for notifications on workflow failures or successes.

     By enabling this feature, you will receive email alerts for both successful and failed CI/CD builds, keeping you informed of your workflow status directly in your inbox.

---
**Authored by:** Doaa Gamal