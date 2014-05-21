
$(function() {

  AV.$ = jQuery;

  // Initialize AV with your AV application javascript keys
  AV.initialize("b80vxtiies9hcksry7yzbhs86eg26kfg1s8t8r6qkeoznei4",
                   "ac5ixtg977cmkcc85f23rv302y4ouj5fgtk27mhb8oajtp9x");



  var Book = AV.Object.extend("Book");

  // //插入一个例子数据
  // var book = new Book();
  // book.set("title","高等数学");
  // book.set("wuliao","12345-00");
  // book.set("author","张三");

  // book.save();

  var query = new AV.Query(Book);


	query.find({
  		success: function(list) {
    	
    	// list books
    	 for (var i = 0; i < list.length; i++) {
     		 var object = list[i];

     		 $("#list").append('<tr><td>'+object.get('title')+'</td><td>'+object.get('wuliao')+'</td><td>'+object.get('author')+'</td></tr>');

//    	 	 alert(object.id + ' - ' + object.get('title') + object.get('wuliao'));

  	  	}
 	 }
	});



});