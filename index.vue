<template>
  <div class="home">
    <!-- nav -->
    <c-header :isHome="true"></c-header>
    <!-- 右下角悬浮, 联系我们 -->
    <call-me></call-me>
    <!-- trait特点 -->
    <div class="trait pageBody">
      <div class="trait-content centerBody">
        <div
          class="trait-item"
          v-for="(item, index) in dataList.list"
          :key="index"
          @mouseover="mouseIn('traitItem_', index)"
          @mouseout="mouseOut('traitItem_', index)"
        >
          <!-- 需要替换成GIF -->
          <icon-animal
            :ref="'traitItem_' + index"
            :backgroudImg="require(`@/assets/homeImg/${item.img}`)"
          ></icon-animal>
          <p class="title">{{ item.title }}</p>
          <p class="info">{{ item.info }}</p>
        </div>
      </div>
    </div>
    <!-- 产品优势 -->
    <div class="product-advantage pageBody">
      <div class="centerBody part-column">
        <part-title
          :data="{
            title: '产品优势',
            info: '三网全终端覆盖的综合解决方案，赋能企业服务分发',
          }"
        ></part-title>
        <div class="content">
          <img
            style="height: 360px"
            src="@/assets/homeImg/home_product_advantages_img@2x.png"
            alt=""
          />
          <div class="info">
            <div
              v-for="(item, index) in dataList.productInfo"
              :key="index"
              class="info-box"
            >
              <li class="title">{{ item.title }}</li>
              <li class="titleMin">{{ item.info }}</li>
              <ul>
                <li
                  class="text"
                  v-for="(listItem, index) in item.infoList"
                  :key="index"
                >
                  {{ listItem }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-advantage-relation pageBody section">
      <div class="relation centerBody">
        <img src="@/assets/homeImg/home_process_img@2x.png" alt="" />
      </div>
    </div>
    <!-- 产品介绍 -->
    <div class="Introduction pageBody section">
      <div class="content pt-40 centerBody part-column">
        <part-title
          :data="{
            title: '产品介绍',
            info: '强入口、广连接、多场景、高转化',
          }"
        ></part-title>
        <el-tabs
          v-model="activeName"
          v-if="dataList.introduction"
          ref="tabs"
        >
          <el-tab-pane
            ref="tabPage"
            class="tab tabItem"
            label="5G消息"
          >
            <el-carousel
              arrow="always"
              height="584px"
              indicator-position="outside"
              :loop="true"
              @change="carouseClick"
              :autoplay="false"
            >
              <el-carousel-item
                v-for="(item, index) in dataList.introduction.part1"
                :key="index"
              >
                <img :src="require(`@/assets/homeImg/${item}`)" alt="" />
                <!-- <div
                  class="lbBox"
                  :url="require(`@/assets/homeImg/${item}`)"
                ></div> -->
              </el-carousel-item>
            </el-carousel>
          </el-tab-pane>
          <el-tab-pane
            ref="tabPage"
            class="tab tabItem"
            label="5G阅信"
          >
            <el-carousel
              arrow="always"
              height="584px"
              indicator-position="outside"
              :autoplay="false"
              :loop="true"
            >
              <el-carousel-item
                v-for="(item, index) in dataList.introduction.part2"
                :key="index"
              >
                <img :src="require(`@/assets/homeImg/${item}`)" alt="" />
              </el-carousel-item>
            </el-carousel>
          </el-tab-pane>
          <el-tab-pane
            ref="tabPage"
            class="tab tabItem"
            label="5G视信"
          >
            <el-carousel
              arrow="always"
              indicator-position="outside"
              :autoplay="false"
              height="584px"
              :loop="true"
            >
              <el-carousel-item
                v-for="(item, index) in dataList.introduction.part3"
                :key="index"
              >
                <img :src="require(`@/assets/homeImg/${item}`)" alt="" />
              </el-carousel-item>
            </el-carousel>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!-- 分割img -->
    <div class="line-img">
      <img src="@/assets/homeImg/home_application_head_bg@2x.png" alt="" />
    </div>
    <!-- 场景应用 -->
    <div class="liveApp pageBody section">
      <div class="content centerBody part-column">
        <part-title
          :data="{
            title: '场景应用',
            info: '消息即服务，高度自定义的服务场景，赋能企业开创全新的B2C互动场景与业务拓展方式',
          }"
        >
        </part-title>
        <div class="info">
          <div class="left">
            <div
              class="left-item"
              v-for="(item, index) in liveApp"
              :key="index"
              @click="liveAppItemAciton(index + 1, item.video)"
              :style="
                index + 1 === liveAppActive
                  ? {
                      backgroundImage: 'url(' + item.background + ')',
                    }
                  : 'default'
              "
            >
              <p
                class="title"
                :class="index + 1 === liveAppActive ? 'titleActive' : ''"
              >
                {{ item.title }}
              </p>
              <p
                class="item-info"
                :class="index + 1 === liveAppActive ? 'itemInfoActive' : ''"
              >
                {{ item.info }}
              </p>
            </div>
          </div>
          <div class="videos" v-if="videoShow">
            <video
              width="100%"
              height="600"
              poster=""
              autoplay="autoplay"
              loop="loop"
              muted="muted"
            >
              <source
                :src="require(`@/assets/videos/${videoUrl}`)"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
    <!-- 平台能力 -->
    <div class="pageBody power section">
      <div class="centerBody pt-40 content part-column">
        <part-title
          :data="{
            title: '平台能力',
            info: '5i能力助力5G消息运营',
          }"
        >
        </part-title>
        <div class="powerList pt-40">
          <div
            class="l-box"
            @mouseenter="drawer = true"
            @mouseleave="drawer = false"
          >
            <div class="box itemBox">
              <div class="info">
                <div class="title">智能创作</div>
                <div class="text">
                  机器人无编码逻辑创作、智能推荐内容让营销事半功倍
                </div>
              </div>
            </div>

            <transition name="el-zoom-in-bottom">
              <div class="box introduceBox" v-show="drawer">
                <li
                  v-for="(item, index) in dataList.powerListIntroduce"
                  :key="index"
                >
                  <div class="title">{{ item.title }}</div>
                  <div class="text">{{ item.text }}</div>
                </li>
              </div>
            </transition>
          </div>
          <div class="r-list">
            <div
              class="box itemBox"
              v-for="(item, index) in power"
              :key="index"
              :style="{
                backgroundImage: 'url(' + item.img + ')',
              }"
              @mouseenter="item.detail = true"
              @mouseleave="item.detail = false"
            >
              <div class="info">
                <div class="title">{{ item.title }}</div>
                <div class="text">
                  {{ item.text }}
                </div>
              </div>
              <transition name="el-zoom-in-bottom">
                <div class="introduceBox" v-show="item.detail">
                  <li v-for="(item, index) in item.hoverInfo" :key="index">
                    <div class="title">{{ item.title }}</div>
                    <div class="text">{{ item.text }}</div>
                  </li>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 梦网优势 -->
    <div class="pageBody advantage section">
      <div class="centerBody content part-column">
        <part-title
          :data="{
            title: '梦网优势',
            info: '提供强大的技术支撑能力、营销分析能力、高效的信息服务以及稳固的安全防线',
          }"
        >
        </part-title>
        <div class="infoBox">
          <div
            class="item"
            v-for="(item, index) in dataList.advantage"
            :key="index"
            @mouseover="mouseIn('advantageItem_', index)"
            @mouseout="mouseOut('advantageItem_', index)"
          >
            <icon-animal
              :ref="'advantageItem_' + index"
              :backgroudImg="require(`@/assets/homeImg/${item.img}`)"
            ></icon-animal>
            <div class="title">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 天慧里程碑 -->
    <div class="pageBody milestone section">
      <div class="centerBody pt-40 part-column">
        <part-title
          :data="{
            title: '天慧里程碑',
            info: '',
          }"
        >
        </part-title>
        <div>
          <img
            src="@/assets/homeImg/home_milestone_curve_bg@2x.png"
            alt="天慧里程碑"
          />
        </div>
      </div>
    </div>
    <!-- 里程碑 -2 -->
    <div class="pageBody milestone-2 section">
      <div class="centerBody pt-40 content">
        <div class="l-prize">
          <div>梦网科技5G消息</div>
          <div style="fontweight: 700; margin-top: 10px">荣获绽放杯大奖</div>
        </div>
        <div class="r-detail">
          <div
            class="item"
            v-for="(el, index) in dataList.Rdetail"
            :key="index"
          >
            <div style="display: flex; margin-bottom: 14px">
              <img src="@/assets/homeImg/home_zfb_cup_icon@2x.png" alt="奖杯" />
              <div class="title">{{ el.title }}</div>
            </div>
            <div class="minTitle">{{ el.minTitle }}</div>
            <div class="info">{{ el.info }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 里程碑 -3 -->
    <div class="pageBody milestone-3 section">
      <div class="centerBody content">
        <img
          class="certificate"
          src="https://mw-5g-oss.obs.cn-south-1.myhuaweicloud.com/BLUCRTQDTDs.png"
          alt="证书"
        />
        <div class="info">
          <div class="title">
            天慧5G消息平台荣获全国首家
            <span style="color: #007dff">“卓越级”</span> 认证
          </div>
          <div class="text">
            经过5G消息联合实验室评定，天慧获得5G消息平台功能完备性证书的最高等级“卓越级”，标志着平台的消息、配置、管理、统计等模块的功能完善，能够向5G消息应用提供优秀的支撑和管理。由此天慧还获得了三大运营商的特别权益及绿色通道，将为客户带来更多的业务与技术保障。
          </div>
        </div>
      </div>
    </div>

    <!-- 来自客户的认可 -->
    <div class="pageBody userAccept section">
      <div class="centerBody pt-40 part-column">
        <part-title
          :data="{
            title: '来自客户的认可',
            info: '',
          }"
        >
        </part-title>
        <div class="content">
          <div
            class="imgbox"
            v-for="(item, index) in dataList.userAccpet"
            :key="index"
          >
            <img
              :src="require(`@/assets/homeImg/${item.url}`)"
              :alt="item.alt"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <c-footer></c-footer>
  </div>
