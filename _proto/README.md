## Proto 파일 컴파일

typescript 타입파일로 컴파일  
https://www.npmjs.com/package/protobufjs 모듈 사용

````bash
npm install -g protobufjs

pbjs -t static-module -w commonjs -o comments.proto.js comments.proto
pbts -o comments.proto.d.ts comments.proto.js
````
