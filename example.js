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
