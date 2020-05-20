let baseURL = 'http://125.124.170.40:8888';
const { NODE_ENV } = process.env;

if (NODE_ENV === 'build') {
  baseURL = 'http://125.124.170.40:8888';
} else if (NODE_ENV === 'product') { // 测试mock
  baseURL = 'http://125.124.170.40:8888';
}

const config = {
  // baseURL: 'http://test.hzhaya.com',
  baseURL,
};

export default config;
