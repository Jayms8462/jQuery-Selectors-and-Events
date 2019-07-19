'use strict';



//create MyHorn object by passing an object
function MyHorn(horn){
  this.image_url=horn.image_url;
  this.title=horn.title;
  this.description=horn.description;
  this.keyword=horn.keyword;
  this.horns=horn.horns;
  loadOptions(this.keyword);
}

//an array to hold all the MyHorn
MyHorn.allMyHorn=[];

MyHorn.prototype.render=function(){

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

// MyHorn.prototype.tohtml=function(){
//   let $target=$('#handlebar').html();
//   let $source=Handlebars.compile($target);
//   return $source(this);
// };

MyHorn.readJson=(filename)=>{

  $.get(filename,'json')

    .then(data=>{

      data.forEach(horn=>{
        MyHorn.allMyHorn.push(new MyHorn(horn));
      });
    })
    // DOM
    .then(MyHorn.loadMyHorn)
    .then(MyHorn.imgselect)

};

MyHorn.loadMyHorn=()=>MyHorn.allMyHorn.forEach(horn=> horn.render());

function loadOptions(arr) {
  // $('option').append('<option>test</option>');
  console.log(arr);
}

// MyHorn.loadMyHorn=()=>
//   MyHorn.allMyHorn.forEach(horn=>{$('#photo-template').append(horn.tohtml());});




// $('#one').on('click',function(){
//   $('div').remove();
//   //clear the dropdown list
//   $('option').remove();
//   MyHorn.allMyHorn=[];

//   //load the page
//   $(()=>MyHorn.readJson('data/page-1.json'));
// });



$(()=>MyHorn.readJson('data/page-1.json'));
