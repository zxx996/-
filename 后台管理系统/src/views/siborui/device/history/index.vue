<template>
  <div class="ad">
    <div id="title">
      <strong>设备停机时序图</strong>
    </div>
    <div id="nav">
      <ul>
        <li>
          <div></div>
          <p>正常</p>
        </li>
        <li>
          <div></div>
          <p>停机</p>
        </li>
     
      </ul>
    </div>
    <div id="charts">
      <div class="left-warp">
        <ul>
          <li class="charts-coordinate" :key="index" v-for="(item,index) in machine">{{item.number}}</li>
        </ul>
      </div>
      <div class="content-warp">
        <ul>
          <li
            class="content-charts-line-wrap"
            v-for="(item,i) in machine"
            :key="i"
            @mouseout="mouseout($event)"
            @mousemove.stop="mousemove($event, i)"
          >
            <div
              class="charts-status-wrap"
              v-for="(item,j) in item.status"
              :key="j"
              @mousemove="chartsMousemove(item)"
              :style="{width: item.radio+'%',backgroundColor: item.color}"
            ></div>
          </li>
        </ul>
        <!-- 鼠标移入显示蒙层 -->
        <div
          class="charts-prop-wrap"
          @mousemove="chartsPropsShow=true"
          :style="chartPropsStyle"
          v-if="chartsPropsShow"
        > 
          <div style="height:20px;width:30px;float:left;margin:5px;" :style="{background:chartsPropsData.color}"></div>
          <p  style="margin-top:5px;float:left;">{{chartsPropsData.text}}</p>
          <p style="margin-top:5px;">{{chartsPropsData.time}}</p>
          <p style="float:left;">开始时间:{{chartsPropsData.start_date}}</p>
          <p style="float:left;">结束时间:{{chartsPropsData.end_date}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      machine: [
        {
          number: 1,
          status: [
            {
              start_date: "2020-01-07 00:00",
              end_date: "2020-01-07 04:22",
              text:"正常",
              type: 1
            },
            {
              start_date: "2020-01-07 04:22",
              end_date: "2020-01-07 04:24",
              text:"停机",
              type: 2
            },
            {
              start_date: "2020-01-07 04:22",
              end_date: "2020-01-07 08:40",
              text:"正常",
              type: 1
            },
            {
              start_date: "2020-01-07 08:40",
              end_date: "2020-01-07 09:38",
              text:"停机",
              type: 2
            },
            {
              start_date: "2020-01-07 09:38",
              end_date: "2020-01-07 09:40",
              text:"停机",
              type: 2
            },
            {
              start_date: "2020-01-07 09:40",
              end_date: "2020-01-07 11:40",
              text:"正常",
              type: 1
            },
            {
              start_date: "2020-01-07 09:40",
              end_date: "2020-01-07 10:40",
              text:"停机",
              type: 2
            },
            {
              start_date: "2020-01-07 11:40",
              end_date: "2020-01-07 12:00",
              text:"停机",
              type: 2
            },
            {
              start_date: "2020-01-07 12:00",
              end_date: "2020-01-07 12:10",
              text:"停机",
              type: 2
            },
            {
              start_date: "2020-01-07 12:10",
              end_date: "2020-01-07 15:10",
              text:"正常",
              type: 1
            },
            {
              start_date: "2020-01-07 15:10",
              end_date: "2020-01-07 15:40",
              text:"停机",
              type: 2
            },
            {
              start_date: "2020-01-07 15:40",
              end_date: "2020-01-07 24:00",
              text:"正常",
              type: 1
            }
          ]
        },
        {
          number: 2,
          status: [
            {
              start_date: "2020-01-07 00:00",
              end_date: "2020-01-07 06:40",
              text:"正常",
              type: 1
            },
            {
              start_date: "2020-01-07 05:40",
              end_date: "2020-01-07 12:40",
              text:"停机",
              type: 3
            },
            {
              start_date: "2020-01-07 12:40",
              end_date: "2020-01-07 16:40",
              text:"正常",
              type: 1
            },
            {
              start_date: "2020-01-07 16:40",
              end_date: "2020-01-07 17:00",
               text:"停机",
              type: 2
            },
            {
              start_date: "2020-01-07 17:00",
              end_date: "2020-01-07 17:10",
              text:"停机",
              type: 4
            },
            {
              start_date: "2020-01-07 17:10",
              end_date: "2020-01-07 20:10",
              text:"正常",
              type: 1
            },
            {
              start_date: "2020-01-07 20:10",
              end_date: "2020-01-07 20:40",
              text:"停机",
              type: 6
            },
            {
              start_date: "2020-01-07 15:40",
              end_date: "2020-01-07 24:00",
              text:"正常",
              type: 1
            }
          ]
        },
        {
          number: 3,
          status: [
            {
              start_date: "2020-01-07 00:00",
              end_date: "2020-01-07 06:40",
              text:"正常",
              type: 1
            },
            {
              start_date: "2020-01-07 06:40",
              end_date: "2020-01-07 09:40",
              text:"停机",
              type: 6
            },
            {
              start_date: "2020-01-07 09:40",
              end_date: "2020-01-07 11:40",
              text:"正常",
              type: 1
            },
            {
              start_date: "2020-01-07 11:40",
              end_date: "2020-01-07 12:00",
               text:"停机",
              type: 3
            },
            {
              start_date: "2020-01-07 12:00",
              end_date: "2020-01-07 12:10",
              text:"停机",
              type: 4
            },
            {
              start_date: "2020-01-07 12:10",
              end_date: "2020-01-07 15:10",
              text:"正常",
              type: 1
            },
            {
              start_date: "2020-01-07 15:10",
              end_date: "2020-01-07 15:40",
              text:"停机",
              type: 5
            },
            {
              start_date: "2020-01-07 15:40",
              end_date: "2020-01-07 24:00",
              text:"正常",
              type: 1
            }
          ]
        },
        {
          number: 4,
          status: [
            {
              start_date: "2020-01-07 00:00",
              end_date: "2020-01-07 08:40",
              text:"正常",
              type: 1
            },
            {
              start_date: "2020-01-07 08:40",
              end_date: "2020-01-07 09:40",
               text:"停机",
              type: 2
            },
            {
              start_date: "2020-01-07 09:40",
              end_date: "2020-01-07 11:40",
              text:"正常",
              type: 1
            },
            {
              start_date: "2020-01-07 11:40",
              end_date: "2020-01-07 12:00",
               text:"停机",
              type: 3
            },
            {
              start_date: "2020-01-07 12:00",
              end_date: "2020-01-07 12:10",
              text:"停机",
              type: 4
            },
            {
              start_date: "2020-01-07 12:10",
              end_date: "2020-01-07 15:10",
              text:"正常",
              type: 1
            },
            {
              start_date: "2020-01-07 15:10",
              end_date: "2020-01-07 15:40",
              text:"停机",
              type: 5
            },
            {
              start_date: "2020-01-07 15:40",
              end_date: "2020-01-07 24:00",
              text:"正常",
              type: 1
            }
          ]
        },
        {
          number: 5,
          status: [
            {
              start_date: "2020-01-07 00:00",
              end_date: "2020-01-07 08:40",
              text:"正常",
              type: 1
            },
            {
              start_date: "2020-01-07 00:00",
              end_date: "2020-01-07 04:40",
              text:"停机",
              type: 3
            },
            {
              start_date: "2020-01-07 04:40",
              end_date: "2020-01-07 09:40",
               text:"停机",
              type: 2
            },
            {
              start_date: "2020-01-07 09:40",
              end_date: "2020-01-07 11:40",
              text:"正常",
              type: 1
            },
            {
              start_date: "2020-01-07 11:40",
              end_date: "2020-01-07 12:00",
               text:"停机",
              type: 3
            },
            {
              start_date: "2020-01-07 12:00",
              end_date: "2020-01-07 12:10",
              text:"停机",
              type: 4
            },
            {
              start_date: "2020-01-07 12:10",
              end_date: "2020-01-07 15:10",
              text:"正常",
              type: 1
            },
            {
              start_date: "2020-01-07 15:10",
              end_date: "2020-01-07 15:40",
              text:"停机",
              type: 5
            },
            {
              start_date: "2020-01-07 15:40",
              end_date: "2020-01-07 24:00",
              text:"正常",
              type: 1
            }
          ]
        }
      ],
      chartsPropsShow: false,
      chartPropsStyle: {
        top: 0,
        left: 0
      },
      chartsPropsData: {}
    };
  },
  mounted() {
    this.initMachine();
  },
  methods: {
    chartsMousemove(data) {
    //   console.log(data);
      this.chartsPropsData = data;
      console.log(this.chartsPropsData)
    
    },
    // eslint-disable-next-line no-unused-vars
    mousemove(event, index) {
      let obj = event.target.parentNode;

      if (obj.className === "content-charts-line-wrap") {
        let m_clientX = event.clientX - 360;
        let m_clientY = event.clientY - 270;
        this.chartPropsStyle = {
          top: m_clientY + "px",
          left: m_clientX + "px"
        };
        this.chartsPropsShow = true;
      }
    },
    // eslint-disable-next-line no-unused-vars
    mouseout(event) {
      this.chartsPropsShow = false;
    },
    initMachine() {
      let machine = this.machine;
    //   console.log(machine);
      machine.forEach((item, i) => {
        let { status } = item;
        status.forEach((item, j) => {
          let { type } = item;
          let color = "#63F6A8";
          let start_date = new Date(item.start_date).getTime();
          let end_date = new Date(item.end_date).getTime();

          switch (type) {
            case 2:
              color = "red";
            //   innerHtml="边儿丝停";
              break;
            case 3:
              color = "red";
            //   innerHtml="探针停";
              break;
            case 4:
              color = "red";
            //   innerHtml="废边纱停";
              break;
            case 5:
              color = "red";
            //   innerHtml="其他停";
              break;
            case 6:
              color = "red";
            //   innerHtml="离线";
              break;
          }
          let time = (end_date - start_date) / 1000;
            // console.log(time)
          // 计算出时分秒;
          let H = parseInt(time / 3600);
          let M = parseInt((time % 3600) / 60);
          let S = parseInt((time % 3600) % 60);

          machine[i].status[j].time = `${H > 0 ? H + "小时" : ""}${
            H > 0 || M > 0 ? M + "分钟" : ""
          }${S}秒`;
          machine[i].status[j].radio = time / 24 / 60 / 60 * 100;
          machine[i].status[j].color = color;
        });
      });
      this.machine = machine.reverse();
    }
  }
};
</script>
<style lang="scss" scoped>

