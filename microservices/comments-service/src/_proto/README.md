## Proto 파일 컴파일

nestjs typescript 타입파일로 컴파일  
https://github.com/AlexDaSoul/nestjs-proto-gen-ts/blob/master/templates/nestjs-grpc.hbs 모듈 사용

````bash
npm install nestjs-proto-gen-ts

## Observable 버전
node_modules/.bin/tsproto --path src/_proto --output src

## Promise 버전이 필요하다면 templates 을 만든다.
## https://github.com/AlexDaSoul/nestjs-proto-gen-ts/issues/2
node_modules/.bin/tsproto --template ./deploy/templates/comments-service.hbs --path src/_proto --output src
````
