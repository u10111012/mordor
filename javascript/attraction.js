$(document).ready(function(){
  $.ajax({
    url:'https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$top=100&$format=JSON',
    type:'GET',
    datatype:'json',
    success:function(data){
      const regionSearch = document.querySelector('.regionSearch');
      const priceSearch = document.querySelector('.priceSearch');
      const textSearch = document.querySelector('.textSearch');
      const ticketCard = document.querySelector('.ticketCard-area');

      function render() {
  let str = '';

  data.forEach((item) => {
    if(item.Description == undefined){
      return item.Description ;
    };
    if(item.Picture.PictureUrl1 === undefined){
      return item.Picture.PictureUrl1 = 'http://fakeimg.pl/300x250'
    };
    str += `<li class="ticketCard">
        <div class="ticketCard-img">
          <a href="#">
            <img src="${item.Picture.PictureUrl1}" alt="">
          </a>
          <div class="ticketCard-region">${item.Class}</div>
          <div class="ticketCard-rank">10</div>
        </div>
        <div class="ticketCard-content">
          <div>
            <h3>
              <a href="#" class="ticketCard-name">${item.Name}</a>
            </h3>
            <p class="ticketCard-description">
              ${item.Description}
            </p>
          </div>
          <div class="ticketCard-info">
            <p class="ticketCard-num">
              <span><i class="fas fa-exclamation-circle"></i></span>
              電話:<span id="ticketCard-num"> ${item.Phone} </span> 
            </p>
            <p class="ticketCard-price">
              地址:<span id="ticketCard-price"> ${item.Address}</span>
            </p>
          </div>
        </div>
      </li>`;
  })
  ticketCard.innerHTML = str;
}

render();

  function regionFilter() {
  let region = {};
  region = new Set(data.map((item) => item.Class));

  let str = `<option value="類型搜尋" disabled selected hidden>類型搜尋</option>
  <option value="">類型</option>`;

  region.forEach((item) => {
    str += `
    <option value="${item}" class="regionOption">${item}</option>`
  })
  regionSearch.innerHTML = str;

}
regionFilter();

  regionSearch.addEventListener('change', function (e) {
  const Class = e.target.value;
  if (Class === '') {
    data = data;
  } else {
    data = data.filter((item) => item.Class === Class);
  }
  render();
})

  function priceFilter() {
  let price = {};
  price = new Set(data.map((item) => {
    let str = item.Address;
    let word = str.substring(0,3)
    return word
    console.log(word)
  }));

  let str = `<option value="地區搜尋" disabled selected hidden>地區搜尋</option>
  <option value="">全部地區</option>`;

  price.forEach((item) => {
    str += `
    <option value="${item}" class="regionOption">${item}</option>`
  })
  priceSearch.innerHTML = str;

}
priceFilter();

priceSearch.addEventListener('change', function (e) {
  const Address = e.target.value;
  if (Address === '') {
    // 全部地區
    data = data;
  } else {
    data = data.filter((item) => item.Address.substring(0,3) === Address);
  }
  render();
})

  },
    error:function(xhr){
      console.log(xhr);
    }
  });
});


