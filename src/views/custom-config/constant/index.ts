export const AGE = new Array(34).fill('').map((_, index) => {
  return {
    label: `${index + 16}岁`,
    value: index + 16
  }
})
export const SEX = ['女', '男', '保密']
// 工作类型
export const WORK_TYPES = ['全职', '兼职', '实习','临时']

// 工作经验
export const EXPERIENCE_LEVELS = ['应届毕业', '1-3年', '3-5年', '5-10年', '10年以上']

// 学历要求
export const EDUCATION_LEVELS = ['初中', '高中', '中专', '大专', '本科', '硕士', '博士']

// 公司规模
export const COMPANY_SIZES = ['20人以下', '20-50人', '50-200人', '200-500人', '500+人']

// 公司类型
export const COMPANY_TYPES = ['民营企业', '国有企业', '外资企业', '事业单位', '政府机关']
export const salaryColumns = ['面议', '3k以下', '3k-8k', '8k-15k', '15k-30k', '30k以上']

export const availableTimeColumns = ['随时到岗', '一周内到岗', '一个月内到岗', '三个月内到岗']

export const benefitsOptions = ['五险一金' , '节日福利', '带薪年假', '定期团建', '工作餐', '交通补贴', '电话补助', '加班补助', '话费报销', '年底奖金', '绩效奖金', '年终双薪', '周末双休', '每周五天', '周末全休', '周中班', '周中上', '每周一休', '每天休息', '工作补贴', '提供宿舍', '培训机会', '国内出差', '国际出差', '项目奖金', '灵活工作']

export const advantageActions = [ '形象气质佳' , '普通话标准', '声音甜美', '舞台经验丰富', '专业技能过硬', '学习能力强', '团队协作能力强', '抗压能力强']
export const ALL_CATEGORIES_DISPLAY = [
  {
    label: '台前',
    value: '台前'
  },
  {
    label: '演员',
    value: '台前-演员'
  },
  {
    label: '舞蹈类',
    value: '台前-演员-舞蹈类'
  },
  {
    label: '表演类',
    value: '台前-演员-表演类'
  },
  {
    label: '武术类',
    value: '台前-演员-武术类'
  },
  {
    label: '杂技类',
    value: '台前-演员-杂技类'
  },
  {
    label: '音乐类',
    value: '台前-演员-音乐类'
  },
  {
    label: '模特类',
    value: '台前-演员-模特类'
  },
  {
    label: '主持/互动',
    value: '台前-主持/互动'
  },
  {
    label: '驻场主持人',
    value: '台前-主持/互动-驻场主持人'
  },
  {
    label: '角色扮演互动员',
    value: '台前-主持/互动-角色扮演互动员'
  },
  {
    label: '古装NPC',
    value: '台前-主持/互动-古装NPC'
  },
  {
    label: '幕后',
    value: '幕后'
  },
  {
    label: '艺术创作',
    value: '幕后-艺术创作'
  },
  {
    label: '导演',
    value: '幕后-艺术创作-导演'
  },
  {
    label: '分幕编剧',
    value: '幕后-艺术创作-分幕编剧'
  },
  {
    label: '舞蹈编排师',
    value: '幕后-艺术创作-舞蹈编排师'
  },
  {
    label: '服装设计师',
    value: '幕后-艺术创作-服装设计师'
  },
  {
    label: '道具造型师',
    value: '幕后-艺术创作-道具造型师'
  },
  {
    label: '舞美设计师',
    value: '幕后-艺术创作-舞美设计师'
  },
  {
    label: '特效设计师',
    value: '幕后-艺术创作-特效设计师'
  },
  {
    label: '技术制作',
    value: '幕后-技术制作'
  },
  {
    label: '灯光控制师',
    value: '幕后-技术制作-灯光控制师'
  },
  {
    label: '音响工程师',
    value: '幕后-技术制作-音响工程师'
  },
  {
    label: '水景特效师',
    value: '幕后-技术制作-水景特效师'
  },
  {
    label: '焰火控制员',
    value: '幕后-技术制作-焰火控制员'
  },
  {
    label: '多媒体投影师',
    value: '幕后-技术制作-多媒体投影师'
  },
  {
    label: '动物演员驯导师',
    value: '幕后-技术制作-动物演员驯导师'
  },
  {
    label: '道具制作师',
    value: '幕后-技术制作-道具制作师'
  },
  {
    label: '武器维护员',
    value: '幕后-技术制作-武器维护员'
  },
  {
    label: '支持保障',
    value: '幕后-支持保障'
  },
  {
    label: '舞台监督',
    value: '幕后-支持保障-舞台监督'
  },
  {
    label: '演出场记',
    value: '幕后-支持保障-演出场记'
  },
  {
    label: '替补演员',
    value: '幕后-支持保障-替补演员'
  },
  {
    label: '运营',
    value: '运营'
  },
  {
    label: '客服',
    value: '运营-客服'
  },
  {
    label: '游客服务',
    value: '运营-客服-游客服务'
  },
  {
    label: '票务',
    value: '运营-客服-票务'
  },

  {
    label: '接待',
    value: '运营-游客服务-接待'
  },
  {
    label: '客户服务',
    value: '运营-游客服务-客户服务'
  },
  {
    label: '安全管理',
    value: '运营-安全管理'
  },
  {
    label: '紧急救护员',
    value: '运营-安全管理-紧急救护员'
  },
  {
    label: '设备安全检查员',
    value: '运营-安全管理-设备安全检查员'
  },
  {
    label: '市场营销',
    value: '运营-市场营销'
  },
  {
    label: '宣传策划',
    value: '运营-市场营销-宣传策划'
  },
  {
    label: '票务渠道营销',
    value: '运营-市场营销-票务渠道营销'
  },
  {
    label: '新媒体运营',
    value: '运营-市场营销-新媒体运营'
  },
  {
    label: '综合支持',
    value: '运营-综合支持'
  },
  {
    label: '产品开发',
    value: '运营-综合支持-产品开发'
  },
  {
    label: '广告招商',
    value: '运营-综合支持-广告招商'
  },
  {
    label: '数据运营',
    value: '运营-综合支持-数据运营'
  },
  {
    label: '人力资源',
    value: '运营-综合支持-人力资源'
  },
  {
    label: '后勤',
    value: '运营-综合支持-后勤'
  },
  {
    label: '工程维修',
    value: '运营-综合支持-工程维修'
  }
]

//帖子分类

export const PostCategory = [ '舞蹈技巧' , '招聘信息', '武术交流']
export const visibilitySetting = [ '公开',  '私密']
export const availableTopics = [ '话题1', '话题2', '话题3', '话题4']
export const involved = [ '文化', '体育', '历史', '社会']
export const zhaopingyaoqiu = [ '招聘要求1', '招聘要求2', '招聘要求3', '招聘要求4']


