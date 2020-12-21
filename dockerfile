FROM node:14
WORKDIR /usr/src/app
# RUN git clone https://github.com/yashdholakia/fizzbuzz-demo.git
COPY .  /usr/src/app/
RUN ls -la
RUN npm install
EXPOSE 8888
CMD ["node", "app.js"]
