var bloggers = [
  {
    name:'小林　晋也',
    userid:'kobayashi',
    twitterid:'usa2jp',
    frequency:3,
    blogTitle:'田舎社長のあしあと日記',
    description:'高専時代をパチプロで過ごし見事留年。その後、機械部品商社に勤めトライボロジーを学び、北海道での半導体機械部品の新規開拓を担当。退職後、すぐにWEBテクノロジー企業「スカイアークシステム」を設立し代表取締役に就任。'
  },
  {
    name:'横田　真俊',
    userid:'yokota',
    twitterid:'Wslash',
    frequency:1,
    blogTitle:'毎日がアップデート',
    description:'大学卒業後、調査会社勤務を経て現在、とあるIT系企業の企画業務を担当。プライベートではIT系ニュースサイト「P2Ptoday(http://wslash.com/)」を運営。講演や執筆など過去の活動状況についてはこちら(http://wslash.com/index.php?memberid=1)をご覧ください。'
  },
  {
    name:'大橋　悦夫',
    userid:'ohashi',
    twitterid:'shigotano',
    frequency:1,
    blogTitle:'SOHO考流記',
    description:'ソフトハウス、マーケティングハウスを経て独立、サイバーローグ研究所を設立。現在はSOHOの形態でWebサイト構築・運営、システム開発、各種執筆に従事。'
  },
  {
    name:'宮原　徹',
    userid:'miyahara',
    twitterid:'tmiyahar',
    frequency:1,
    blogTitle:'オープンでいこう',
    description:'日本オラクル株式会社でデータベース製品およびインターネット製品のマーケティングに従事。特に、日本オラクルのWebサイト立ち上げ、および「Oracle 8 for Linux」のマーケティング活動にて活躍。株式会社デジタルデザイン東京支社支社長兼株式会社アクアリウムコンピューター代表取締役社長を経て、2001年株式会社びぎねっとを設立。現在の主な仕事はエンジニア教育と雑誌、書籍、Webなどへの執筆、セミナー講師など。ライフワークとして、オープンソースの普及促進のために東奔西走する毎日を送ってる。'
  },
  {
    name:'太木　裕子',
    userid:'ooki',
    twitterid:'blacky_tw',
    frequency:1,
    blogTitle:'幸せはどこにある？',
    description:'1989年にデザイナーからMacintoshのトレーナーというとんでもない転職を果たし、現在まで16年間トレーニング業務に携わる。MacintoshだけでなくWindowsを使ったトレーニングやデザイン関連のトレーニングなど様々なトレーニングを担当する。'
  },
  {
    name:'金山　めぐみ',
    userid:'kanayama',
    twitterid:'megumilkchoco',
    blogTitle:'Megumilkめもりー',
    frequency:1,
    description:'某SierでLinux＋Oracleセールスエンジニアを3年、その後Linuxとオープンソースの事業企画を2年経験。ＩＴベンチャーでネット広告事業部長を経験。（２年強）現在、（株）ラグジュアリーアロマ（http://www.luxuryaroma.jp)を設立しお肌に塗れるマッサージキャンドルに没頭中'
  },
  {
    name:'金澤　創平',
    userid:'kanazawa',
    twitterid:null,
    blogTitle:'20歳からのキャリア考',
    frequency:1,
    description:'2003年苫小牧高専情報工学科卒。独立系SIer、ネットベンチャーを経て、現在楽天株式会社で海外向けサービスの開発に携わる。インターネットは好きだが、開発するならWindowsやMac向けのデスクトップアプリケーションの方が好き。趣味はピアノで外国製のピアノを買ってしまったほど。'
  },
  {
    name:'上原　仁',
    userid:'uehara',
    twitterid:'ueharajin',
    blogTitle:'どこでもドアを創りたい',
    frequency:3,
    description:'株式会社マイネット・ジャパン代表取締役社長。専門はWeb2.0領域のマーケティング。06年7月に起業。ブロガーのためのオフラインイベント『RTCカンファレンス』を主宰。著書に『アルファブロガー』（翔泳社）。'
  },
  {
    name:'大谷　弘喜',
    userid:'ootani',
    twitterid:'liris',
    frequency:1,
    blogTitle:'踊るプログラマ物語',
    description:'アリエル・ネットワーク(http://www.ariel-networks.com)で開発エンジニア兼雑用係。またの名を「liris]（バンド名でも雑貨屋でもないです）と呼ぶらしい。'
  },
  {
    name:'美谷　広海',
    userid:'mitani',
    twitterid:'hiroumi',
    frequency:1,
    blogTitle:'世界を巡るFool on the web',
    description:'プランナー。ゲーム、モバイルを経て、Web2のサービスや事業企画を行う。国内案件だけではなく、海外案件にも多く携わる。'
  },
  {
    name:'日比　知子',
    userid:'hibi',
    twitterid:'satoko',
    blogTitle:'家で働くママ日記',
    frequency:2,
    description:'SI系企業で研究部門・パッケージ部門に従事。その後派遣で大手製造業のプロジェクター用マニュアル作成部門に1年冒険。2年ほど前にまたIT系に戻る。現在は2歳児の女の子を育てながら、サービスの開発・企画をやっています。'
  }
];

var value = myApps._.chain(bloggers)
    .sortBy(function(item) {return item.frequency; })
    .value();

var exports = {
  data:value
};

