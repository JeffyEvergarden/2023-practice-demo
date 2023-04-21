module.exports = [
  {
    type: 'customer',
    text: '喂，你好吗，我叫梁山伯，是个高中生侦探',
    delay: 4
  },
  {
    type: 'customer',
    text: '喂，你好吗，我叫梁山伯，是个高中生侦探',
    delay: 3
  },
  {
    type: 'customer',
    text: '您好，中邮消费给你致电，请问你是梁山伯先生本人吗您好，你是说你不是，中邮消费给你致电，请问你是梁山伯先生本人吗您好，中邮消费给你致电，请问你是梁山伯先生本人吗您好，中邮消费给你致电，请问你是梁山伯先生本人吗您好，中邮消费给你致电，请问你是梁山伯先生本人吗您好，中邮消费给你致电，请问你是梁山伯先生本人吗',
    delay: 20
  },
  {
    type: 'standard-response',
    standardMsg: '您当前逾期2期，逾期金额2000元，为了不影响您在我行的信用，今天能还清么您当前逾期2期，逾期金额2000元，为了不影响您在我行的信用，今天能还清么您当前逾期2期，逾期金额2000元，为了不影响您在我行的信用，今天能还', 
    keyPoint: '客户逾期信息、客户欠款信息、提醒还款、客户逾期信息、客户欠款信息、提醒还款'
  },
  {
    type: 'student',
    status: 'loading',
    text: '您好，中邮消费给你致电，请问你是梁山伯先生本人吗您好，你是说你不是，中邮消费给你致电，请问你是梁山伯先生本人吗您好，中邮消费给你致电，请问你是梁山伯先生本人吗您好，中邮消费给你致电，请问你是梁山伯先生本人吗您好，中邮消费给你致电，请问你是梁山伯先生本人吗您好，中邮消费给你致电，请问你是梁山伯先生本人吗',
    keysTips: [
      {
        flag: false,
        desc: '逾期信息'
      },
      {
        flag: false,
        desc: '客户欠款信息您好，中邮消费给你致电，请问你是梁山伯先生本人吗您好，中邮消费给你致电，请问你是梁山伯先生本人吗您好，中邮消费给你致电，请问你是梁山伯先生本人吗您好，中邮消费给你致电，请问你是梁山伯先生本人吗您好，中邮消费给你致电，请问你是梁山伯先生本人吗'
      },
      {
        flag: true,
        desc: '服务还款'
      }
    ]
  },
  {
    type: 'system',
    text: '你的消息超过8s没有回复，臭傻逼快回复啊'
  },
  {
    type: 'customer',
    text: '喂，你好吗，我叫梁山伯，是个高中生侦探'
  },
  {
    type: 'standard-response',
    standardMsg: '1', 
    keyPoint: '2'
  },
  {
    type: 'student',
    status: 'success',
    text: '您好，中邮消费给你致电，请问你是梁山伯先生本人吗'
  },
  {
    type: 'exam-end',
    status: 'success',
    text: '您好，中邮消费给你致电，请问你是梁山伯先生本人吗'
  }
]
