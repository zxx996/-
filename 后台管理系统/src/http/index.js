import axios from 'axios';
import Vue from 'vue';
import config from './config';
// import qs from 'qs';

function headersInfo() {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '/#/login';
    return false;
  }
  return token;
}


const http = {
  message(text) {
    const { $message } = Vue.prototype;
    $message({
      message: text,
      type: 'warning',
    });
  },
  // post
  post(url, options) {
    const token = headersInfo();
    // console.log(options)
    return axios.post(
      config.baseURL + url,
      options,
      {
        headers: {
          token
        }
      },
    ).then((res) => {
      const { data } = res;
      return data;
    });
  },
  // get
  get(url, options) {
    const token = headersInfo();
    return axios.get(
      config.baseURL + url,
      {
        headers: {
          token
        },
        params: options,
      },
    ).then((res) => {
      const { data } = res;
      return data;
    });
  },
  login(url, options = {}) {
    localStorage.clear('token');
    localStorage.clear('loginMsg');
    return axios.post(
      config.baseURL + url,
      options,
    ).then((res) => {
      const { data } = res;

      if (data.success) {
        localStorage.setItem('token', data.data.token);
        var obj = JSON.stringify(data.data.loginSysUserVo)
        localStorage.setItem('loginMsg', obj);
      }

      // console.log(data)
      return data;
    });
  },
  getExcel(url, options, name) {
    const headers = headersInfo();
    return axios.get(
      config.baseURL + url,
      {
        params: options,
        headers,
        responseType: 'blob',
      },
    ).then((res) => {
      const blob = new Blob([res.data], {
        type: 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob);
      } else {
        const elink = document.createElement('a');
        elink.download = `${name}.xlsx` || 'download.xlsx';
        elink.style.display = 'none';
        elink.href = URL.createObjectURL(blob);
        document.body.appendChild(elink);
        elink.click();
        document.body.removeChild(elink);
      }
    });
  },
};

export default http;
