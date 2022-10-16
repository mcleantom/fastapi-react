FROM node

WORKDIR /app

ADD /app/package.json package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN npm install

ADD /app .

EXPOSE 3000
EXPOSE 8000
EXPOSE 35729

ADD run.sh run.sh

ENTRYPOINT ["/bin/bash", "/app/run.sh"]
CMD ["start"]