</template>
<script>
import data from "./list.json";
import cHeader from "@/components/header.vue";
import cFooter from "@/components/footer.vue";
import partTitle from "@/components/partTitle.vue";
import iconAnimal from "@/components/iconAnimal.vue";
import callMe from "@/components/callMe.vue";
export default {
  name: "home",
  data() {
    return {
      dataList: {},
      videoShow: true, // 刷新video
      showPhone: false, // 显示电话
      activeName: "0",
      liveAppActive: 1,
      videoUrl: "finance.mp4",
      liveApp: [
        {
          title: "金融",
          info: "查看基金   购买基金   常见问题   APP下载",
          background: require("@/assets/homeImg/application_finance_icon@2x.png"),
          video: "finance.mp4",
        },
        {
          title: "出行",
          info: "机票预订   酒店预订   门票预订   旅游攻略",
          background: require("@/assets/homeImg/application_travel_icon@2x.png"),
          video: "travel.mp4",
        },
        {
          title: "政务",
          info: "查看天气   生活建议   气象科普   天气解读",
          background: require("@/assets/homeImg/application_government_icon@2x.png"),
          video: "government.mp4",
        },
        {
          title: "教育",
          info: "课程报名   我的课程   在线客服   APP下载",
          background: require("@/assets/homeImg/application_educate_icon@2x.png"),
          video: "educate.mp4",
        },
        {
          title: "医药",
          info: "在线购药   药师答疑   活动福利   积分兑换",
          background: require("@/assets/homeImg/application_medicine_icon@2x.png"),
          video: "medicine.mp4",
        },
      ],
      power: [
        {
          img: require("@/assets/homeImg/home_capability_bg2@2x.png"),
          title: "智能审核",
          text: "多维覆盖，人工+智能双重审核，精准识别各类违规风险",
          hoverInfo: [
            {
              title: "智能审核",
              text: "多维覆盖，人工+智能双重审核，精准识别各类违规风险",
            },
            {
              title: "快速安全",
              text: "90%AI审核，10%人工审核，人审+机审，双重审核，兼顾安全与效率",
            },
            {
              title: "高峰无忧",
              text: "在百万级消息并发，大批量模板同时提交时，依然保证无错审、无漏审",
            },
          ],
          detail: false,
        },
        {
          img: require("@/assets/homeImg/home_capability_bg3@2x.png"),
          title: "智能触达",
          text: "多渠道多样式的消息统一调度，终端全覆盖的同时，根...",
          hoverInfo: [
            {
              title: "智能触达",
              text: "多渠道多样式的消息统一调度，终端全覆盖的同时，根据用户手机能力给予用户最好的展现与交互方式",
            },
            {
              title: "智能回落多样覆盖",
              text: "若用户手机能力不支持展示高级消息，系统将挑选出最适合的消息种类向用户投递",
            },
            {
              title: "三网全终端100%触达",
              text: "支持5G消息、5G阅信、5G视信、短信，覆盖全网所有终端",
            },
          ],
          detail: false,
        },
        {
          img: require("@/assets/homeImg/home_capability_bg4@2x.png"),
          title: "智能交互",
          text: "听得懂，说得清，学得会的机器人，高效精准理解用户...",
          hoverInfo: [
            {
              title: "智能交互",
              text: "听得懂，说得清，学得会的机器人，以解决问题为导向，高效精准理解用户意图，任务服务一站直达",
            },
            {
              title: "降低成本",
              text: "无需开发，即刻自定义机器人场景交互，实现客服永不离线",
            },
            {
              title: "提高效能",
              text: "文本、语音、区域识别，实现客户智能推荐与决策。记录动态并自主升级知识库，不断提升支撑能力",
            },
          ],
          detail: false,
        },
        {
          img: require("@/assets/homeImg/home_capability_bg5@2x.png"),
          title: "智能运营",
          text: "提供用户数据及用户行为可视化分析，客户可及时调整...",
          hoverInfo: [
            {
              title: "智能运营",
              text: "运用大数据提供用户场景分析，客户可及时调整运营策略，优化业务流程，使营销更精准",
            },
            {
              title: "一次运营多维分析",
              text: "通过多种维度分析运营效果，涵盖任务、渠道、区域、时间、版式、按钮、内容等等",
            },
            {
              title: "用户行为可视化",
              text: "用户浏览、点击、回复行为生成报表，让行为数据可视化",
            },
          ],
          detail: false,
        },
      ],
      drawer: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    clickTabs(event) {
      console.log(event, 222);
    },
    carouseClick(e, index) {
      console.log(e, "=click", index);
      //  要判断是往前还是往后
      // if(e) {

      // }
    },
    mouseIn(key, index) {
      // 触发进入
      // console.log(this.$refs[key + index][0], '=====')
      this.$refs[key + index][0].inImg();
    },
    mouseOut(key, index) {
      // this.$refs[key][index][0].outImg();
      this.$refs[key + index][0].outImg();
    },
    handleScroll() {
      const currentScroll = document.documentElement.scrollTop;
      const height = document.documentElement.clientHeight;
      const animalList = document.getElementsByClassName("section");
      let a = [];
      a.forEach.call(animalList, function (item) {
        if (currentScroll + height >= item.offsetTop) {
          item.classList.remove("animate__animated");
          item.classList.remove("animate__fadeInUp");
          item.classList.add("animate__animated");
          item.classList.add("animate__fadeInUp");
        }
      });
    },
    tabClick(tab, event) {
      console.log(tab, event);
    },
    liveAppItemAciton(index, videoUrl) {
      this.videoShow = false;
      this.liveAppActive = index;
      this.$nextTick(() => {
        this.videoUrl = videoUrl;
        this.videoShow = true;
      });
    },
    liveAppItemStyle(index, item) {
      let obj = {
        "background-image": "",
        color: "red",
      };
      if (index === this.liveAppActive) {
        obj.backgroundImage = item.background;
      }
      return obj;
    },
  },
  components: {
    partTitle,
    iconAnimal,
    cHeader,
    cFooter,
    callMe,
  },
  mounted() {
    this.dataList = data;
    this.$nextTick(() => {
      this.$refs.tabs.$refs.nav.$nextTick(() => {
        // 此时tab的nav才渲染dom 否则拿不到el-tabs__item
        var target = document.getElementsByClassName("el-tabs__item");
        let that = this;
        console.log(target, "target", this.$refs.tabs);
        for (let i = 0; i < target.length; i++) {
          if (!target[i].mouseover) {
            target[i].addEventListener("mouseover", (event) => {
              // tab vueComponent , tabName , event
              // need pageDom
              const pageDom = this.$refs.tabPage;
              that.$refs.tabs.handleTabClick(pageDom, String(i), event);
            });
          }
        }
      });
    });
  },
};
</script>

<style scoped lang="less">
@import url(@/style/common.less);
@import url(style.less);
</style>

