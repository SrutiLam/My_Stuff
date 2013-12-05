$(document).ready(function(){        
                
        
                var storageTest = function(){
                        if(typeof localStorage =="undefined")
                                alert("Sorry, your browser does not support web storage...");
                        }
                
                var init = function(){
                        
                        if(!localStorage.index00)
                                localStorage.clear();
                        
                        if(localStorage.length <= 1)
                                        localStorage.index00 = 1;
                                        
                        k = localStorage.index00;        
                }
        
        
                var bindEvents = function(){
                
                                $('.home').on('click',function(){
                                                resetall();
                                 });
                                
                                 $('.add').on('click',function(){
                                                $('.TextBox').show();
                                                $('#list-container').hide();
                                               
                                        });
                               
                                 $('.SaveMe').on('click',function(){
                                        if( $('.input').val() ){        
                                                localStorage.setItem('key'+k, $('.input').val() );
                                                k++;
                                                localStorage.index00 = k;
                                                $('.input').val('');
                                        }
                                                
                                 });
                                
                                 $('#list-container').on('click','.delete',function(){
                                                localStorage.removeItem($(this).attr('id'));
                                                $('#list-container').hide();
                                                
                                                if(k==1 || localStorage.length<=1){
                                                        
                                                }
                                                else
                                                        loadList();
                                                
                                        //        k--;
                                        //        localStorage.index00 = k;
                                 });        
                                
                                 $('.list').on('click',function(){
                                                $('.TextBox').hide();
                                                $('#message .empty-message').slideUp();
                                                if(k==1 || localStorage.length<=1){
                                                        
                                                        
                                                }
                                                else
                                                        loadList();
                                 });
                                
                                
                                 $('#list-container').on('click','#deleteall',function(){
                                                        clearall();
                                                        $('.TextBox').hide();
                                                        $('#list-container').hide();
                                                        
                                 });
                                
                                 function loadList(){
                                
                                        $('#list-container').html('<table></table>');
                                        
                                        for(var i=0; i< localStorage.length; i++){
                                                if( localStorage.key(i) != 'index00'){
                                                        var item = localStorage.getItem(localStorage.key(i));
                                                        $('#list-container table').append('<tr><td>'+ item +'</td><td><a href="#" id='+ localStorage.key(i) +' class="delete">delete</a></td></tr>');
                                                }        
                                        }
                                        $('#list-container table').append('<tr><td><a href="#" id="deleteall" class="delete">DeleteAll</a></td></tr>');
                                        $('#list-container').show();
                                
                                 }
                                
                                 function resetall(){
                                                location.reload();
                                 }
                                
                                 function clearall(){
                                                localStorage.clear();
                                 }
                }                
                 storageTest();
                 init();
                 bindEvents();
        });         
		