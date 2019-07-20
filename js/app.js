const allHorns = [];
const allKeys = [];

const MyHorns = function(image_url, title, description, keyword, horns){
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  allHorns.push(this);
  allKeys.push(this.keyword);
}

MyHorns.readJson = function(){
  const filePath = 'data/page-1.json';
  const fileType = 'json';
  $.get(filePath, fileType).then(myHornsJson => {
    myHornsJson.forEach(horn => {
      new MyHorns(horn.image_url, horn.title, horn.description, horn.keyword, horn.keyword)
    });
    allHorns.forEach(MyHorn => {
      let keyword = MyHorn.keyword;
      MyHorn.render(keyword);
    });
  });
};

MyHorns.prototype.render = function(keyword) {
  $('select').append($('<option>', {text:keyword}));
  $('main').append('<div class="clone"></div>');
  let hornClone=$('div[class="clone"]');
  let hornHtml=$('#photo-template').html();
  hornClone.html(hornHtml);
  hornClone.find('h2').text(this.title);
  hornClone.find('img').attr('src',this.image_url);
  hornClone.find('p').text(this.description);
  hornClone.find('p').text(this.keyword);
  hornClone.find('p').text(this.MyHorn);
  hornClone.removeClass('clone');
  hornClone.attr('class',this.keyword);
}

MyHorns.readJson();