li {
  list-style: none;
}
a {
  text-decoration: none;
}
.ad{
  height: 300px;
}
  #title {
    strong {
      color: white;
      font-size: 22px;
    }
  }
  #nav {
    width: 60%;
    margin: 0 auto;
    ul {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      height: 40px;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
          width: 35px;
          height: 16px;
          background: white;
        }
        p {
          color: white;
          font-size: 16px;
        }
        &:nth-child(1) {
          div {
            background: #68f29f;
          }
        }
        &:nth-child(2) {
          div {
            background: #ea5f58;
          }
        }
       
        div {
          margin-right: 5px;
        }
      }
    }
  }
  #charts {
    display: flex;
    padding: 0 80px;
    .left-warp {
      width: 100px;
      height: 300px;
      border-right: 1px solid #61f69f;
      .charts-coordinate {
        height: 60px;
        line-height: 60px;
        text-align: right;
        padding-right: 10px;
        color: white;
      }
    }
    .content-warp {
      flex: 1;
      height: 300px;
      position: relative;

      li {
        height: 40px;
        padding: 10px 0;
        display: flex;
        .charts-status-wrap {
          background: #63f6a8;
        }
      }

      .charts-prop-wrap {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 80px;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 8px;
        color:white;
      }
    }
  }

</style>