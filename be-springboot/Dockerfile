FROM eclipse-temurin:22_36-jre-alpine
COPY /target/mixer-*.jar mixer.jar
ENTRYPOINT ["java","-jar","/mixer.jar"]