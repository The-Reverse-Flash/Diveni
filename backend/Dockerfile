FROM gradle:7.5.0 as build-stage
COPY --chown=gradle:gradle . /app/Diveni
WORKDIR /app/Diveni
RUN gradle --no-daemon assemble

FROM openjdk:11 as production-stage
WORKDIR /app/Diveni
COPY --from=build-stage /app/Diveni/build/libs/backend-1.0.0-SNAPSHOT.jar diveni.jar
ENTRYPOINT ["java", "-jar", "diveni.jar"]
