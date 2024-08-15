# React Vite App Deployment on EC2 with NGINX

**Author**: Leju B  
**Date**: 15/08/2024

---

## **Overview**

This project demonstrates the deployment of a React Vite application on an Amazon EC2 instance. The application is a basic clone of Airbnb, showcasing fundamental features and design. NGINX is used to manage and run the application in the background.

## **Project Description**

The application is a basic React Vite-based clone of Airbnb. It was deployed on an EC2 instance, and NGINX was configured to serve the application efficiently and keep it running in the background.

## **Deployment Steps**

1. **Setting Up EC2 Instance**:
   - Launched an EC2 instance using Amazon Web Services (AWS).
   - Configured security groups to allow HTTP/HTTPS traffic.

2. **Deploying the React Vite App**:
   - Uploaded the React Vite application to the EC2 instance.
   - Built the application for production using Vite.

3. **Installing NGINX**:
   - Installed NGINX on the EC2 instance to serve the application.
   - Configured NGINX to serve the application files and run it in the background.

4. **Verification**:
   - Accessed the deployed application by using the public IP address of the EC2 instance.

## **Features**

- **React Vite Application**: A modern React application built with Vite, providing a fast and optimized development experience.
- **Basic Airbnb Clone**: Showcases core features and layout similar to Airbnb.
- **NGINX Configuration**: Ensures the application runs smoothly and efficiently in a production environment.

## **Screen Recording**

A screen recording of the deployment process is available [here](#). It demonstrates the steps taken to deploy the application and configure NGINX.

## **Usage**

1. **Accessing the Application**:
   - Open a web browser and navigate to the public IP address of the EC2 instance. (Instance not running anymore)

2. **Configuration**:
   - NGINX is configured to serve the application on port 80. Adjust configurations as needed in the NGINX configuration file.
   - configure vite if you want a preview of the app and ensuring security groups configuration

## **Notes**

- Ensure the EC2 instance has sufficient resources to handle the application's traffic.
- For production environments, consider setting up SSL/TLS for secure communication.

## **Future Improvements**

- Add HTTPS support for secure connections.
- Implement automatic deployment pipelines using CI/CD tools.
- Enhance the application's features and design.

---
