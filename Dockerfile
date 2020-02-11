###
# Image used to run the application on heroku
# Note: do not use this image for developement setup. The container launches the app in production environment.
# Author      : Lavneet Puri
# OS          : Linux/Ubuntu
###

FROM meteor:latest

# # Add no-password user with uid 1000
# RUN useradd -ms /bin/bash -u 1000 ubuntu

# # Networking
EXPOSE 8080

# # Install utilities
# RUN apt-get update &&\
#     apt-get install -y curl bsdtar

# # Install meteor for default user
# ENV HOME /home/ubuntu

# RUN curl -o /home/ubuntu/install-meteor.sh https://install.meteor.com/ &&\
#     # Replace tar with bsdtar in install script
#     sed -i 's/tar /bsdtar /' /home/ubuntu/install-meteor.sh &&\
#     sh /home/ubuntu/install-meteor.sh

# # Configure meteor to be runnable from anywhere 
# ENV PATH="${HOME}/.meteor:${PATH}"

# Move application code into the image
USER 0
WORKDIR /mnt/app
RUN chown 1000:1000 /mnt/app
COPY --chown=ubuntu . .

# Configure server runtime
USER 1000:1000
RUN meteor npm install &&\
    meteor update --all-packages
ENV NO_HMR=1
CMD meteor --port 0.0.0.0:$PORT
# CMD [ "sh", "-c", "meteor --production --port "0.0.0.0:${PORT}"" ]
