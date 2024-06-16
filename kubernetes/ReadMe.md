# Docker
1. What is Docker ?
- Docker is a software platform developed by Solomon hykes. You may have encountered a situation where the code executes on the developer system without any errors but fails in the testing environment. Docker works to resolve this issue, but there is much more to it.

There are multiple stages of software development lifecycle:
1. Design
2. Development
3. Deployment
4. Testing
5. Production/release

Docker comes at the stage of deployment stage. It eases the process of deploying our applications.

Docker allows to deploy application in an isolated environment. We can pack our source code, along with the OS and library dependencies into units called containers. Containers acquire RAM from the base OS, the OS on top of which installed Docker.

To check whether docker is installed in our system
    - docker ---version
    - docker info # shows details of docker engine

2. What is containerization ?
Under containerization, multiple virtual unit known as containers are created. It is OS based virtualization. the idea behind containers is that they share the same kernel but are isolated through private namespaces ans resource control mechanisms. 

3. What is docker image ?
Images are blueprint based on which containers are launched. The Docker image consist of collection of files that includes the following:
    - source code
    - dependencies 
    - libraries, modules and packages

Images are read-only files that define instructions for launching a container.

A Dockerfile contains instructions for building an image.

```
FROM ubuntu:latest
MAINTAINER <maintainer_name>
RUN apt-get python
CMD echo "hello world"

```

```
docker build -t myimage123.1.0 .
docker run <imageId>
```

4. Docker containers ?
docker containers are running instances of Docker images. Any number of containers can be launched using single docker image.

5. Docker Compose ?
Docker compose is used to define the docker applications and run them with multiple containers. it allows us to manage multi-container architecture smoothly.

6. Docker Volumes?
file system mounted on top of Docker containers. They store the data generated by a running container. The volumes are stored on the host system and do not get deleted on the deletion of a container.

# Kubernetes
A large organizations have a greater architecture with hundreds of containers in order to ensure availability, load balancing, and the ability to scale up and down based on user load.

It is an container orchestration platform that automates many of the manual processes involved in deploying, managing and scaling containerized applications. We can cluster together a group of hosts running containers.

## Pods
We don't interact with the containers directly. The containers are wrapped inside a functional unit names pod. A pod can have one or more containers. Pods are packed inside the nodes. Nodes can have multiple or single pods.

A pod contains the following:
- An application container
- a storage resources
- a unique network IP

## Service
A Kubernetes service is a set of pods that work together. Kubernetes provides a unique IP to every pod and a domain name to the service. With this setup, Kubernetes gains complete control over the network and communication between pods, easing the load balancing process across the pods.

## Nodes
A node is a physical, virtual machine. Inside a node we can have multiple pods and inside pods, we can have multiple containers.

## Pod deployment
- pod templates
- Replication controllers
- replica set

## Deployment
Deployment makes use of replica set. Whenever a deployment is created, a replica set also gets created behind the scene. A deployment allows us to describe the lifecycle of an application.
    - Image to be used
    - number of pods to be deployed
    - way the number of pods should be updated

- Rolling update
- Rollback
    - rollback to previous version

```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
        name: nginx-deployment
        labels:
            app: nginx
    spec:
        replicas: 2
        selector:
            matchLabels:
                app: nginx
        template:
            metadata:
                labels:
                    app: nginx
            spec:
                containers:
                - name: nginx
                  image: nginx:1.14.2
                  ports:
                  - containerPort: 80

```

Deployment commands:
1. kubectl get deployments
2. kubectl rollou status deployment/<deployment_name>
3. kubectl get rs: replica sets
4. kubectl get pods
5. kubectl delete deployment <deployment_name>
6. kubectl rollout undo deployment/<deployment_name>
7. kubectl scale deployment/<deployment_name> --replicas=0
8. kubectl autoscale deployment/<depolyment_name> --min=10 --max=15 --cpu-percent=80


# What is Helm ?
Helm is kubernetes package maneger that allows us to standardize, simplify and implement reusable deployment strategies.