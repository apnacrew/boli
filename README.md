# boli
An initiative to host rich punjabi music history through which we hope to preserve the cultural significance and empower a community of curious and artistic minds.

## Development Setup
### Tools
The development stack for this application consists of the following:
* [Meteor](https://www.meteor.com/): a full stack framework for fast prototyping. Feel free to run through the [tutorials](https://www.meteor.com/tutorials) as it is a fairly easy and exciting framework but note that we are only using it for its data layer and build system:
  * [Data Loading](https://guide.meteor.com/data-loading.html) using publication/subscription APIs for easy real-time reactivity with mongoDB.
  * [Build System](https://guide.meteor.com/build-tool.html) used when packaging application for production environment.

* [Vue](https://vuejs.org/): lightweight component based front-end framework.
* [MongoDB](https://www.mongodb.com/): general-purpose NoSQL database  
  Currently used for storing song metadata and lyrics. This may evolve in future.

Other highly recommended tools:
* [Docker](https://www.docker.com/): virtualization platform that streamlines development and production workflows. While it is possible for you to set up the above mentioned development tools to fit your needs, it is highly recommended to familarize yourself with docker. Development docker images ensure every developer has the same environment and avoid runtime conflicts.
* [VSCode](https://code.visualstudio.com/): lightweight and versatile IDE.  
  In addition please install the [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) extensions to support linting for `.meteor` and `.vue` files. Workspace settings for these extensions are checked into version control. Currently it enables you to apply linting fixes on save.

### Environment
You may use any operating system because the following instructions configure your environment through docker, but prefer unix based systems because windows requires a nasty workaround (see steps below).

#### Start by [installing docker](https://docs.docker.com/install/) if you haven't already

#### Set up development container
Download the meteor development image:  
`docker pull lavneetp/meteor:latest`

Clone the repository:  
`git clone git@github.com:apnacrew/boli.git`

Create a development container on **linux** or **mac**:
```console
docker run -itd \
-p 3000-3002:3000-3002 -p 9229:9229 \
-v <PATH_TO_REPO>:/mnt/projects/boli \
--name boli --hostname boli-dev \
lavneetp/meteor:latest
```

Create a development container on **Windows**:  
Due to a [limitation](https://github.com/docker/for-win/issues/497) in Windows filesystem, we run into file permission issues when configuring window's file paths as volume mounts using *Docker Desktop for Windows*. To resolve this, you'll need to:
1. Create a docker volume to be shared between utility container and development container.
2. Install `git` in the utility container.
3. Download the repo to the volume through the utility container.

TODO: provide detailed instructions for the steps above.

Now create the container using the docker volume as mount:
```console
docker run -itd \
-p 3000-3002:3000-3002 -p 9229:9229 \
-v <VOLUME_NAME>:/mnt/projects \
--name boli --hostname boli-dev \
lavneetp/meteor:latest
```

**Note**: When you restart your PC, you'll need to `docker start boli` to get the container running again.

#### Start the development server
```console
docker exec -it boli bash
cd boli
meteor
```
On your browser, `localhost:3000` should server the application.

