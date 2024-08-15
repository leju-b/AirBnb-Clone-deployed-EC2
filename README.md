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
   - Accessed the deployed application by using the public IP address of the EC2 instance. (Instance not running anymore)

## **Features**

- **React Vite Application**: A modern React application built with Vite, providing a fast and optimized development experience.
- **Basic Airbnb Clone**: Showcases core features and layout similar to Airbnb.
- **NGINX Configuration**: Ensures the application runs smoothly and efficiently in a production environment.

## **NGINX Configuration**

### **Location of NGINX Configuration File**

The NGINX configuration file is typically located at:

```
/etc/nginx/nginx.conf
```

For site-specific configurations, you will edit or create a configuration file in:

```
/etc/nginx/sites-available/
```

And then create a symbolic link to this file in:

```
/etc/nginx/sites-enabled/
```

### **Steps to Edit the Configuration**

1. **Open the NGINX Configuration File**:

   To edit the global NGINX configuration file:
   ```bash
   sudo nano /etc/nginx/nginx.conf
   ```

   To edit a site-specific configuration file (e.g., `myapp`):
   ```bash
   sudo nano /etc/nginx/sites-available/myapp
   ```

2. **Edit the Configuration for Your Application**:

   Add or update the server block for your application. Below is an example configuration:

   ```nginx
   server {
       listen 80;
       server_name your_domain_or_public_ip;

       root /path/to/your/react-vite-app/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       error_log /var/log/nginx/error.log;
       access_log /var/log/nginx/access.log;
   }
   ```

   - **`server_name`**: Replace `your_domain_or_public_ip` with your domain or the public IP address of your EC2 instance.
   - **`root`**: Set this to the path where your React Vite application's `dist` folder is located on the EC2 instance.

3. **Enable the Site Configuration**:

   Create a symbolic link to the `sites-enabled` directory:
   ```bash
   sudo ln -s /etc/nginx/sites-available/myapp /etc/nginx/sites-enabled/
   ```

4. **Test the Configuration**:

   Before reloading NGINX, test the configuration to ensure there are no syntax errors:
   ```bash
   sudo nginx -t
   ```

5. **Reload NGINX**:

   Apply the changes by reloading NGINX:
   ```bash
   sudo systemctl reload nginx
   ```

### **Troubleshooting**

- **Configuration Errors**: Check the NGINX error log located at `/var/log/nginx/error.log` for any issues.
- **Application Not Showing**: Ensure that the React Vite application is correctly built and the `dist` folder is in the specified location.

## **Screen Recording**

A screen recording of the deployment process is available [here](#). It demonstrates the steps taken to deploy the application and configure NGINX.

## **Usage**

1. **Accessing the Application**:
   - Open a web browser and navigate to the public IP address of the EC2 instance. (Instance not running anymore)

2. **Configuration**:
   - NGINX is configured to serve the application on port 80. Adjust configurations as needed in the NGINX configuration file.
   - Configure Vite if you want a preview of the app and ensure security groups configuration.

## **Notes**

- Ensure the EC2 instance has sufficient resources to handle the application's traffic.
- For production environments, consider setting up SSL/TLS for secure communication.

## **Future Improvements**

- Add HTTPS support for secure connections.
- Implement automatic deployment pipelines using CI/CD tools.
- Enhance the application's features and design.

---
