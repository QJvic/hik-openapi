# 介绍

node版的hikvision （海康威视）OpenAPI安全认证库

# 安装

```shell
npm install hik-openapi -S
```

或

```
yarn add hik-openapi
```

# 使用

```js
const HikOpenApi = require('hik-openapi');

// 构造
const appKey = 'xxxx';
const appSecret = 'xxxxx';
const baseUrl = 'https://xxx.xx.xxx.x:xxx';
const openApi = new HikOpenApi({ appKey, appSecret, baseUrl, debug: true });

// 请求
const apiUrl = '/artemis/api/resource/v1/cameras';
const postData = {
  pageNo: 1,
  pageSize: 1000
};
openApi.post(apiUrl, postData).then(res => console.log(res.data));
```

# 参数

构造参数

| 参数      | 说明                                     | 必须 | 默认  |
| --------- | ---------------------------------------- | ---- | ----- |
| appKey    | appKey                                   | 是   |       |
| appSecret | appSecret                                | 是   |       |
| baseUrl   | 平台地址                                 | 是   |       |
| debug     | 调试默认，开启会输出签名信息和请求头信息 | 否   | false |

使用 参数

| 参数     | 说明                  | 必须 | 默认 |
| -------- | --------------------- | ---- | ---- |
| apiUrl   | 具体请求的数据接口url | 是   |      |
| postData | 请求体                | 是   |      |

# 说明

目前暂只支持post请求方式，若有其他请求方式可联系我添加（需要测试环境）😀
