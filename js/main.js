// 搜索功能
function searchGuides() {
  var q = document.getElementById('searchBox').value.toLowerCase();
  var results = document.getElementById('searchResults');
  var guides = [
    {title:'新手入门全流程', url:'guides/newbie.html', kw:'新手 入门 开局 选车'},
    {title:'2026最新赚钱攻略', url:'guides/money.html', kw:'赚钱 刷钱 拍卖行 快速'},
    {title:'全级别最强车辆推荐', url:'guides/cars.html', kw:'车辆 最强 推荐 d级 c级 b级 a级 s1 s2 x'},
    {title:'终极调校参数', url:'guides/tuning.html', kw:'调校 漂移 极速 操控 参数'},
    {title:'季节赛全通攻略', url:'guides/season.html', kw:'季节赛 奖励车'},
    {title:'隐藏车辆 & 车房宝物', url:'guides/hidden.html', kw:'隐藏 车房宝物 地图'},
    {title:'AI调校计算器', url:'tools/tune.html', kw:'调校 计算器 ai'},
    {title:'车辆对比器', url:'tools/compare.html', kw:'对比 比较'},
    {title:'赛道难度评级', url:'tools/track.html', kw:'赛道'},
    {title:'拍卖行估价器', url:'tools/auction.html', kw:'拍卖行 估价'},
  ];
  
  if (q.length < 1) { results.style.display='none'; return; }
  
  var html = '';
  for (var i=0; i<guides.length; i++) {
    if (guides[i].kw.indexOf(q) >= 0 || guides[i].title.indexOf(q) >= 0) {
      html += '<a href="'+guides[i].url+'">🔍 '+guides[i].title+'</a>';
    }
  }
  if (html === '') html = '<a href="#" style="color:#888">没有找到，试试其他关键词？</a>';
  results.innerHTML = html;
  results.style.display = 'block';
}

// 付费弹窗
function showPay() { document.getElementById('payModal').style.display='flex'; }
function closePay() { document.getElementById('payModal').style.display='none'; }
function openMianbaoduo() { alert('请先替换为你的面包多支付链接！'); }

// 点击空白关闭
document.addEventListener('click', function(e) {
  if (!e.target.closest('.hero-search')) {
    document.getElementById('searchResults').style.display = 'none';
  }
});
