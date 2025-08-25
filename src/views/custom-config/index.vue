<template>
  <el-button class="flex flex-col" @click="addEmu"> 一键添加枚举配置 </el-button>
</template>
<script lang="ts" setup>
import * as DictTypeApi from '@/api/system/dict/dict.type'
import {
  involved,
  availableTopics,
  advantageActions,
  AGE,
  ALL_CATEGORIES_DISPLAY,
  availableTimeColumns,
  benefitsOptions,
  COMPANY_SIZES,
  COMPANY_TYPES,
  EDUCATION_LEVELS,
  EXPERIENCE_LEVELS,
  salaryColumns,
  SEX,
  WORK_TYPES,
  PostCategory,
  visibilitySetting,
  zhaopingyaoqiu
} from './constant'
import { keys } from 'lodash-es'
import { ElNotification } from 'element-plus'
import { createDictData } from '@/api/system/dict/dict.data'
const addEmu = async () => {
  let emuMap = {
    AGE: '年龄',
    SEX: '性别',
    WORK_TYPES: '工作类型',
    EXPERIENCE_LEVELS: '工作经验',
    EDUCATION_LEVELS: '学历',
    COMPANY_SIZES: '公司规模',
    COMPANY_TYPES: '公司性质',
    salaryColumns: '薪资',
    availableTimeColumns: '到岗时间',
    benefitsOptions: '福利待遇',
    advantageActions: '个人优势',
    ALL_CATEGORIES_DISPLAY: '全部职位分类',
    PostCategory: '帖子分类',
    visibilitySetting: '帖子公开性',
    availableTopics: '帖子话题',
    involved: '公司所属行业',
    zhaopingyaoqiu: '招聘要求'
  }
  let obj = {
    involved,
    availableTopics,
    AGE,
    SEX,
    WORK_TYPES,
    EXPERIENCE_LEVELS,
    EDUCATION_LEVELS,
    COMPANY_SIZES,
    COMPANY_TYPES,
    salaryColumns,
    availableTimeColumns,
    benefitsOptions,
    advantageActions,
    ALL_CATEGORIES_DISPLAY,
    PostCategory,
    visibilitySetting,
    zhaopingyaoqiu
  }
  let result = await Promise.all(
    keys(obj).map(async (item) => {
      let res = await DictTypeApi.createDictType({
        name: emuMap[item],
        type: item,
        status: 0,
        remark: '',
        createTime: new Date()
      } as any)
      await Promise.all(
        obj[item].map(async (ite, index) => {
          return createDictData({
            dictType: item,
            label: typeof ite == 'string' ? ite : ite.label,
            remark: '',
            sort: index,
            status: 0,
            value: typeof ite == 'string' ? ite : ite.value
          } as any)
        })
      )
    })
  )
  ElNotification({
    title: '',
    message: '枚举数据初始化成功',
    type: 'success'
  })
}
</script>
