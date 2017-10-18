const requests = require('request');
var url = "http://104.211.187.242:8080/";
var exp=/p([0-9]+)/;
var inusername="";
var verfication = false;
var inpassword="";
var apiai = require('apiai');
var app = apiai("6ad2372e48934f02b72192b57965b135");
var verifier = apiai("0d5716f315b34f8ba2cefbec75bd21dc")
var prevlog = "";
var prevcontext = "";
var previntent = "";
var msgusr = "";
var isku = "";
var rsku = "";
var pricesku = "";
var verifymessage = "";
var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 9998})
  , userchat,userend;
    wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send(data);
 });
};
  console.log('Server Running');
  wss.on('connection', function(ws) {
  //CLIENTS.push(ws);
    console.log("Someone Connected");
    ws.on('message', function(message) {
        console.log("Someone Messaged");
        console.log("Message is:"+message);
        var parsed = JSON.parse(message);
        var sendObject1 = {action:"loginpage",message:url+"fugeRohPortal/login"};
        var sendObject2 = {action:"login",message:"login"};
        var sendObject3 = {action:"management",message:url+"fugeRohPortal/productPriceList"};
        //http://104.211.187.242:8080/fugeRohPortal/editProduct?code=p004
        var sendObject4 = {action:"update",message:url+"fugeRohPortal/editProduct?code=p004"};
        var sendObject5 = {action:"uploadsingle",message:url+"fugeRohPortal/createProduct"};
        var sendObject6 = {action:"categoryselectcloth",message:url+"fugeRohPortal/createProduct"};
        var sendObject7 = {action:"categoryselectelectronics",message:url+"fugeRohPortal/createProduct"};
        var sendObject8 = {action:"skucode",message:"createProduct"};
        var sendObject9 = {action:"brandname",message:""};
        var sendObject10 = {action:"usernameinput",message:""};
        var sendObject11 = {action:"passwordinput",message:""};
        var sendObject12 = {action:"loginconfirm",message:""};
        var sendObject13 = {action:"profilepage",message:url+"fugeRohPortal/userInfo"};
        var sendObject14 = {action:"homepage",message:url+"fugeRohPortal/home"};
        var sendObject15 = {action:"skunumber",message:""};
        var sendObject16 = {action:"color",message:""};
        var sendObject17 = {action:"size",message:""};
        var sendObject18 = {action:"price",message:""};
        var sendObject19 = {action:"title",message:""};
        var sendObject20 = {action:"description",message:""};
        var sendObject21 = {action:"quantity",message:""};
        var sendObject22 = {action:"uploadconfirm",message:""};
        var sendObject23 = {action:"orderpage",message:url+"fugeRohPortal/orderList"};
        var sendObject24 = {action:"logoutpage",message:url+"fugeRohPortal/logout"};
        var sendObject25 = {action:"productpage",message:url+"fugeRohPortal/productList"};
        var sendObject26 = {action:"pricepage",message:url+"fugeRohPortal/productPriceList"};
        var sendObject27 = {action:"inventorypage",message:url+"fugeRohPortal/inventoryList"};
        var sendObject28 = {action:"subcategoryselectmen",message:url+"fugeRohPortal/createProduct"};
        var sendObject29 = {action:"subcategoryselectwomen",message:url+"fugeRohPortal/createProduct"};
        var exp=/p([0-9]+)/;
        var skus = [];
        //ws.send(JSON.stringify(sendObject)); 
        if(parsed.type=="changer")
        {
        userend=ws;
        console.log("got userend");
        //username[j++] = parsed.userName;
        //userchat.send(JSON.stringify(sendObject));
        }
        else{   
                  //verfication = verifyintent(parsed.message);  
                  //function testverify()
                  //{
                    
                    //console.log("Verification for "+parsed.message+"is "+verfication);
                  //verifymessage=parsed.message;   
                //}
                //setTimeout(testverify,3000);
                  //verifyintent();
                  //console.log("Consoling : "+verifyintent(parsed.message)+" and message is"+parsed.message);
                  userchat=ws;
                  verifyintent(parsed.message);
                  //console.log("Got Context");
                  // if(verifyintent(parsed.message)==1)
                  // {
                  //   console.log("Got Positive Response");
                  // }
                  // else if(verifyintent(parsed.message)==0)
                  // {
                  //   console.log("Got Negative Response");
                  // }
                  function staticalls()
                  {
                  if(previntent=="goto-login")
                  {
                    sendObject10.message=parsed.message;
                    userend.send(JSON.stringify(sendObject10));
                    inusername=parsed.message;
                    parsed.message="username is "+inusername;
                    setTimeout(apiairequest,1000);
                    //apiairequest();
                  }
                  else if(previntent=="input-username")
                  {
                    sendObject11.message=parsed.message;
                    userend.send(JSON.stringify(sendObject11));
                    inpassword=parsed.message;
                    parsed.message="password is "+inpassword;
                    setTimeout(apiairequest,1000);
                    //apiairequest();
                  }
                  else if(previntent=="size")
                  {
                    sendObject19.message=parsed.message;
                    var titleinput = parsed.message;
                    userend.send(JSON.stringify(sendObject19));
                    parsed.message="title is "+titleinput;
                    setTimeout(apiairequest,1000);
                    //apiairequest();
                  }

                  else if(previntent=="price-sku")
                  {
                    //sendObject19.message=parsed.message;
                    var priceinput = parsed.message;
                    //userend.send(JSON.stringify(sendObject19));
                    parsed.message="price is "+priceinput;
                    setTimeout(apiairequest,1000);
                    //apiairequest();
                  }
                  else if(previntent=="Change")
                  {
                    //sendObject19.message=parsed.message;
                    var quantityinput = parsed.message;
                    //userend.send(JSON.stringify(sendObject19));
                    parsed.message="quantity is "+quantityinput;
                    setTimeout(apiairequest,1000);
                    //apiairequest();
                  }
                  else if(previntent=="quantity")
                  {
                    //sendObject19.message=parsed.message;
                    var brandinput = parsed.message;
                    //userend.send(JSON.stringify(sendObject19));
                    parsed.message="brand is "+brandinput;
                    setTimeout(apiairequest,1000);
                    //apiairequest();
                  }
                  else if(previntent=="black")
                  {
                    sendObject18.message=parsed.message;
                    var priceinput = parsed.message;
                    userend.send(JSON.stringify(sendObject18));
                    parsed.message="price is "+priceinput;
                    setTimeout(apiairequest,1000);
                    //apiairequest();
                  }
                  else if(previntent=="price")
                  {
                    sendObject17.message=parsed.message;
                    var sizeinput = parsed.message;
                    userend.send(JSON.stringify(sendObject17));
                    parsed.message="size is "+sizeinput;
                    setTimeout(apiairequest,1000);
                    //apiairequest();
                  }
                  else if(previntent=="title for product")
                  {
                    sendObject20.message=parsed.message;
                    var desinput = parsed.message;
                    userend.send(JSON.stringify(sendObject20));
                    parsed.message="description is "+desinput;
                    setTimeout(apiairequest,1000);
                    //apiairequest();
                  }
                  else if(previntent=="description")
                    {
                    sendObject21.message=parsed.message;
                    var quantityinput = parsed.message;
                    userend.send(JSON.stringify(sendObject21));
                    parsed.message="quantity is "+quantityinput;
                    setTimeout(apiairequest,1000);
                    //apiairequest();
                  }
                  else if(parsed.message)
                    {
                      msgusr = parsed.message;
                      var skudetect = msgusr.match(exp);
                      if(skudetect!=null)
                      {
                        console.log("SKU Detected!");
                        console.log("Got SKU and Inside ApiAI:"+parsed.message);
                      parsed.message = "sku "+msgusr;
                      }
                      apiairequest();
                    }
                }
                  // else if(skudetect!=null)
                  // {
                  //   parsed.message="sku is";
                  //   apiairequest();
                  // }
                    //verifyintent(parsed.message);
                    
                  
        };
        function verifyintent(input_message)
        {
            console.log("Inside Verifier");
            console.log("Query is :"+input_message);
            var request = verifier.textRequest(input_message, {
            sessionId: '0d5716f315b34f8ba2cefbec75bd21dc'
          });
          request.on('response', function(response) {
          //parseInt(response.status.code)==200;
          console.log("Got Response in Verifier");
          console.log(response);
          
          //var trimmed=intent.trim();
          //var tocompare=trimmed.toLowerCase();
          console.log("TrimmedtoloW");
          if(response.status.code=="200")
        {
          var intent = response.result.metadata.intentName;
          console.log("In Verifier we got Intent"+intent);
          if(intent.trim()=="Default Fallback Intent")
            {
              console.log("Inside 1");
              staticalls();
              return true;
            }
            else
            {
              
                      // console.log("Inside ApiAI:"+parsed.message);
                      // if(verifyintent(parsed.message)==1)
                      // {
                      //   console.log("Got Success in Verifier");
                      // }
                      // else if(verifyintent(parsed.message)==0)
                      // {
                      //   console.log("Got Response in verifier");
                      // }
                      apiairequest();
                      
              console.log("Inside 0");
            return false;
          }
        }
        }); 
        request.on('error', function(error) {
        console.log("Got Error in Verifier");
        console.log(error);
        return 0;
});
 
request.end();
      }
        function apiairequest()
        {
          prevlog = parsed.message;
          var request = app.textRequest(parsed.message, {
          sessionId: '6ad2372e48934f02b72192b57965b135'
        });
 
        request.on('response', function(response) {
        console.log(response);
        prevcontext = response.result.contexts["name"];
        previntent = response.result.metadata.intentName;
        console.log("Got Context:"+prevcontext);
        console.log("Got Intent:"+previntent);
        if(response.status.code=="200")
        {
            var intent = response.result.metadata.intentName;
            if(intent!="Default Fallback Intent")
            {
                if(intent=="Single Product Upload")
                {
                       console.log("Single Product Upload");
                       userend.send(JSON.stringify(sendObject5));
                       var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                       //toSend.message="\<button\>Clothing\<\/button\>\<button\>Electronics\<\/button\>";
                       //userchat.send(JSON.stringify(toSend));
                }
                else if(intent=="Profile Page")
                {
                       console.log("Going to the Profile Page!");
                       userend.send(JSON.stringify(sendObject13));
                       var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                       //toSend.message="\<button\>Clothing\<\/button\>\<button\>Electronics\<\/button\>";
                       //userchat.send(JSON.stringify(toSend));
                }
                else if(intent=="Clothes- Product")
                {
                       console.log("Got Clothes");
                       userend.send(JSON.stringify(sendObject6));
                       var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                }
                else if(intent=="Men Clothing")
                {
                       console.log("Got MenClothes");
                       userend.send(JSON.stringify(sendObject28));
                       var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                }
                else if(intent=="Women Clothing")
                {
                       console.log("Got WomenClothes");
                       userend.send(JSON.stringify(sendObject29));
                       var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                }
                else if(intent=="Electronics - Product")
                {
                      console.log("Got Electronics");
                      userend.send(JSON.stringify(sendObject7));
                       //userend.send(JSON.stringify(sendObject5));
                       var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                       //toSend.message="\<button\>Clothing\<\/button\>\<button\>Electronics\<\/button\>";
                       //userchat.send(JSON.stringify(toSend));
                }
                else if(intent=="goto-login")
                {
                      console.log("Got goto Login!");
                      userend.send(JSON.stringify(sendObject1));
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                }
                else if(intent=="goto-home")
                {
                      console.log("Going to HomePage!");
                      userend.send(JSON.stringify(sendObject14));
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                }
                else if(intent=="price-page")
                {
                      console.log("Going to PricePage!");
                      userend.send(JSON.stringify(sendObject26));
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                }
                else if(intent=="edit-price")
                {
                      console.log("Going to PricePage!");
                      userend.send(JSON.stringify(sendObject26));
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                }
                else if(intent=="price-sku")
                {
                      console.log("Got price sku");
                      var psku=prevlog.match(exp);
                      pricesku=psku[0];
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       
                       //requests
                       userchat.send(JSON.stringify(toSend));

                }
                else if(intent=="price-price")
                {
                      console.log("Got Product Price");
                      var wordsplit = prevlog.split(' ');
                      var searchi=0;
                      var usernameindex;
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                      while(searchi<wordsplit.length)
                      {
                        if(wordsplit[searchi]=="is")
                        {
                            usernameindex = ++searchi;
                        }
                        else
                        {
                          searchi++;
                        }
                      }
                      console.log("quantity is :"+wordsplit[usernameindex]);
                      var posturl = "http://104.211.187.242:8080/fugeRohPortal/rest/price/";
                       var postdata = {
                        "code" : pricesku,
                        "price" : wordsplit[usernameindex]
                       };
                       requests.post(posturl,{json:postdata}, (err, res, body) => {
                        console.log("Inside POST");
                        console.log("Input Data is :"+postdata.code+"And"+postdata.qty);
                        if (err) { return console.log(err); }
                          console.log(res.body);
                      });
                      userend.send(JSON.stringify(sendObject27));
                }
                else if(intent=="inventory-page")
                {
                      console.log("Going to InventoryPage!");

                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       var geturl = 'http://104.211.187.242:8080/fugeRohPortal/rest/enquire/inventory/'+inusername;
                       console.log(geturl);
                       requests.get(geturl, { json: false }, (err, res, body) => {
                        if (err) { return console.log(err); }
                          //console.log(body.url);
                          //console.log(body.explanation);
                          //console.log(res);
                          //console.log("Body is");
                          //console.log(body);
                          //console.log("Response is")
                          var jsonobj = JSON.parse(res.body);
                          //console.log(jsonobj.sucess);
                          if(jsonobj.sucess==0)
                          {
                            toSend.message="Your Inventory Looks Empty";
                            userchat.send(JSON.stringify(toSend));
                          }
                          else
                          {
                            userchat.send(JSON.stringify(toSend));
                            userend.send(JSON.stringify(sendObject27));
                          }
                          //console.log(res.body.inventory_count);
                          //console.log(res.body["sucess"]);
                        });
                       
                }
                else if(intent=="Edit Inventory")
                {
                      console.log("Got Edit InvenTory!");
                      userend.send(JSON.stringify(sendObject27));
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       //requests
                       userchat.send(JSON.stringify(toSend));
                       userend.send(JSON.stringify(sendObject27));
                }
                else if(intent=="Change")
                {
                      console.log("Got inventory sku");
                      var psku=prevlog.match(exp);
                      isku=psku[0];
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       
                       //requests
                       userchat.send(JSON.stringify(toSend));

                }
                else if(intent=="inventory-qty")
                {
                      console.log("Got Inventory Quantity");
                      var wordsplit = prevlog.split(' ');
                      var searchi=0;
                      var usernameindex;
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                      while(searchi<wordsplit.length)
                      {
                        if(wordsplit[searchi]=="is")
                        {
                            usernameindex = ++searchi;
                        }
                        else
                        {
                          searchi++;
                        }
                      }
                      console.log("quantity is :"+wordsplit[usernameindex]);
                      var posturl = "http://104.211.187.242:8080/fugeRohPortal/rest/inventory/";
                       var postdata = {
                        "code" : isku,
                        "qty" : wordsplit[usernameindex]
                       };
                       requests.post(posturl,{json:postdata}, (err, res, body) => {
                        console.log("Inside POST");
                        console.log("Input Data is :"+postdata.code+"And"+postdata.qty);
                        if (err) { return console.log(err); }
                          console.log(res.body);
                      });
                      userend.send(JSON.stringify(sendObject27));
                }
                else if(intent=="order reports")
                {
                      console.log("Going to OrderPage!");
                      userend.send(JSON.stringify(sendObject23));
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                }
                else if(intent=="product-page")
                {
                      console.log("Going to ProductPage!");
                      var geturl = 'http://104.211.187.242:8080/fugeRohPortal/rest/enquire/inventory/'+inusername;
                       console.log(geturl);
                       requests.get(geturl, { json: false }, (err, res, body) => {
                        if (err) { return console.log(err); }
                          //console.log(body.url);
                          //console.log(body.explanation);
                          //console.log(res);
                          //console.log("Body is");
                          //console.log(body);
                          //console.log("Response is")
                          var toSend={
                              message:response.result.fulfillment.speech
                                        };
                          var jsonobj = JSON.parse(res.body);
                          //console.log(jsonobj.sucess);
                          if(jsonobj.sucess==0)
                          {
                            toSend.message="Your Product Page Looks Empty,Do You Want to add a new product? Yes/No.<button class=\"clothing-btn\" data-id=\"product upload\">Yes</button><button class=\"clothing-btn\" data-id=\"No\">No</button>";
                            userchat.send(JSON.stringify(toSend));
                          }
                          else
                          {
                            
                            userchat.send(JSON.stringify(toSend));
                            userend.send(JSON.stringify(sendObject25));
                          }
                          //console.log(res.body.inventory_count);
                          //console.log(res.body["sucess"]);
                        });
                }
                else if(intent=="delete")
                {
                      console.log("Going to Delete from ProductPage!");
                      userend.send(JSON.stringify(sendObject25));
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                }
                else if(intent=="delete-sku")
                {
                      console.log("Got tobedeleted sku");
                      var psku=prevlog.match(exp);
                      rsku=psku[0];
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       var posturl = "http://104.211.187.242:8080/fugeRohPortal/rest/remove/sku";
                       var postdata = {
                        "code" : rsku,
                        "user" : inusername
                       };
                       requests.post(posturl,{json:postdata}, (err, res, body) => {
                        console.log("Inside POST");
                        console.log("Input Data is :"+postdata.code+"And"+postdata.user);
                        if (err) { return console.log(err); }
                          console.log(res.body);
                          //var deleteresponse = JSON.parse(res.body);
                          //console.log(deleteresponse);
                          if(res.body.sucess==1)
                          {
                            toSend.message = "Successfully Deleted It!";
                            userchat.send(JSON.stringify(toSend));
                            userend.send(JSON.stringify(sendObject25));
                          }
                          else
                          {
                            toSend.message = "Failed to Delete!";
                            userchat.send(JSON.stringify(toSend));
                            //userend.send(JSON.stringify(sendObject25));
                          }

                      });
                       //requests
                       //userchat.send(JSON.stringify(toSend));
                       //userend.send(JSON.stringify(sendObject25));
                }
                else if(intent=="logout")
                {
                      console.log("Going to LogOutPage!");
                      userend.send(JSON.stringify(sendObject24));
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                }

                else if(intent=="login-confirm")
                {
                      console.log("Got Login Confirmation.");
                      var posturl = "http://104.211.187.242:8080/fugeRohPortal/rest/enquire/user";
                       var postdata = {
                        "userName" : inusername,
                        "password" : inpassword
                       };
                       requests.post(posturl,{json:postdata}, (err, res, body) => {
                        console.log("Inside POST");
                        console.log("Input Data is :"+postdata.userName+"And"+postdata.password);
                        if (err) { return console.log(err); }
                          console.log(res.body);
                          console.log(res.body.sucess);
                          if(res.body.sucess==1)
                       {
                       var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                     }
                       else
                       {
                        var toSend={
                          message:"The credentials aren't matching!Please redo the Process!"
                        };
                        userchat.send(JSON.stringify(toSend));
                       }
                      });

                      userend.send(JSON.stringify(sendObject12));

                }
                else if(intent=="Confirm upload")
                {
                      console.log("Got Upload Confirmation.");
                      userend.send(JSON.stringify(sendObject22));
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                }
                else if(intent=="SKU Numbers")
                {
                      console.log("Got SKU NUmber");
                      var wordsplit = prevlog.split(' ');
                      console.log("PrevLog is:"+prevlog);
                      var psku=prevlog.match(exp);
                      sendObject15.message=psku[0];
                      userend.send(JSON.stringify(sendObject15));
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                }
                else if(intent=="black")
                {
                      console.log("Got The Color");
                      //var wordsplit = prevlog.split(' ');
                      sendObject16.message=prevlog;
                      userend.send(JSON.stringify(sendObject16));
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                }
                else if(intent=="input-username")
                {
                      console.log("Got Username");
                      var wordsplit = prevlog.split(' ');
                      var searchi=0;
                      var usernameindex;
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                      while(searchi<wordsplit.length)
                      {
                        if(wordsplit[searchi]=="is")
                        {
                            usernameindex = ++searchi;
                        }
                        else
                        {
                          searchi++;
                        }
                      }
                      console.log("username is :"+wordsplit[usernameindex]);
                      inusername = wordsplit[usernameindex];
                      sendObject10.message=wordsplit[usernameindex];
                      userend.send(JSON.stringify(sendObject10));
                }
                else if(intent=="size")
                {
                      console.log("Got Size");
                      var wordsplit = prevlog.split(' ');
                      var searchi=0;
                      var usernameindex;
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                      while(searchi<wordsplit.length)
                      {
                        if(wordsplit[searchi]=="is")
                        {
                            usernameindex = ++searchi;
                        }
                        else
                        {
                          searchi++;
                        }
                      }
                      console.log("size is :"+wordsplit[usernameindex]);
                      sendObject17.message=wordsplit[usernameindex];
                      userend.send(JSON.stringify(sendObject17));
                }
                else if(intent=="description")
                {
                      console.log("Got Description");
                      var wordsplit = prevlog.split(' ');
                      var searchi=0;
                      var usernameindex;
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                      while(searchi<wordsplit.length)
                      {
                        if(wordsplit[searchi]=="is")
                        {
                            usernameindex = ++searchi;
                        }
                        else
                        {
                          searchi++;
                        }
                      }
                      var isposition = prevlog.indexOf("is");
                      var indescription = prevlog.substring(isposition+3);
                      console.log("description is :"+indescription);
                      sendObject20.message=indescription;
                      userend.send(JSON.stringify(sendObject20));
                }
                else if(intent=="quantity")
                {
                      console.log("Got Quantity");
                      var wordsplit = prevlog.split(' ');
                      var searchi=0;
                      var usernameindex;
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                      while(searchi<wordsplit.length)
                      {
                        if(wordsplit[searchi]=="is")
                        {
                            usernameindex = ++searchi;
                        }
                        else
                        {
                          searchi++;
                        }
                      }
                      console.log("quantity is :"+wordsplit[usernameindex]);
                      sendObject21.message=wordsplit[usernameindex];
                      userend.send(JSON.stringify(sendObject21));
                }
                else if(intent=="title for product")
                {
                      var isposition = prevlog.indexOf("is");
                      var intitle = prevlog.substring(isposition+3);
                      console.log("Got Title");
                      var wordsplit = prevlog.split(' ');
                      var searchi=0;
                      var usernameindex;
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                      while(searchi<wordsplit.length)
                      {
                        if(wordsplit[searchi]=="is")
                        {
                            usernameindex = ++searchi;
                        }
                        else
                        {
                          searchi++;
                        }
                      }
                      console.log("title is :"+intitle);
                      sendObject19.message=intitle;
                      userend.send(JSON.stringify(sendObject19));
                }
                else if(intent=="brand")
                {
                      var isposition = prevlog.indexOf("is");
                      var inbrand = prevlog.substring(isposition+3);
                      console.log("Got Brand");
                      var wordsplit = prevlog.split(' ');
                      var searchi=0;
                      var usernameindex;
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                      while(searchi<wordsplit.length)
                      {
                        if(wordsplit[searchi]=="is")
                        {
                            usernameindex = ++searchi;
                        }
                        else
                        {
                          searchi++;
                        }
                      }
                      console.log("brand is :"+inbrand);
                      sendObject9.message=inbrand;
                      userend.send(JSON.stringify(sendObject9));
                }
                else if(intent=="price")
                {
                      console.log("Got Price");
                      var wordsplit = prevlog.split(' ');
                      var searchi=0;
                      var usernameindex;
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                      while(searchi<wordsplit.length)
                      {
                        if(wordsplit[searchi]=="is")
                        {
                            usernameindex = ++searchi;
                        }
                        else
                        {
                          searchi++;
                        }
                      }
                      console.log("price is :"+wordsplit[usernameindex]);
                      sendObject18.message=wordsplit[usernameindex];
                      userend.send(JSON.stringify(sendObject18));
                }
                else if(intent=="input-password")
                {
                      console.log("Got Password");
                      var wordsplit = prevlog.split(' ');
                      var searchi=0;
                      var passwordindex;
                      var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                      while(searchi<wordsplit.length)
                      {
                        if(wordsplit[searchi]=="is")
                        {
                            passwordindex = ++searchi;
                        }
                        else
                        {
                          searchi++;
                        }
                      }
                      console.log("Password is :"+wordsplit[passwordindex]);
                      inpassword = wordsplit[passwordindex];
                      sendObject11.message=wordsplit[passwordindex];
                      userend.send(JSON.stringify(sendObject11));
                }
                else
                {
                  var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
                }
            }
            else
            {
              var toSend={
                        message:response.result.fulfillment.speech
                       };
                       userchat.send(JSON.stringify(toSend));
            }
        }
        });
 
        request.on('error', function(error) {
        console.log(error);
        });
 
        request.end();
    }
    });
    //for (var i=0;i<j;i++)
    //{
      //users[i].send("Individual Hello"+ i +"  ");
    //}
    //ws.send('something');
});