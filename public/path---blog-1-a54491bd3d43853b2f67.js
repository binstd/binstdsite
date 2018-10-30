webpackJsonp([0xa1ae2709718c],{442:function(n,o){n.exports={data:{markdownRemark:{html:'<h3><strong>一.简单说下货币&#x26;积分</strong></h3>\n<h6><strong>原始：黄金白银 贝壳</strong></h6>\n<p>最早时期，交通不发达，内陆地区使用沿海才有的贝壳做为交换媒介，去换取物品，得到贝壳的人又用它去换取其他物品。后来交通发达后，人们可以轻易获得贝壳，于是贝壳不在做为货币（货币的总量是否要优先，是否要防范增发？）\n为什么不是铜铁，木头？而是黄金，白银，和稀缺是不是有关系。因为稀缺所有值钱，因为之前，所以不需要太多黄金，就可以换取大部分物品。</p>\n<h6><strong>山西票号</strong></h6>\n<p>清明晚期，晋商遍布各地做生意，甚至生意做到海外，由于地域广，商人携带大量黄金白银有些不方便和不安全。山西票号适应了这个需求，它在各地建立票号，商户去票号保存银子，会得到一个票据，凭借票据可以异地提取。大大降低了商人出行携带大量银两的安全隐患和运输成本。</p>\n<h6><strong>传统的数据库下的单节点（中心化）-积分</strong></h6>\n<p>互联网重构很多行业，大家日常在使用各种app&#x26;网站时都有一个积分，比如早期的qq币，大家想一下这个东西如何实现？\n<strong>大家大概都能想到一个数据仓库（专业点说叫数据库），记录着：</strong>\n账号信息（用户名，昵称，秘密），你的qq币额度（还有多少qq币），你的消费记录（记录你的币怎么获得的，怎么消费的，你购买了什么东西）\n<strong>这是什么呢，这是一个单节点维持的账本，腾讯这家公司控制的账本，这个账本能否做为货币？</strong></p>\n<h3><strong>二.比特币的诞生</strong></h3>\n<p>2008经济危机背景下，中本聪发表了比特币-点对点的电子支付系统，次年比特币诞生。2009年比特币正式上线。\n并且在创世区块中写入了泰晤士报09年1.3号的头版标题，讽刺了一把银行。\n大家肯定好奇比特币这套系统为什么得到那么多人推崇，为什么可以做到一枚2万美金？</p>\n<p><strong>比特币是如何实现货币功能的？</strong></p>\n<h6>1.多节点维持的账本（数据库）</h6>\n<p>比特币创造了一个没有任何主体控制的系统，上文提到的积分是单个节点说了算，例如q币，就是腾讯说了算的，而比特币有多对等节点。且每个对等节点都有相同的完整的数据库记录或者说账本。\n<strong>先看一下这个图，理解一下什么叫对等的节点，没有控制者：</strong></p>\n<p><img src="https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/qft6j.jpg"></p>\n<p><strong>一个经典问题：拜占庭军事问题，怎么解决这个问题？怎么保证数据一致，又怎么保证鼓励大家做比特币的节点（激励层）？这里先卖个关子，先从单个节点的数据结构上说：</strong></p>\n<h6>2.比特币的单节点的数据结构</h6>\n<p>区块+链，简单说就是一个个区块一环扣一环，链接而成：</p>\n<p><img src="https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/le9ng.jpg"></p>\n<p>听到区块这个词不必紧张，你把它当作一个有固定结构和规范的容器就行，就像一个楼层，一个房间。其中区块这个容器构成：包括区块头，交易记录两部分。\n如图其中区块头中又包含三个部分父区块hash值，merkle树根，挖矿相关的难度值，时间戳等。大家先不用关系他们代表什么，我会在下文一一说明。\n<strong>1.重点说父区块hash：</strong>（大家可以把hash值换成地址方便理解），这个父区块hash值呢，也可以说是上一个区块的hash值或者说地址（方便理解）。它的作用主要就是知道了前一个区块地址，从而连接前一个区块，形成一环扣一环的所谓区块链：</p>\n<p><img src="https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/xewx9.jpg"></p>\n<p>大家看图就会明白，这个一环扣一环既，如果其中一个区块的hash值出现变化，那整个链就断了。而上文提到上一个区块的hash值，那这个hash值是怎么来的呢？其实是对真个区块容器里，装载的所有信息或者说东西做一个运算得来的唯一值（hash运算），也就是说，区块中装载的信息出现改变，hash值一定会改变。从而提高了造假成本。</p>\n<p><strong>接下来说区块头的的第二个信息merkle树根</strong>，这个词很飘，其实它的用途是做一个标记，刚才跟大家介绍了区块分成两个部分，一个区块头&#x26;一个是交易信息。其中交易信息是比特币的所有的转账记录（比特币的一个区块规定了所能装载的交易记录是1m，也就是大约500笔交易。当装满的时候，就会在区块头加上merkle树根信息，做为标识）</p>\n<p><strong>而挖矿相关的信息</strong>，主要是用于生成下一个区块，以及发现该区块，这个知识点下文会说。</p>\n<p>那么之前留下的问题是非可以解答了呢？<strong>即如何没有服务端控制，p2p之间如何协调一致，没有将军，士兵之间如何协调？如何刺激大家做比特币的节点，成为一个p？如何取代央行做货币的发行？</strong></p>\n<h6>3.共识算法：pow&#x26;运行原理</h6>\n<p>比特币的解决办法就是pow共识机制，想了解它，我们先来了解一个古老的问题，<strong>即拜占庭军事问题：</strong>\n讲一个小故事，古时候有一个国家叫拜占庭，他很有钱也很强大，周围有几个小国，他们希望得到拜占庭的财富，但是呢，他们单个国家又无法攻破拜占庭，去攻击拜占庭一定会被消灭，他们之间呢，又各怀鬼胎，企图占领他国。\n唯一能攻破拜占庭的方案就是他们几个国家一起攻击。这里就涉及到一个问题，就是这个几个互不信任的国家，如何同步的问题。</p>\n<p>前面提到比特币是区块+链的结构，且区块头中有父区块的hash值，也就知道了父区块的位置，<strong>然后比特币里有个出块的概念，既每隔一段时间产生一个新区块（空的）</strong>中本聪发明了一个游戏，谁先踩中下一个区块的hash值，就全网停止继续运算，全网也去同步他的区块。并准备猜下一个区块的hash值。\n如何猜中hash值，控制难度呢？由前面提到的区块头的挖矿相关的nonce值，时间戳等控制。</p>\n<p><img src="https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/ez1rn.jpg"></p>\n<p><strong>那么比特币如何鼓励大家成为它的节点呢？</strong>猜出新区块hash值的矿工，可以获得一个叫coinbase交易的奖励，以及转账的手续费奖励。\n<strong>这里就要提到区块结构的第二部分：交易信息（merkle树）</strong>\n首先明确一个概念，比特币是没有账户概念的，所以的额度，都是通过遍历整个的交易信息获取到，并做+-运算的来。\n所以的比特币客户端出了区块链这个库，还有一个交易池的概念，既你的每次转账都会广播全网的所有节点，并将该转账信息加入到他们各种的交易池中，而非直接放到区块链里。\n<strong>如何将交易池中保存的交易记录放到区块链中呢？</strong>\n每次挖出新块后矿工，即将交易数据打包放到到新区块中，其中挖矿获得的奖励和交易手续费也将加入到区块中。直到区块装满（比特币是1m的交易容量），和上文提到的踩中hash后的广播是同一次的。 </p>\n<p><img src="media/15219667839362/15221343606583.jpg">                                                                                  </p>\n<h6>4.<strong>比特币的公钥匙私</strong></h6>\n<p>比特币生成一个私钥，对私钥做算法运算得到公钥。这个运算是有一个固定算法的，所以可以离线生成比特币的私钥。（硬件钱包，纸钱包原理），且不可逆转。\n<img src="https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/939e3.jpg"></p>\n<h6><strong>钱包说明</strong></h6>\n<p>这个私钥是意味着控制权。联想到上面的区块链的交易记录，他会记录转账地址和金额。这个地址就是公钥。所以你可以在任何钱包上使用这个私钥。\n在交易所中，只提供给你币的地址，没有提供私钥。所以你的转账，其实最终的控制是交易所完成的。而非你自己。但是在钱包里就不一样了。</p>\n<p>钱包是不是比特币的节点？不一定，有集成节点的钱包，也有调取的比特币网络节点接口的钱包。</p>\n<h3>附录</h3>\n<h6>名词解释避坑：</h6>\n<p><strong>共识：</strong>\n共识机制的共识是指不同节点直接的数据同步，以及奖励的分配的共识。\n而在民生，在大众认同等问题上也会提到共识。比如比特币靠什么能赢？很多人说共识，其实这个共识的意思是大众的认同，也就是多少人认可你。在区块链项目里，通常有个社区治理的概念，即有多少人支持一个项目，对这个项目生态又有什么意见。往往涉及到投票等。这里大家可以预先查一下，dac，dao这些概念。了解下社区治理。同时后面解释一个项目：比特股也会在探讨他。</p>\n<p><strong>节点：</strong>\n很多资料只会给你解释比特币的区块链里是保存交易记录的。但是没有说明这个交易记录是一种树结构，这种树结构是很多区块链项目都有涉及到的。树就有节点。这里要和区块链网络的节点区分开。</p>\n<h6><strong>课外常识：</strong></h6>\n<p><strong>不要怂，就是干，一把梭</strong>\n对梭的解释：\n早期出现在股票市场里，主要指不管3721，把前投进去就是了。常常被大家用来自嘲。\n<strong>会所嫩模</strong>\n通常是大家对炒币的一种期许，希望币百倍，千倍增长。从而实现财富自由。\n<strong>韭菜</strong>\n一般指散户，在区块链项目上的投资通常就是买项目发行的币。门槛很低，基本什么人都能参与。\n也被用于指不讲技巧的投。比如前面提到的“不要怂，就是干，一把梭”，可用于自嘲，或讽刺他人</p>\n<h6><strong>问题：</strong></h6>\n<p>如何定义区块链？只是比特币的区块+链的结构嘛？如果没有对等的节点呢？\n如果没有p2p分散的节点，或者有人占据了大部分节点，是否能串改数据？区块+链的结构不好改，如果是先搞一个任务池，重构整个区块链呢？也就是一次升级的是吧。</p>\n<p>区块链还能干做什么？只是做币嘛？没有别的用途嘛？这里先卖个关子。比特币只是一个功能机，后面会讲到一个项目，它把比特币创造的区块链的智能机时代。赋予区块链更多的想象力。</p>',frontmatter:{date:"July 12, 2017",path:"/blog1",title:"比特币的诞生和区块链"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-1-a54491bd3d43853b2f67.js.map