# -*- coding: utf-8 -*-
module Unicode
  def escape(str)
    ary = str.unpack("U*").map!{|i| "\\u#{i.to_s(16)}"}
    ary.join
  end

  UNESCAPE_WORKER_ARRAY = []
  def unescape(str)
    str.gsub(/\\u([0-9a-f]{4})/) {
      UNESCAPE_WORKER_ARRAY[0] = $1.hex
      UNESCAPE_WORKER_ARRAY.pack("U")
    }
  end

  module_function :escape, :unescape
end

require "kconv"
require "json/pure"
utf8_string = "<p>　まだ、ネットバブルがはじける前のことだ。喫茶店で休んでいたら、たま々、隣の席に座っていたカップルの声が聞こえた。</p>\n\n<p>男:「インターネットで自作のポストカードを売るビジネス立ち上げようと思ってるいるんだ」<br>\n女:「だけど、そんなんじゃ売れないんじゃないの?」<br>\n男:「大丈夫、広告を貼ってそれでもうけるから」</p>\n\n<p>　この会話を聞いて、みなさんはどのように思うだろうか?　もしかしたら失笑してしまう人もいるかもしれない。ただ、私は「Web2.0」を語っている人の中には、このカップルとほとんど同じ事を言っている人も多いと考えている。</p>\n\n<p>　最近Web2.0という概念（というより言葉）が流行している。Web2.0の厳密の意味はまだ決まっていない、また各人によって持っているWeb2.0感も違うため、イメージする物は多少違うところもあると思うが、私が見ているところだと、いわゆる「Web2.0的」なサービスのほとんどは、広告モデルだ。現在のところ広告モデルは絶好調のようで、これがそのまま続くような感じに思えるかもしれない。</p>\n\n<p>　しかし、インターネットでもちょっと前（冒頭のカップルが話していた時期）に、現在のような広告ブームが起こっており、広告によって全てが無料のサービスになると思われていた時期があった。しかし、そのブームはすぐに収束してしまった、翌年には<a href=\"http://japan.internet.com/busnews/20011212/12.html\" title=\"Japan.internet.com Webビジネス - 相次ぐ無料サービスの廃止・有料化\">無料サービスの廃止・有料化</a>が相次いでいる。</p>\n\n<p>　現在のWeb2.0ブームがいつまで続くかわからないが、インターネットのトレンドもクルクルと変る、決してWeb2.0は未来永劫の物では無い。特にWeb2.0を「広告による無料化」と見ている人は、注意が必要だろと思う。<a href=\"http://japan.cnet.com/news/biz/story/0,2000050156,20097437,00.htm\" title=\"グーグルCFO、成長鈍化を示唆 - CNET Japan\">グーグルですらオンライン広告の成長鈍化を警戒しているのだから…</a></p>".toutf8
escape_string = Unicode.escape(utf8_string)
# puts escape_string
puts JSON.utf8_to_json_ascii(utf8_string)

