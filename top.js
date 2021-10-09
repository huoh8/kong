var topgg = {

    top1: [
        {
            url: 'https://www.hdsko.com/136',
            text: '青青草视频',
            img: 'https://hd.cdn8-video.com/asdfghfdsa.gif',
            description:'绿帽淫妻，内射中出',
            hits:'6955'
        },
        {
            url: 'https://cpa4621.iqy24yt.com',
            text: '私密直播',
            img: 'https://hd.cdn8-video.com/dsfdafdh.gif',
            description:'私密直播',
            hits:'6455'
        },
        {
            url: 'http://mdabc05.com/?dc=xza00206',
            text: '麻豆视频',
            img: 'https://hd.cdn8-video.com/efwefw.gif',
            description:'台湾麻豆高清视频',
            hits:'6955'
        },
        {
            url: 'https://a.yy678.info/?_c=xcs',
            text: 'YY视频',
            img: 'https://hd.cdn8-video.com/asfeytjuk.gif',
            description:'YY视频，国产短视频应有尽有',
            hits:'6955'
        },
        {
            url: 'http://blabc02.com/?dc=bxza7602',
            text: '逼哩逼哩',
            img: 'https://hd.cdn8-video.com/dsfdafdh.gif',
            description:'熟女少妇，探花视频',
            hits:'6955'
        },
        {
            url: 'https://tm10ji.com/5mb3iP.html?code=8K7X3',
            text: '春水堂',
            img: 'https://hd.cdn8-video.com/sdgfdswe.gif',
            description:'啪啪视频，免费福利',
            hits:'6955'
        },
        {
            url: 'https://mtav23.com?dc=ma294',
            text: '蜜桃影像传媒',
            img: 'https://hd.cdn8-video.com/asfashtrure.gif',
            description:'无套内射诱惑做爱',
            hits:'6955'
        },
        {
            url: 'https://web.jianzhifind.com/?channelCode=JY94',
            text: '91视频',
            img: 'https://hd.cdn8-video.com/gffjsdfgsj.gif',
            description:'强奸乱伦丝袜诱惑',
            hits:'6955'
        },



    ],
    top2: [
        // {
        //     url: 'https://dfg22.xyz/?channelCode=zhou1',
        //     text: '制服诱惑',
        //     img: 'https://hd.cdn8-video.com/fdghjhgf.gif'
        // },
        
        
        
    ],
    top3: [
        // {
        //     url: 'https://dfg22.xyz/?channelCode=zhou1',
        //     text: '护士裸聊',
        //     img: 'https://hd.cdn8-video.com/dhjgkjjhs.gif'
        // },
         
    ]
}

var banner = [

]
var bottom = [
    // {
    //     url: '#',
    //     text1: '广告招租',
    //     text2: '广告招租',
    //     img: 'https://i.ibb.co/DkR3qVH/default.png',
    //     number: getRandomInt(1500, 2000)
    // },
    // {
    //     url: 'https://dfg22.xyz/?channelCode=zhou1',
    //     text1: '高潮喷水',
    //     text2: '上万免费直播间任你挑选,主播可约',
    //     img: 'https://hd.cdn8-video.com/fjfkjgkhl.gif',
    //     number: getRandomInt(1500, 2000)
    // },
    
]

for (let index = 1; index < 4; index++) {
    name = 'top'+ index;
    renderTop(topgg, name)
}

var str_html=''
banner.forEach(element => {
    str_html += '<div class="need_grid_img" onclick="window.open(\''+element.url+'\', \'_blank\')" style=" background: url('+element.img+')  no-repeat 50% 50% #f2f2f2; background-size: cover;"> </div>';
});
$('#slider_app .swiper-wrapper').append(str_html);

var str_html_bottom =''
bottom.forEach(element => {
    str_html_bottom += '<a href="javascript:void(0);" title="'+element.text1+'" class="item-wrap">'+
    '  <div class="img-wrap" onclick="window.open(\''+element.url+'\',\'_blank\')"> <img src="'+element.img+'" alt="'+element.text1+'" title="'+element.text1+'"> </div>'+
    '  <div class="content">'+
    '    <div class="row1">'+
    '      <div class="col-left">'+
    '        <div class="name" onclick="window.open(\''+element.url+'\',\'_blank\')"> '+element.text1+' <span class="tj-wrap">推荐</span> </div>'+
    '        <div class="count"> '+element.number+' 万次进入     </div>'+
    '      </div>'+
    '      <div class="btn-wrap btn-download" data-ioslink="'+element.url+'" data-androidlink="'+element.url+'"> <img src="static/picture/gl.gif" alt=""> 进入 </div>'+
    '    </div>'+
    '    <div class="desc">'+element.text2+'</div>'+
    '  </div>'+
    '</a>';
});
$('#bottom').append(str_html_bottom);

function renderTop(top, name) {
    var str_html = ''
    var arr = top[name]
    arr.forEach(element => {
        str_html +='<div class="item tline">'+
            '<div class="left icon">'+
                '<img src="'+element.img+'">'+
            '</div>'+
            '<div class="middle">'+
                '<p class="title">'+element.text+'</p>'+
                '<p class="description">'+element.description+'</p>'+
            '</div>'+
            '<div class="right">'+
                '<p class="title">下载:<span>'+element.hits+'</span></p>'+
                '<p class="platform">'+
                    '<a  href="'+element.url +'" target="_blank" class="download-btn">立即下载</a>'+
                '</p>'+
            '</div>'+
        '</div>';

    });
    $(document).ready(function(){
        $('#'+name).append(str_html);
    });
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
