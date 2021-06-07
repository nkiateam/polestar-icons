svgo test.svg -o test.min.svg

## 배포 (추후에 gen 할때 같이 되게 수정)

npm run svgr

## svg file naming rule

1. 의미있는 이름으로 정의
2. server device 같은 경우 server-device.svg 로 정의

## 배포과정

1. 정식 배포 전 npm run prepublishOnly:test 실행
2. lib 폴더 생성 후 src > AsyncSvg.js 코드를(주석된 부분)  lib > AsyncSvg.js에 변경 및 저장
3. npm publish로 정식 배포