/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const vbaoManage = [{
  path: '/roles',
  component: Layout,
  redirect: 'roles/mechanism',
  name: 'roles',
  meta: {
    title: '权限管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'menu',
      component: () => import('@/views/vbaoManage/roles/menu/index'),
      name: 'menu',
      meta: { title: '菜单管理', noCache: true }
    }, {
      path: 'role',
      component: () => import('@/views/vbaoManage/roles/role/index'),
      name: 'role',
      meta: { title: '角色管理', noCache: true }
    }, {
      path: 'operator',
      component: () => import('@/views/vbaoManage/roles/operator/index'),
      name: 'operator',
      meta: { title: '操作员管理', noCache: true }
    }
  ]
}, {
  path: '/baseData',
  component: Layout,
  redirect: 'baseData/dataInfo',
  name: 'baseData',
  meta: {
    title: '基础数据管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'dataInfo',
      component: () => import('@/views/vbaoManage/baseData/dataInfo/index'),
      name: 'dataInfo',
      meta: { title: '数据字典信息管理', noCache: true }
    }, {
      path: 'dataType',
      component: () => import('@/views/vbaoManage/baseData/dataType/index'),
      name: 'dataType',
      meta: { title: '数据字典类型管理', noCache: true }
    }, {
      path: 'response',
      component: () => import('@/views/vbaoManage/baseData/response/index'),
      name: 'response',
      meta: { title: '平台应答信息管理', noCache: true }
    }, {
      path: 'banks',
      component: () => import('@/views/vbaoManage/baseData/banks/index'),
      name: 'banks',
      meta: { title: '平台银行管理', noCache: true }
    }, {
      path: 'mechanism',
      component: () => import('@/views/vbaoManage/baseData/mechanism/index'),
      name: 'mechanism',
      meta: { title: '平台机构管理', noCache: true }
    }, {
      path: 'product',
      component: () => import('@/views/vbaoManage/baseData/product/index'),
      name: 'product',
      meta: { title: '平台产品管理', noCache: true }
    }, {
      path: 'cardBin',
      component: () => import('@/views/vbaoManage/baseData/cardBin/index'),
      name: 'cardBin',
      meta: { title: '平台卡bin管理', noCache: true }
    }, {
      path: 'bankNumber',
      component: () => import('@/views/vbaoManage/baseData/bankNumber/index'),
      name: 'bankNumber',
      meta: { title: '平台联行号管理', noCache: true }
    }, {
      path: 'region',
      component: () => import('@/views/vbaoManage/baseData/region/index'),
      name: 'region',
      meta: { title: '平台区域信息管理', noCache: true }
    }, {
      path: 'config',
      component: () => import('@/views/vbaoManage/baseData/config/index'),
      name: 'config',
      meta: { title: '平台配置信息管理', noCache: true }
    }
  ]
}, {
  path: '/merchants',
  component: Layout,
  redirect: 'merchants/merchantInfo',
  name: 'merchants',
  meta: {
    title: '商户管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'merchantInfo',
      component: () => import('@/views/vbaoManage/merchants/merchantInfo/index'),
      name: 'merchantInfo',
      meta: { title: '商户信息管理', noCache: true }
    }, {
      path: 'merchantPay',
      component: () => import('@/views/vbaoManage/merchants/merchantPay/index'),
      name: 'merchantPay',
      meta: { title: '商户支付产品管理', noCache: true }
    }, {
      path: 'payBank',
      component: () => import('@/views/vbaoManage/merchants/payBank/index'),
      name: 'payBank',
      meta: { title: '商户支付产品银行管理', noCache: true }
    }, {
      path: 'routers',
      component: () => import('@/views/vbaoManage/merchants/routers/index'),
      name: 'routers',
      meta: { title: '商户路由优先级管理', noCache: true }
    }, {
      path: 'channelPay',
      component: () => import('@/views/vbaoManage/merchants/channelPay/index'),
      name: 'channelPay',
      meta: { title: '商户渠道支付参数管理', noCache: true }
    }, {
      path: 'batchUnpackParam',
      component: () => import('@/views/vbaoManage/merchants/batchUnpackParam/index'),
      name: 'batchUnpackParam',
      meta: { title: '商户批量拆包快速批量配置', noCache: true }
    }, {
      path: 'riskControl',
      component: () => import('@/views/vbaoManage/merchants/riskControl/index'),
      name: 'riskControl',
      meta: { title: '商户风险控制管理', noCache: true }
    }, {
      path: 'merchantMechanism',
      component: () => import('@/views/vbaoManage/merchants/merchantMechanism/index'),
      name: 'merchantMechanism',
      meta: { title: '商户机构管理', noCache: true }
    }, {
      path: 'account',
      component: () => import('@/views/vbaoManage/merchants/account/index'),
      name: 'account',
      meta: { title: '商户结算账户管理', noCache: true }
    }, {
      path: 'businessType',
      component: () => import('@/views/vbaoManage/merchants/businessType/index'),
      name: 'businessType',
      meta: { title: '商户业务类型管理', noCache: true }
    }, {
      path: 'policyType',
      component: () => import('@/views/vbaoManage/merchants/policyType/index'),
      name: 'policyType',
      meta: { title: '商户保单业务类型管理', noCache: true }
    }, {
      path: 'policyChannel',
      component: () => import('@/views/vbaoManage/merchants/policyChannel/index'),
      name: 'policyChannel',
      meta: { title: '商户保单销售渠道管理', noCache: true }
    }, {
      path: 'bankNumber',
      component: () => import('@/views/vbaoManage/merchants/bankNumber/index'),
      name: 'bankNumber',
      meta: { title: '商户银行编码管理', noCache: true }
    }, {
      path: 'routerRule',
      component: () => import('@/views/vbaoManage/merchants/routerRule/index'),
      name: 'routerRule',
      meta: { title: '路由规则管理', noCache: true }
    }, {
      path: 'IPConfig',
      component: () => import('@/views/vbaoManage/merchants/IPConfig/index'),
      name: 'IPConfig',
      meta: { title: '商户数据安全配置（IP授权）', noCache: true }
    }, {
      path: 'dailyReport',
      component: () => import('@/views/vbaoManage/merchants/dailyReport/index'),
      name: 'dailyReport',
      meta: { title: '商户日报管理', noCache: true }
    }, {
      path: 'allowRule',
      component: () => import('@/views/vbaoManage/merchants/allowRule/index'),
      name: 'merchantInfo',
      meta: { title: '鉴权白名单规则管理', noCache: true }
    }, {
      path: 'serviceCharge',
      component: () => import('@/views/vbaoManage/merchants/serviceCharge/index'),
      name: 'serviceCharge',
      meta: { title: '商户手续费管理', noCache: true }
    }, {
      path: 'settlement',
      component: () => import('@/views/vbaoManage/merchants/settlement/index'),
      name: 'settlement',
      meta: { title: '商户结算方式', noCache: true }
    }
  ]
}, {
  path: '/channels',
  component: Layout,
  redirect: 'channels/channelInfo',
  name: 'channels',
  meta: {
    title: '渠道管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'channelInfo',
      component: () => import('@/views/vbaoManage/channels/channelInfo/index'),
      name: 'channelInfo',
      meta: { title: '渠道信息管理', noCache: true }
    }, {
      path: 'channelPay',
      component: () => import('@/views/vbaoManage/channels/channelPay/index'),
      name: 'channelPay',
      meta: { title: '渠道支付产品管理', noCache: true }
    }, {
      path: 'payBank',
      component: () => import('@/views/vbaoManage/channels/payBank/index'),
      name: 'payBank',
      meta: { title: '渠道支付产品银行管理', noCache: true }
    }, {
      path: 'response',
      component: () => import('@/views/vbaoManage/channels/response/index'),
      name: 'response',
      meta: { title: '渠道应答信息管理', noCache: true }
    }, {
      path: 'serviceCharge',
      component: () => import('@/views/vbaoManage/channels/serviceCharge/index'),
      name: 'channelInfo',
      meta: { title: '渠道手续费管理', noCache: true }
    }
  ]
}, {
  path: '/system',
  component: Layout,
  redirect: 'system/log',
  name: 'system',
  meta: {
    title: '系统管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'log',
      component: () => import('@/views/vbaoManage/system/log/index'),
      name: 'log',
      meta: { title: '交易日志查询', noCache: true }
    }, {
      path: 'test',
      component: () => import('@/views/vbaoManage/system/test/index'),
      name: 'test',
      meta: { title: '测试使用', noCache: true }
    }, {
      path: 'IPPort',
      component: () => import('@/views/vbaoManage/system/IPPort/index'),
      name: 'IPPort',
      meta: { title: 'IP端口监控', noCache: true }
    }
  ]
}, {
  path: '/channelTransaction',
  component: Layout,
  redirect: 'channelTransaction/shande',
  name: 'channelTransaction',
  meta: {
    title: '渠道交易管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'shande',
      component: () => import('@/views/vbaoManage/channelTransaction/shande/index'),
      name: 'shande',
      meta: { title: '衫德结算单', noCache: true }
    }, {
      path: 'qrcode',
      component: () => import('@/views/vbaoManage/channelTransaction/qrcode/index'),
      name: 'qrcode',
      meta: { title: '渠道扫码交易', noCache: true },
      redirect: '/channelTransaction/qrcode/refund',
      children: [
        {
          path: '/refund',
          component: () => import('@/views/vbaoManage/channelTransaction/qrcode/refund/index'),
          name: 'refund',
          meta: { title: '渠道扫码退款', noCache: true }
        }, {
          path: '/query',
          component: () => import('@/views/vbaoManage/channelTransaction/qrcode/query/index'),
          name: 'query',
          meta: { title: '渠道扫码查询', noCache: true }
        }
      ]
    }, {
      path: 'authentication',
      component: () => import('@/views/vbaoManage/channelTransaction/authentication/index'),
      name: 'authentication',
      meta: { title: '渠道鉴权交易', noCache: true }
    }, {
      path: 'single',
      component: () => import('@/views/vbaoManage/channelTransaction/single/index'),
      name: 'single',
      meta: { title: '渠道单笔交易', noCache: true }
    }, {
      path: 'batch',
      component: () => import('@/views/vbaoManage/channelTransaction/batch/index'),
      name: 'batch',
      meta: { title: '渠道批量交易', noCache: true }
    }
  ]
}, {
  path: '/platformTransaction',
  component: Layout,
  redirect: 'platformTransaction/qrcode',
  name: 'platformTransaction',
  meta: {
    title: '平台交易管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'refund',
      component: () => import('@/views/vbaoManage/platformTransaction/refund/index'),
      name: 'refund',
      meta: { title: '交易退汇处理', noCache: true },
      redirect: '/platformTransaction/refund/query',
      children: [
        {
          path: 'query',
          component: () => import('@/views/vbaoManage/platformTransaction/refund/query/index'),
          name: 'query',
          meta: { title: '退汇查询处理', noCache: true }
        }, {
          path: 'examine',
          component: () => import('@/views/vbaoManage/platformTransaction/refund/examine/index'),
          name: 'examine',
          meta: { title: '退回审核', noCache: true }
        }
      ]
    }, {
      path: 'vbao',
      component: () => import('@/views/vbaoManage/platformTransaction/vbao/index'),
      name: 'vbao',
      meta: { title: '平台微保快捷', noCache: true }
    }, {
      path: 'authentication',
      component: () => import('@/views/vbaoManage/platformTransaction/authentication/index'),
      name: 'authentication',
      meta: { title: '平台鉴权交易', noCache: true },
      redirect: '/platformTransaction/authentication/allowList',
      children: [
        {
          path: 'allowList',
          component: () => import('@/views/vbaoManage/platformTransaction/authentication/allowList/index'),
          name: 'allowList',
          meta: { title: '鉴权白名单查询', noCache: true }
        }, {
          path: 'query',
          component: () => import('@/views/vbaoManage/platformTransaction/authentication/query/index'),
          name: 'query',
          meta: { title: '平台鉴权查询', noCache: true }
        }
      ]
    }, {
      path: 'qrcode',
      component: () => import('@/views/vbaoManage/platformTransaction/qrcode/index'),
      name: 'qrcode',
      meta: { title: '平台扫码交易', noCache: true },
      redirect: '/platformTransaction/qrcode/query',
      children: [
        {
          path: 'query',
          component: () => import('@/views/vbaoManage/platformTransaction/qrcode/query/index'),
          name: 'query',
          meta: { title: '平台扫码交易查询', noCache: true }
        }, {
          path: 'refund',
          component: () => import('@/views/vbaoManage/platformTransaction/qrcode/refund/index'),
          name: 'refund',
          meta: { title: '平台扫码退款查询', noCache: true }
        }
      ]
    }, {
      path: 'single',
      component: () => import('@/views/vbaoManage/platformTransaction/single/index'),
      name: 'single',
      meta: { title: '平台单笔交易', noCache: true },
      redirect: '/platformTransaction/single/query',
      children: [
        {
          path: 'query',
          component: () => import('@/views/vbaoManage/platformTransaction/single/query/index'),
          name: 'query',
          meta: { title: '平台单笔交易查询', noCache: true }
        }, {
          path: 'log',
          component: () => import('@/views/vbaoManage/platformTransaction/single/log/index'),
          name: 'log',
          meta: { title: '绑卡日志查询', noCache: true }
        }
      ]
    }, {
      path: 'batch',
      component: () => import('@/views/vbaoManage/platformTransaction/batch/index'),
      name: 'qbatch',
      meta: { title: '平台批量交易', noCache: true },
      redirect: '/platformTransaction/batch/query',
      children: [
        {
          path: 'query',
          component: () => import('@/views/vbaoManage/platformTransaction/batch/query/index'),
          name: 'query',
          meta: { title: '平台批量交易查询', noCache: true }
        }, {
          path: 'detail',
          component: () => import('@/views/vbaoManage/platformTransaction/batch/detail/index'),
          name: 'detail',
          meta: { title: '平台批量明细查询', noCache: true }
        }
      ]
    }
  ]
}, {
  path: '/merchantTransaction',
  component: Layout,
  redirect: 'merchantTransaction/qrcode',
  name: 'merchantTransaction',
  meta: {
    title: '商户交易管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'qrcode',
      component: () => import('@/views/vbaoManage/merchantTransaction/qrcode/index'),
      name: 'qrcode',
      meta: { title: '商户扫码交易', noCache: true },
      redirect: '/merchantTransaction/qrcode/refund',
      children: [
        {
          path: 'query',
          component: () => import('@/views/vbaoManage/merchantTransaction/qrcode/query/index'),
          name: 'query',
          meta: { title: '扫码交易查询', noCache: true }
        }, {
          path: 'refund',
          component: () => import('@/views/vbaoManage/merchantTransaction/qrcode/refund/index'),
          name: 'refund',
          meta: { title: '扫码退款查询', noCache: true }
        }
      ]
    }, {
      path: 'vabao',
      component: () => import('@/views/vbaoManage/merchantTransaction/vbao/index'),
      name: 'vbao',
      meta: { title: '商户微保快捷', noCache: true }
    }, {
      path: 'authentication',
      component: () => import('@/views/vbaoManage/merchantTransaction/authentication/index'),
      name: 'authentication',
      meta: { title: '商户鉴权交易', noCache: true }
    }, {
      path: 'single',
      component: () => import('@/views/vbaoManage/merchantTransaction/single/index'),
      name: 'single',
      meta: { title: '商户单笔交易', noCache: true },
      redirect: '/merchantTransaction/single/query',
      children: [
        {
          path: 'query',
          component: () => import('@/views/vbaoManage/merchantTransaction/single/query/index'),
          name: 'query',
          meta: { title: '商户单笔交易查询', noCache: true }
        }, {
          path: 'examine',
          component: () => import('@/views/vbaoManage/merchantTransaction/single/examine/index'),
          name: 'examine',
          meta: { title: '单笔交易审核', noCache: true }
        }, {
          path: 'apply',
          component: () => import('@/views/vbaoManage/merchantTransaction/single/apply/index'),
          name: 'apply',
          meta: { title: '单笔交易申请', noCache: true }
        }
      ]
    }, {
      path: 'batch',
      component: () => import('@/views/vbaoManage/merchantTransaction/batch/index'),
      name: 'batch',
      meta: { title: '商户批量交易', noCache: true },
      redirect: '/merchantTransaction/batch/apply',
      children: [
        {
          path: 'apply',
          component: () => import('@/views/vbaoManage/merchantTransaction/batch/apply/index'),
          name: 'apply',
          meta: { title: '批量交易申请', noCache: true }
        }, {
          path: 'handle',
          component: () => import('@/views/vbaoManage/merchantTransaction/batch/handle/index'),
          name: 'handle',
          meta: { title: '批量交易处理', noCache: true }
        }, {
          path: 'merchantQuery',
          component: () => import('@/views/vbaoManage/merchantTransaction/batch/merchantQuery/index'),
          name: 'merchantQuery',
          meta: { title: '商户批量交易查询', noCache: true }
        }, {
          path: 'merchantDetail',
          component: () => import('@/views/vbaoManage/merchantTransaction/batch/merchantDetail/index'),
          name: 'merchantDetail',
          meta: { title: '商户批量明细查询', noCache: true }
        }
      ]
    }
  ]
}, {
  path: '/reportInfo',
  component: Layout,
  redirect: 'reportInfo/total',
  name: 'reportInfo',
  meta: {
    title: '报表管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'total',
      component: () => import('@/views/vbaoManage/reportInfo/total/index'),
      name: 'total',
      meta: { title: '总报表', noCache: true }
    }, {
      path: 'daily',
      component: () => import('@/views/vbaoManage/reportInfo/daily/index'),
      name: 'daily',
      meta: { title: '日历报表', noCache: true }
    }, {
      path: 'count',
      component: () => import('@/views/vbaoManage/reportInfo/count/index'),
      name: 'count',
      meta: { title: '交易统计', noCache: true }
    }, {
      path: 'today',
      component: () => import('@/views/vbaoManage/reportInfo/today/index'),
      name: 'today',
      meta: { title: '运营交易统计日报表（当天）查询', noCache: true }
    }, {
      path: 'merchant',
      component: () => import('@/views/vbaoManage/reportInfo/merchant/index'),
      name: 'merchant',
      meta: { title: '商户日报管理', noCache: true }
    }, {
      path: 'operate',
      component: () => import('@/views/vbaoManage/reportInfo/operate/index'),
      name: 'operate',
      meta: { title: '运营交易统计日报表查询', noCache: true }
    }, {
      path: 'banks',
      component: () => import('@/views/vbaoManage/reportInfo/banks/index'),
      name: 'banks',
      meta: { title: '商户报表各银行交易情况', noCache: true }
    }, {
      path: 'merchantData',
      component: () => import('@/views/vbaoManage/reportInfo/merchantData/index'),
      name: 'merchantData',
      meta: { title: '商户报表交易数据统计', noCache: true }
    }, {
      path: 'fail',
      component: () => import('@/views/vbaoManage/reportInfo/fail/index'),
      name: 'fail',
      meta: { title: '商户报表失败原因分析', noCache: true }
    }
  ]
}, {
  path: '/billInfo',
  component: Layout,
  redirect: 'billInfo/channelBill',
  name: 'billInfo',
  meta: {
    title: '对账信息管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'difference',
      component: () => import('@/views/vbaoManage/billInfo/difference/index'),
      name: 'difference',
      meta: { title: '对账结果差异查询', noCache: true }
    }, {
      path: 'return',
      component: () => import('@/views/vbaoManage/billInfo/return/index'),
      name: 'return',
      meta: { title: '电子回单', noCache: true }
    }, {
      path: 'channelBill',
      component: () => import('@/views/vbaoManage/billInfo/channelBill/index'),
      name: 'channelBill',
      meta: { title: '渠道对账单查询', noCache: true }
    }, {
      path: 'merchantBill',
      component: () => import('@/views/vbaoManage/billInfo/merchantBill/index'),
      name: 'merchantBill',
      meta: { title: '商户对账单查询', noCache: true }
    }, {
      path: 'result',
      component: () => import('@/views/vbaoManage/billInfo/result/index'),
      name: 'result',
      meta: { title: '对账结果查询', noCache: true }
    }, {
      path: 'financeCost',
      component: () => import('@/views/vbaoManage/billInfo/financeCost/index'),
      name: 'financeCost',
      meta: { title: '财务成本费用查询', noCache: true }
    }, {
      path: 'financeResearch',
      component: () => import('@/views/vbaoManage/billInfo/financeResearch/index'),
      name: 'financeResearch',
      meta: { title: '财务研发费用查询', noCache: true }
    }
  ]
}]

export default vbaoManage
