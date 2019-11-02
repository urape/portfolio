<template>
  <b-container class="box w-90" fluid>
    <h1>Careers</h1>
    <b-row v-for="career in careers" :key="career.id" class="content">
      <b-col md="1"></b-col>
      <b-col md="5" cols="12">
        <div v-if="career.id % 2 !== 0">
          <h5 class="m-0">{{ career.title }}</h5>
          <span>{{ career.term }}</span>
          <b-row>
            <b-col md="6" cols="12">
              <ul >
                <h6 class="m-0">Content</h6>
                <li class="text-left" v-for="content in career.contents" :key="content.id">
                  {{ content.item }}
                </li>
              </ul>
            </b-col>
            <b-col md="6" cols="12">
              <h6 class="m-0">Tool</h6>
              <ul>
                <li class="row-2 text-left" v-for="tool in career.tools" :key="tool.id">
                  {{ tool.item }}
                </li>
              </ul>
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col md="5" cols="12">
        <div v-if="career.id % 2 === 0">
          <h5 class="m-0">{{ career.title }}</h5>
          <span>{{ career.term }}</span>
          <b-row>
            <b-col md="6" cols="12">
              <ul >
                <h6 class="m-0">Content</h6>
                <li class="text-left" v-for="content in career.contents" :key="content.id">
                  {{ content.item }}
                </li>
              </ul>
            </b-col>
            <b-col md="6" cols="12">
              <h6 class="m-0">Tool</h6>
              <ul>
                <li class="row-2 text-left" v-for="tool in career.tools" :key="tool.id">
                  {{ tool.item }}
                </li>
              </ul>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default ({
  data() {
    return {
      careers: [
        {
          id: 1,
          title: '搬送機器営業',
          term: '2015/04 ~ 2015/12',
          contents: [
            { item: 'BtoB法人営業'},
            { item: '見積書作成'},
            { item: '搬送機器の選定、施工'}
          ],
          tools: [
            {item: 'Excel'}
          ]
        },
        {
          id: 2,
          title: '製造メーカー　生産管理システム保守',
          term: '2018/05 ~ 2018/09',
          contents: [
            { item: '定周期ジョブの監視' },
            { item: 'ジョブ監視、リカバリ' },
            { item: 'ヘルプデスク対応' }
          ],
          tools: [
            { item: 'PL/SQL' },
            { item: 'Oracle EBS' },
            { item: 'Oracle 11g' },
            { item: 'JP1' },
            { item: 'FFFTP' },
            { item: 'Mantis Bug Tracker' }
          ]
        },
        {
          id: 3,
          title: 'プログラミングスクール ECサイト改修',
          term: '2018/05 ~ 2018/09',
          contents: [
            { item: 'Viewの共通化' },
            { item: '商品データの取得' },
            { item: '類似カテゴリー商品取得' },
            { item: '単体テスト実装' }
          ],
          tools: [
            { item: 'Ruby on Rails5' },
            { item: 'Solidus' },
            { item: 'RSpec' },
            { item: 'ERB' },
            { item: 'MySQL' },
            { item: 'Git' },
            { item: 'Bitbucket' }
          ]
        },
        {
          id: 4,
          title: 'PHP開発研修',
          term: '2019/01 ~ 2-10/04',
          contents: [
            { item: 'スケジュール帳の作成' },
            { item: '掲示板の作成' },
            { item: 'ブログの作成' },
            { item: 'Twitterのクローン作成' }
          ],
          tools: [
            { item: 'CodeIgniter3' },
            { item: 'Smarty3' },
            { item: 'Bootstrap' },
            { item: 'PHP' },
            { item: 'HTML' },
            { item: 'CSS' },
            { item: 'JavaScript' },
            { item: 'jQuery' },
            { item: 'MySQL' },
            { item: 'XAMPP' },
          ]
        },
        {
          id: 5,
          title: '物流倉庫システム開発',
          term: '2019/04 ~ 2019/09',
          contents: [
            { item: '在庫管理システム開発' },
            { item: '請求書システム修正' },
            { item: 'ヘルプデスク対応' }
          ],
          tools: [
            { item: 'ACCESS VBA' },
            { item: 'EXCEL VBA' },
            { item: 'PostgreSQL' }
          ]
        }
      ]
    }
  }
})
</script>

<style scoped>
.content {
  padding-top: 10px;
}

.w-90 {
  width: 90%;
}

.row-2{
  padding: 0;
  float: left;
  width: 50%;
  list-style: none;
}
</style>
